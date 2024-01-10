const { createSlice, nanoid } = require("@reduxjs/toolkit");
import data from "../../JSON/auth.json";

const initialState = {
  isLogin: false,
  user: {},
  users: data.users || [],
};

const Slice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loginUser(state, action) {
      if (action.payload) {
        state.isLogin = true;
        state.user = action.payload;
        localStorage.setItem("isLoggedin", true);
      }
    },
    logout: (state, action) => {
      state.isLogin = false;
      state.user = {};
      localStorage.setItem("isLoggedin", false);
    },
    addUser(state, action) {
      state.users.push(action.payload);
    },
    resetAuthSlice: () => initialState,
  },
});

export const { loginUser, addUser, logout, resetAuthSlice } = Slice.actions;
export default Slice.reducer;
