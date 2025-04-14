import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

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
    <Card sx={{maxWidth: 345, boxShadow: 3}}>
        {/* <CardMedia>
        </CardMedia> */}
        <CardContent>
        <Typography variant="h6" gutterBottom>{product.name}</Typography>
        <Typography variant='body2' color='text.secondary'>{product.description}</Typography>
        <Typography variant='body1'>${product.price}</Typography>
        <Button size='small' sx={{marginTop: 2}} onClick={handleAddToCart}>Add to Cart</Button>
        </CardContent>
    </Card>
  )
}
