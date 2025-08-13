import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:1, name: 'T-shirt', price: 20, description: 'This is a T-shirt with unique material.'},
    {id:2, name: 'Jeans', price: 40, description: 'This is a Jeans with unique material.'},
    {id:3, name: 'Sneakers', price: 60, description: 'This is a Sneakers with unique material.'},
    {id:4, name: 'Baseball Cap', price: 25, description: 'This is a Baseball Cap with unique material.'},
    {id:5, name: 'Shoes', price: 30, description: 'This is a Shoes with unique material.'},
];
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{}
})
export default productsSlice.reducer;