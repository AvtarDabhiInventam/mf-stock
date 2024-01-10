import { ALL_STOCK_COMPANY_DATA } from "@/jsondata/stockConstant";

const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  allStockComany: [],
};
const Slice = createSlice({
  name: "stockSlice",
  initialState,
  reducers: {
    getAllStockCompany(state, action) {
      state.allStockComany = ALL_STOCK_COMPANY_DATA;
    },
    resetStockSlice: () => initialState,
  },
});

export const { getAllStockCompany, resetStockSlice } = Slice.actions;
export default Slice.reducer;
