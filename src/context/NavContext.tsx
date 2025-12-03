import React, { createContext, useContext, useState } from "react";

export type ViewKey =
  | "Dashboard"
  | "Exchange"
  | "MoneyX"
  | "P2P Trading"
  | "Swap Crypto"
  | "Account"
  | "Settings";

type NavContextType = {
  currentView: ViewKey;
  setCurrentView: (v: ViewKey) => void;
};

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentView, setCurrentView] = useState<ViewKey>("MoneyX");
  return (
    <NavContext.Provider
      value={{ currentView, setCurrentView: (v) => setCurrentView(v) }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
};

export default NavContext;
