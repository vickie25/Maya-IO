import React from "react";
import { Provider, useSelector } from "react-redux";
import { Header } from "./Layout/Header";
import { Sidebar } from "./Layout/Sidebar";
import { MoneyXContent } from "./components/MoneyXContent";
import Dashboard from "./components/Dashboard";
import Account from "./components/Account";
import Xchange from "./components/Xchange";
import Settings from "./components/Settings";
import SwapCrypto from "./components/Swap Crypto";
import P2PTrading from "./components/P2P Trading";
import store, { RootState } from "./store";

function MainContent() {
  const currentView = useSelector((s: RootState) => s.nav.currentView);
  switch (currentView) {
    case "Dashboard":
      return <Dashboard />;
    case "Exchange":
      return <Xchange />;
    case "MoneyX":
      return <MoneyXContent />;
    case "P2P Trading":
      return <P2PTrading />;
    case "Swap Crypto":
      return <SwapCrypto />;
    case "Account":
      return <Account />;
    case "Settings":
      return <Settings />;
    default:
      return <MoneyXContent />;
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <MainContent />
          </main>
        </div>
      </div>
    </Provider>
  );
}
