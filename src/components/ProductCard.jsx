import React from 'react'
import {
addItemToCart
} from '../redux/cart/cartSlice';
import { useDispatch } from 'react-redux'

export default function ProductCard({product}) {
    const dispatch = useDispatch();

    const handleAddToCart = ()=>{
        dispatch(addItemToCart(product));
    };
  return (
    <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>$ {product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}
