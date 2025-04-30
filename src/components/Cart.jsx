import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { clearCart, removeItemFromCart, selectTotalPrice } from '../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems =  useSelector((state) =>
    state.cart.items);
    const totalPrice = useSelector(selectTotalPrice);
    // const handleAddItem = (item)=>{
    //     dispatch(addItemToCart(item));
    // };

    const handleRemoveItem = (id)=>{
        dispatch(removeItemFromCart(id));
    };
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
  return (
    <Box sx={{padding: 2}}>
        <Typography variant='h4' gutterBottom>سبد خرید</Typography>
        {cartItems.length === 0 ? (
            <Typography variant='h6'>سبد خرید شما خالی است</Typography>
        ) : (
            <ul>
                {cartItems.map((item)=> (
                <>
                <Card key={item.id}>
                    <CardContent>
                        <Typography variant='h6'>{item.name}</Typography>
                        <Typography color='text.secondary' variant='h6'>${item.price}</Typography>
                        <Typography variant='h6'>{item.quantity}</Typography>
                        {console.log('price: ', item.price, 'quantity: ',item.quantity)}
                        <Typography>{(parseFloat(item.price) * parseInt(item.quantity)).toLocaleString()}</Typography>
                    </CardContent>
                    <Button variant='outlined' color='error' onClick={()=>handleRemoveItem(item.id)}>Remove</Button>
                </Card>
                <div>
                    <Typography variant='h6'>{totalPrice.toLocaleString()}</Typography>
                    <Button onClick={handleClearCart}>Clear your cart</Button>
                </div>
                </>
                ))}
            </ul>
        )}
    </Box>
  )
}
