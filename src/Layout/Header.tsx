import React from "react";
import { Bitcoin, Download, Moon, User } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function Header() {
  return (
    <header className="border-b border-gray-800 bg-[#0f0f0f] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 bg-[rgba(9,140,99,0)]">
              <Bitcoin
                className="h-4 w-4 text-yellow-400 fill-yellow-400"
                strokeWidth={3}
              />
            </div>
            <span className="text-xl tracking-wide text-[rgb(9,140,99)] font-[Alatsi] text-[32px] not-italic no-underline text-right font-normal font-bold py-[0px]">
              MAYA
              <span className="playfair-display-maya text-[32px]">.io</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8 px-[0px] py-[5px] ml-24">
            <a
              href="#"
              className="text-sm text-gray-300 border-b-2 border-transparent pb-1 transition-all duration-200 ease-out hover:text-white hover:border-emerald-600 font-[Alexandria] text-[13px]"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 border-b-2 border-transparent pb-1 transition-all duration-200 ease-out hover:text-white hover:border-emerald-600 font-[Alexandria] text-[13px]"
            >
              Market
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 border-b-2 border-transparent pb-1 transition-all duration-200 ease-out hover:text-white hover:border-emerald-600 font-[Alexandria] text-[13px]"
            >
              Rates
            </a>
            <a
              href="#"
              className="text-sm text-gray-300 border-b-2 border-transparent pb-1 transition-all duration-200 ease-out hover:text-white hover:border-emerald-600 font-[Alexandria] text-[12px]"
            >
              Blog
            </a>
          </nav>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4 px-[-8px] py-[0px]">
          <Button className="flex items-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 font-[Alexandria] px-[16px] py-[1px] mx-[0px] my-[-8px] rounded-[10px]">
            <Download className="h-4 w-4 text-yellow-400" />
            <span>Deposit</span>
          </Button>

          {/* Profile icon (circular) */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 cursor-pointer">
            <User className="h-4 w-4 text-white" />
          </div>

          {/* Country flag dropdown - circular flag */}
          <Select defaultValue="uk">
            <SelectTrigger className="h-8 w-8 rounded-full border-0 bg-gray-700 text-white text-xs px-0 flex items-center justify-center overflow-hidden">
              <SelectValue
                placeholder={
                  <img
                    src="/download.jpeg"
                    alt="United Kingdom"
                    className="h-8 w-8 object-cover"
                  />
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uk">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 overflow-hidden rounded-full">
                    <img
                      src="/uk-flag.png"
                      alt="United Kingdom"
                      className="h-6 w-6 object-cover"
                    />
                  </div>
                  <span>United Kingdom</span>
                </div>
              </SelectItem>
              <SelectItem value="us">
                <span>🇺🇸</span>
              </SelectItem>
              <SelectItem value="ng">
                <span>🇳🇬</span>
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Theme toggle - circular icon beside flag */}
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white transition-colors duration-200 ease-out"
          >
            <Moon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}