import { Box, Grid, Typography } from '@mui/material';

import ProductCard from '../components/ProductCard';
import React from 'react'

const products = [
    {id:1, name: 'T-shirt', price: 20, description: 'This is a T-shirt with unique material.'},
    {id:2, name: 'Jeans', price: 40, description: 'This is a Jeans with unique material.'},
    {id:3, name: 'Sneakers', price: 60, description: 'This is a Sneakers with unique material.'},
    {id:3, name: 'Baseball Cap', price: 25, description: 'This is a Baseball Cap with unique material.'},
    {id:3, name: 'Shoes', price: 30, description: 'This is a Shoes with unique material.'},
];

export default function Home() {
  return (
    <Box sx={{padding:2}}>
      <Typography variant="h4" gutterBottom>Product List</Typography>
      <Grid container spacing={2}>
      {products.map((product)=> (
            <Grid item xs={12} sm={6} md={3} key={product}>
              <ProductCard key={product.id} product={product}/>
            </Grid>
        ))}
      </Grid>
    </Box>
  )
}
