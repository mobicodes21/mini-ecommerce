import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = ()=>{
  try{
    return JSON.parse(localStorage.getItem('cartItems')) || [];

  }catch{
    return [];
  } 
}
const saveToLocalStorage = (items)=>{
    try{
        localStorage.setItem('cartItems', JSON.stringify(items));
    }catch(err){
        console.error('خطا در ذخیره‌سازی', err);
        
    }
}
const initialState = {
    items: loadFromLocalStorage(),
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItemToCart: (state, action)=>{
            const productIndex = state.items.findIndex(item => item.id === action.payload.id);

            if(productIndex === -1){
                state.items.push({...action.payload, quantity: action.payload.quantity || 1})
            }else{
                state.items[productIndex].quantity += action.payload.quantity || 1;
            }
            saveToLocalStorage(state.items);
        },
        removeItemFromCart: (state,action)=>{
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            state.totalQuantity--;
            saveToLocalStorage(state.items);
        },
        clearCart: (state)=>{
            state.items.length = 0;
            saveToLocalStorage(state.items);

        }
    }
})
export const selectTotalPrice = (state)=>{
    return (state.cart?.items || []).reduce((total, item)=>{
        return total + item.price * item.quantity;
    }, 0);
}
export const {addItemToCart, removeItemFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;