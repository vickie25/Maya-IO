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

export function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Dashboard", active: false },
    { icon: Repeat, label: "Exchange", active: false },
    { icon: DollarSign, label: "MoneyX", active: true },
    { icon: Users, label: "P2P Trading", active: false },
    {
      icon: ArrowLeftRight,
      label: "Swap Crypto",
      active: false,
    },
    {
      icon: Key,
      label: "Account",
      active: false,
      hasDropdown: true,
    },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <aside className="w-64 bg-[#0f0f0f] p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                item.active
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