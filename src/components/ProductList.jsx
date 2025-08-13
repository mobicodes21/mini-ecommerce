import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getCategory } from '../services/categoryService';

export default function ProductList() {
  // Extract category parameter from URL
  const { category } = useParams();
  // For programmatic navigation to product detail pages
  const navigate = useNavigate();
  // State to hold the list of products
  const [products, setProducts] = useState([]);
  // State to handle loading indicator
  const [loading, setLoading] = useState(false);
  // State to capture and display error messages
  const [error, setError] = useState(null);
// Effect hook runs on category change to fetch products
  useEffect(() => {
    setLoading(true);
    setError(null);
    getCategory(category)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('خطا در بارگذاری محصولات');
        setLoading(false);
      });
  }, [category]);
// Show loading message while fetching data
  if (loading)
    return (
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h6">در حال بارگذاری اطلاعات...</Typography>
      </Box>
    );
// Show error message if fetching fails
  if (error)
    return (
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );

  return (
    <Box sx={{ maxWidth: '100%', mx: 'auto', my: 6, px: { xs: 2, md: 4 } }}>
      <Typography
        variant="h5"
        textAlign="center"
        sx={{ mb: 5, color: 'text.primary', fontWeight: 'bold' }}
      >
        محصولات دسته‌بندی {category}
      </Typography>

      <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {products.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="h6" textAlign="center">
              محصولی یافت نشد
            </Typography>
          </Grid>
        ) : (
          products.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4,
                  },
                }}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image || '/placeholder.jpg'}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {item.price.toLocaleString()} تومان
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}
