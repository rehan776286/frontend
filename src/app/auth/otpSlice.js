import { createSlice } from "@reduxjs/toolkit";
import { otpVerify } from "./authThunk";

const otpSlice = createSlice({
  name: "otp",
  initialState: {
    loading: false,
    success: true,
    message: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(otpVerify.pending, (state) => {
        state.loading = true;
      })
      .addCase(otpVerify.fulfilled, (state, action) => {
        (state.loading = false),
          (state.success = action.payload.success),
          (state.message = action.payload.message);
      })
      .addCase(otpVerify.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default otpSlice.reducer;
