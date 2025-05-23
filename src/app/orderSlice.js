import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const placeOrder = createAsyncThunk(
  "api/order",
  async ({ id, paymentMethod, quantity, shippingAddress }, thunkAPI) => {
    try {
      const res = await api.post(`/api/productorder/${id}`, {
        paymentMethod,
        quantity,
        shippingAddress,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {}
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    paymentMethod: null,
    quantity: 1,
    shippingAddress: {},
    OrderDone: false,
  },
  reducers: {
    setPayment: (state, action) => {
      state.paymentMethod = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.OrderDone = false;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.OrderDone = action.payload.success;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.OrderDone = action.payload.success;
      });
  },
});

export const { setPayment, setQuantity, setShippingAddress } =
  orderSlice.actions;

export default orderSlice.reducer;
