import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuth } from "./authSlice";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, thunkAPI) => {
    console.log(email);
    try {
      console.log("running");
      const res = await axios.post(
        "/api/auth/register",
        { name, email, password },
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await axios.post(
        "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);
export const otpVerify = createAsyncThunk(
  "auth/otpverify",
  async (otp, thunkAPI) => {
    try {
      const res = await axios.post(
        "/api/auth/mailverify",
        { otp },
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        thunkAPI.dispatch(setAuth(true));
      }

      return res.data;
    } catch (error) {
      console.log(res.data);
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);
export const getUserAuth = createAsyncThunk(
  "auth/is-auth",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("api/auth/is-auth", {
        withCredentials: true,
      });
console.log(`not working`)
console.log(res.data)

      return res.data;

      // if (res.data.success) {
      //   thunkAPI.dispatch(setAuth(true));
      // }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);
