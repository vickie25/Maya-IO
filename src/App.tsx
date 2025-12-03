import React from "react";
import { Header } from "./Layout/Header";
import { Sidebar } from "./Layout/Sidebar";
import { MoneyXContent } from "./components/MoneyXContent";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <MoneyXContent />
        </main>
      </div>
    </div>
  );
}
