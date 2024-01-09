const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  banks: [],
};
const Slice = createSlice({
  name: "bankSlice",
  initialState,
  reducers: {
    addBank(state, action) {
      state.banks.push(action.payload);
    },
  },
});

export const { addBank } = Slice.actions;
export default Slice.reducer;
