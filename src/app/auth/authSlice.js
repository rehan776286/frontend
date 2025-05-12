import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, getUserAuth } from "./authThunk.js";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    message: null,
    user: null,
    loading: true,
    error: null,
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        (state.loading = false),
          (state.isVerify = action.payload.success),
          (state.message = action.payload.message);
      })
      .addCase(registerUser.rejected, (state, action) => {
        (state.isVerify = false),
          (state.loading = false),
          (state.error = action.payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = action.payload.success;
        state.message = action.payload.message;
        state.user = action.payload?.role;
      })
      .addCase(loginUser.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      })
      .addCase(getUserAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = action.payload.success;
        state.message = action.payload.message;
        state.user = action.payload?.role;
      })
      .addCase(getUserAuth.rejected, (state, action) => {
        state.loading = false;
        (state.isAuth = action.payload.success),
          (state.message = action.payload.message);
      });
  },
});

export default authSlice.reducer;

export const { setAuth } = authSlice.actions;
