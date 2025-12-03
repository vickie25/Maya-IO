import React, { useState } from "react";
import SalaamLogo from "../Assets/Salaam.png";
import PremierLogo from "../Assets/Premierbank.png";
import { ArrowDownUp, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function MoneyXContent() {
  const [sendAmount, setSendAmount] = useState("0.01");
  const [receiveAmount, setReceiveAmount] =
    useState("0.2210446");
  const [sendBank, setSendBank] = useState("salam");
  const [receiveBank, setReceiveBank] = useState("premier");

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-[5px] text-3xl text-white font-[Alatsi] text-[19px] text-left p-[-1px] px-[6px] py-[0px] mt-[0px] mr-[0px] ml-[0px] font-bold font-normal">
        MoneyX
      </h1>
      <h2 className="mb-[32px] text-[rgb(146,153,163)] font-[Alexandria] mt-[15px] mr-[0px] ml-[0px]">
        Transaction Info
      </h2>

      <div className="space-y-6">
        {/* You Send Section */}
        <div className="rounded-[28px] border border-gray-800 bg-[rgba(22,21,21,0)] p-6 mt-[-30px] mr-[0px] mb-[20px] ml-[0px] px-[19px] py-[24px] mx-[0px] my-[2px]">
          <div className="mb-4 text-sm text-gray-400 font-[Alexandria]">
            You Send
          </div>
          <div className="mb-6 text-xs text-gray-500 font-[Alexandria]">
            I want to Recieve
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[28px]">
              <div className="relative">
                <Input
                  type="number"
                  value={sendAmount}
                  onChange={(e) =>
                    setSendAmount(e.target.value)
                  }
                  className="h-14 border-0 bg-[#1a1a1a] pr-16 text-2xl text-white font-[Alexandria] rounded-[25px]"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-[Alexandria]">
                  USD
                </div>
              </div>
            </div>

            <div className="rounded-[20px] px-[0px] py-[10px]">
              <Select
                value={sendBank}
                onValueChange={setSendBank}
              >
                <SelectTrigger className="h-14 border-0 bg-[#1a1a1a] text-white font-[Alexandria] rounded-[25px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="salam">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 overflow-hidden rounded-full">
                        <img
                          src={SalaamLogo}
                          alt="Salam Bank"
                          className="h-6 w-6 object-cover"
                        />
                      </div>
                      <span>Salam Bank</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="premier">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 overflow-hidden rounded-full">
                        <img
                          src={PremierLogo}
                          alt="Premier Bank"
                          className="h-6 w-6 object-cover"
                        />
                      </div>
                      <span>Premier bank</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Exchange Arrow */}
        <div className="flex justify-center m-[0px] mx-[0px] my-[-24px] py-[-22px] py-[-27px] py-[-14px] p-[0px] px-[0px] py-[-20px] py-[-30px]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-700 bg-[#1a1a1a] mx-[0px] my-[8px] px-[0px] py-[-1px]">
            <ArrowDownUp className="h-5 w-5 text-yellow-400" />
          </div>
        </div>

        {/* You Receive Section */}
        <div className="rounded-[28px] border border-gray-800 bg-[#0f0f0f] p-6 px-[19px] py-[24px]">
          <div className="mb-4 text-sm text-gray-400 font-[Alexandria]">
            You Receive
          </div>
          <div className="mb-6 text-xs text-gray-500 font-[Alexandria]">
            I want to Recieve
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="relative">
                <Input
                  type="number"
                  value={receiveAmount}
                  onChange={(e) =>
                    setReceiveAmount(e.target.value)
                  }
                  className="h-14 border-0 bg-[#1a1a1a] pr-16 text-2xl text-white font-[Alexandria] rounded-[25px]"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-[Alexandria]">
                  USD
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs text-gray-500 mt-[0px] mr-[0px] mb-[30px] ml-[0px] m-[0px]">
                Asset
              </div>
              <Select
                value={receiveBank}
                onValueChange={setReceiveBank}
              >
                <SelectTrigger className="h-14 border-0 bg-[#1a1a1a] text-white font-[Alexandria] rounded-[25px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="salam">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 overflow-hidden rounded-full">
                        <img
                          src={SalaamLogo}
                          alt="Salam Bank"
                          className="h-6 w-6 object-cover"
                        />
                      </div>
                      <span>Salam Bank</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="premier">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 overflow-hidden rounded-full">
                        <img
                          src={PremierLogo}
                          alt="Premier Bank"
                          className="h-6 w-6 object-cover"
                        />
                      </div>
                      <span>Premier bank</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Warning Message */}
        <div className="flex items-start gap-3 rounded-lg bg-red-950/20 p-4 text-sm text-red-400 mt-[0px] mr-[0px] mb-[15px] ml-[0px]">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-[rgb(245,245,245)] font-[Alexandria] text-[10px]">
            This is only an estimated price based on current
            market rates. The final price will be confirmed when
            we receive the funds.
          </p>
        </div>

        {/* Submit Button */}
        <Button className="w-full rounded-[28px] bg-emerald-600 text-white hover:bg-emerald-700 py-3 font-[Alexandria] text-[13px]">
          Submit
        </Button>
      </div>
    </div>
  );
}