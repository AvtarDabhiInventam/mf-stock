import { ALL_MF_COMPANY, CATEGORIES } from "@/jsondata/mutualFundConstant";
import { ALL_STOCK_COMPANY_DATA } from "@/jsondata/stockConstant";
const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  allMFCategory: [],
  allMFCompany: [],
  searchTerm: "",
};
const Slice = createSlice({
  name: "mfSlice",
  initialState,
  reducers: {
    getAllMFCategory(state, action) {
      state.allMFCategory = CATEGORIES;
    },
    getAllMFCompany(state, action) {
      state.allMFCompany = ALL_MF_COMPANY;
    },
    setMFSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.allMFCompany = ALL_MF_COMPANY.filter((item) =>
        item.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      state.allMFCategory = CATEGORIES.filter((item) =>
        item.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
    resetMFSlice: () => initialState,
  },
});

export const {
  getAllMFCategory,
  getAllMFCompany,
  resetMFSlice,
  setMFSearchTerm,
} = Slice.actions;
export default Slice.reducer;
