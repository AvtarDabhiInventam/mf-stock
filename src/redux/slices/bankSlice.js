import { BANK_DETAILS } from "@/jsondata/accountConstant";

const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  banks: BANK_DETAILS || [],
};

const Slice = createSlice({
  name: "bankSlice",
  initialState,
  reducers: {
    addBank(state, action) {
      state.banks.push(action.payload);
    },
    getBanks(state, action) {
      state.banks = BANK_DETAILS;
    },
    resetBankSlice: () => initialState,
  },
});

export const { addBank, resetBankSlice } = Slice.actions;
export default Slice.reducer;
