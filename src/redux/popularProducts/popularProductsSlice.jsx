import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchPopularProducts = createAsyncThunk(
    "popularProducts/fetchPopularProducts",
    async()=>{
        const response = await
        axios.get("http://localhost:3001/products?isPopular=true");
        console.log("Response Data:", response.data);
        return response.data;
        
    }
);

const popularProductsSlice = createSlice({
    name: 'popularProducts',
    initialState: {
        products: [],
        status: 'idle',
        error: null
    },
    extraReducers:(builder) =>
        builder
  .addCase(fetchPopularProducts.pending, (state)=>{
    state.status = 'loading';
  })
  .addCase(fetchPopularProducts.fulfilled, (state, action)=>{
    state.status = 'succeeded';
    state.products = action.payload;
  })
  .addCase(fetchPopularProducts.rejected, (state, action)=>{
    state.status = 'failed';
    state.error = action.error.message;
  })
});

export default popularProductsSlice.reducer;