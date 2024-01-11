import { ALL_DATA, ALL_STOCK_COMPANY_DATA } from "@/jsondata/stockConstant";

const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  allStockCategory: [],
  allStockCompany: [],
  searchTerm: "",
  activeTab: "Stock",
};
const Slice = createSlice({
  name: "stockSlice",
  initialState,
  reducers: {
    getAllStockCategory(state, action) {
      state.allStockCategory = ALL_DATA;
    },
    getAllStockCompany(state, action) {
      state.allStockCompany = ALL_STOCK_COMPANY_DATA;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.allStockCompany = ALL_STOCK_COMPANY_DATA.filter((item) =>
        item.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      state.allStockCategory = ALL_DATA.filter((item) =>
        item.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
    setActiceTab(state, action) {
      state.activeTab = action.payload;
    },
    resetStockSlice: () => initialState,
  },
});

export const {
  getAllStockCategory,
  getAllStockCompany,
  resetStockSlice,
  setSearchTerm,
  setActiceTab,
} = Slice.actions;
export default Slice.reducer;
