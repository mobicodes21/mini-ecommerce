import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItemToCart: (state, action)=>{
            const newItem = action.payload;
            state.items.push(newItem);
            state.totalQuantity++;
        },
        removeItemFromCart: (state,action)=>{
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            state.totalQuantity--;
        }
    }  
})
export const {addItemToCart, removeItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;