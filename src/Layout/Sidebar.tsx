import {
  Home,
  Repeat,
  DollarSign,
  Users,
  ArrowLeftRight,
  Key,
  Settings,
  ChevronDown,
} from "lucide-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { setView } from "../store/navSlice";

export function Sidebar() {
  const dispatch = useDispatch();
  const currentView = useSelector((s: RootState) => s.nav.currentView);

  const menuItems: Array<{
    icon: any;
    label: string;
    hasDropdown?: boolean;
  }> = [
    { icon: Home, label: "Dashboard" },
    { icon: Repeat, label: "Exchange" },
    { icon: DollarSign, label: "MoneyX" },
    { icon: Users, label: "P2P Trading" },
    { icon: ArrowLeftRight, label: "Swap Crypto" },
    { icon: Key, label: "Account", hasDropdown: true },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="w-64 bg-[#0f0f0f] p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = currentView === item.label;
          return (
            <div
              key={item.label}
              onClick={() => dispatch(setView(item.label as any))}
              className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                active
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="flex-1 text-sm font-[Alexandria] font-normal text-[11px] not-italic no-underline">
                {item.label}
              </span>
              {item.hasDropdown && (
                <ChevronDown className="h-4 w-4" />
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}