import cartReducer from './cart/cartSlice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        cart: cartReducer
    }
})
export default store;