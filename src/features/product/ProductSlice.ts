import { fetchProductAPI } from "./ProductAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {}
);
