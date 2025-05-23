import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./auth/authSlice.js";
import otpreducer from "./auth/otpSlice.js";
import orderSlice from "./orderSlice.js";

const store = configureStore({
  reducer: {
    auth: authreducer,
    otp: otpreducer,
    order: orderSlice,
  },
});

export default store;
