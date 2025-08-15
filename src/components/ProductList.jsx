import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// تابع گرفتن محصولات از API و فیلتر بر اساس category
async function getCategory(categoryValue) {
  try {
    const response = await fetch('https://689f49313fed484cf879ac3c.mockapi.io/store');
    const data = await response.json();
    if (!data || data.length === 0) return [];

    const allProducts = data[0].products;

    if (!categoryValue) return allProducts;

    // فیلتر محصولات بر اساس دسته‌بندی
    return allProducts.filter(product => product.category === categoryValue);
  } catch (error) {
    throw new Error('خطا در دریافت داده‌ها', error);
  }
}

export default function ProductList() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getCategory(category)
      .then((prods) => {
        setProducts(prods);
        setLoading(false);
      })
      .catch(() => {
        setError('خطا در بارگذاری محصولات');
        setLoading(false);
      });
  }, [category]);

  if (loading)
    return (
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h6">در حال بارگذاری اطلاعات...</Typography>
      </Box>
    );

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
        محصولات دسته‌بندی {category || 'همه'}
      </Typography>

      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: 4 },
                }}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={
                    item.image.startsWith('http')
                      ? item.image
                      : `https://689f49313fed484cf879ac3c.mockapi.io${item.image}`
                  }
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {item.discount > 0 && item.newPrice
                      ? (
                          item.newPrice.toLocaleString() +
                          ' تومان '
                        )
                      : item.price.toLocaleString() + ' تومان'}
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
