import { WALLET_HISTORY } from "@/jsondata/accountConstant";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  walletHistoryList: [],
  //   banks: BANK_DETAILS || [],
};

const Slice = createSlice({
  name: "wallateSlice",
  initialState,
  reducers: {
    addWithdrawal(state, action) {
      state.walletHistoryList.push(action.payload);
    },
    addMoney(state, action) {
      state.walletHistoryList.push(action.payload);
    },
    getWallateHistory(state, action) {
      state.walletHistoryList = WALLET_HISTORY;
    },
    resetBankSlice: () => initialState,
  },
});

export const { getWallateHistory, addWithdrawal } = Slice.actions;
export default Slice.reducer;
