import cartReducer from './cart/cartSlice';
import { configureStore } from "@reduxjs/toolkit";
import popularProductsReducer from './popularProducts/popularProductsSlice'
import productsReducer from './products/productsSlice'

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productsReducer,
        popularProducts: popularProductsReducer
    }
})
export default store;