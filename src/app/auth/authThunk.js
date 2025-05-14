import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuth } from "./authSlice";
import api from "../../api.js";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, thunkAPI) => {
   
    try {
   
      const res = await api.post(
        "/api/auth/register",
        { name, email, password },
       
      );
      
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
      const res = await api.post(
        "/api/auth/login",
        { email, password },
       
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
      const res = await api.post(
        "/api/auth/mailverify",
        { otp },
     
      );
      if (res.data.success) {
        thunkAPI.dispatch(setAuth(true));
      }

      return res.data;
    } catch (error) {
     
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);
export const getUserAuth = createAsyncThunk(
  "auth/is-auth",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("api/auth/is-auth");
 

      return res.data;

      // if (res.data.success) {
      //   thunkAPI.dispatch(setAuth(true));
      // }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);
