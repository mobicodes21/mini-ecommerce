import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import { removeItemFromCart } from '../redux/cart/cartSlice';

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems =  useSelector((state) =>
    state.cart.items);

    // const handleAddItem = (item)=>{
    //     dispatch(addItemToCart(item));
    // };

    const handleRemoveItem = (id)=>{
        dispatch(removeItemFromCart(id));
    };
  return (
    <div>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
            <p>Cart is empty.</p>
        ) : (
            <ul>
                {cartItems.map((item)=> (
                <li key={item.id}>
                    {item.name} - {item.price}$
                    <button onClick={()=>handleRemoveItem(item.id)}>Remove</button>
                </li>    
                ))}
            </ul>
        )}
    </div>
  )
}
