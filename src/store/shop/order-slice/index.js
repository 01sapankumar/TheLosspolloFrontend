import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  razorpayOrderId: null,
  amount: null,
  currency: null,
  orderId: null,
  isLoading: false,
  orderList: [],
  orderDetails: null,
};

// CREATE ORDER
export const createNewOrder = createAsyncThunk(
  "/order/createNewOrder",
  async (orderData) => {
    const response = await axios.post(
      "https://thelospollobackend.onrender.com/api/shop/order/create",
      orderData
    );

    return response.data;
  }
);

// CAPTURE PAYMENT
export const capturePayment = createAsyncThunk(
  "/order/capturePayment",
  async ({ razorpay_payment_id, razorpay_order_id, razorpay_signature, orderId }) => {
    const response = await axios.post(
      "https://thelospollobackend.onrender.com/api/shop/order/capture",
      {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        orderId,
      }
    );

    return response.data;
  }
);

// GET ALL ORDERS BY USER ID
export const getAllOrdersByUserId = createAsyncThunk(
  "/order/getAllOrdersByUserId",
  async (userId) => {
    const response = await axios.get(
      `https://thelospollobackend.onrender.com/api/shop/order/list/${userId}`
    );

    return response.data;
  }
);

// GET ORDER DETAILS
export const getOrderDetails = createAsyncThunk(
  "/order/getOrderDetails",
  async (id) => {
    const response = await axios.get(
      `https://thelospollobackend.onrender.com/api/shop/order/details/${id}`
    );

    return response.data;
  }
);

const shoppingOrderSlice = createSlice({
  name: "shoppingOrderSlice",
  initialState,
  reducers: {
    resetOrderDetails: (state) => {
      state.orderDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.isLoading = false;

        state.razorpayOrderId = action.payload.razorpayOrderId;
        state.amount = action.payload.amount;
        state.currency = action.payload.currency;
        state.orderId = action.payload.orderId;

        sessionStorage.setItem(
          "currentOrderId",
          JSON.stringify(action.payload.orderId)
        );
      })
      .addCase(createNewOrder.rejected, (state) => {
        state.isLoading = false;
        state.razorpayOrderId = null;
        state.orderId = null;
      })
      .addCase(getAllOrdersByUserId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersByUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderList = action.payload.data;
      })
      .addCase(getAllOrdersByUserId.rejected, (state) => {
        state.isLoading = false;
        state.orderList = [];
      })
      .addCase(getOrderDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload.data;
      })
      .addCase(getOrderDetails.rejected, (state) => {
        state.isLoading = false;
        state.orderDetails = null;
      });
  },
});

export const { resetOrderDetails } = shoppingOrderSlice.actions;
export default shoppingOrderSlice.reducer;
