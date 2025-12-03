import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ViewKey =
  | "Dashboard"
  | "Exchange"
  | "MoneyX"
  | "P2P Trading"
  | "Swap Crypto"
  | "Account"
  | "Settings";

type NavState = {
  currentView: ViewKey;
};

const initialState: NavState = {
  currentView: "MoneyX",
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setView(state, action: PayloadAction<ViewKey>) {
      state.currentView = action.payload;
    },
  },
});

export const { setView } = navSlice.actions;
export default navSlice.reducer;
