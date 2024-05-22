import { createSlice } from "@reduxjs/toolkit";

// Initial State
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },

  // reducer
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    //logout
    logoutAction: (state, action) => {
      state.user = null;
    },
  },
});

// Generate Action
export const { loginAction, logoutAction } = authSlice.actions;

// Generate Reducers
const authReducer = authSlice.reducer;

export default authReducer;
