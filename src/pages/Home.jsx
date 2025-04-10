import ProductCard from '../components/ProductCard';
import React from 'react'

const products = [
    {id:1, name: 'T-shirt', price: 20},
    {id:2, name: 'Jeans', price: 40},
    {id:3, name: 'Sneakers', price: 60},
];

export default function Home() {
  return (
    <div>
        {products.map((product)=> (
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}
