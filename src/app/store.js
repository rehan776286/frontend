import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./auth/authSlice.js";
import otpreducer from "./auth/otpSlice.js";

const store = configureStore({
  reducer: {
    auth: authreducer,
    otp: otpreducer,
  },
});

export default store;
