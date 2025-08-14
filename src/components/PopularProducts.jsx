import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

// Functional component to display popular products
export default function PopularProducts() {
  // State to store fetched products
  const [products, setProducts] = useState([]);
  // State to manage loading status
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // Fetch popular products from API when component mounts
  useEffect(() => {
    fetch("http://localhost:3001/products?isPopular=true")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // Stop loading once data is fetched
      });
  }, []);
  // Show loading message
  if (loading) return <p>در حال بارگذاری...</p>;
  // Show message if no products found
  if (products.length === 0) return <p>محصولی یافت نشد</p>;

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography
        variant="h5"
        textAlign="center"
        fontWeight="bold"
        mb={5}
        sx={{ color: "text.primary" }}
      >
        محبوب‌ترین محصولات
      </Typography>
      {/* Grid layout for products */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {products.map((item) => (
          <Grid
            item
            key={item.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ display: "flex" }}
          >
            {/* Card for each product */}
            <Card
              onClick={() => navigate(`/product/${item.id}`)}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 2,
                cursor: "pointer",
                minHeight: 320,
                boxSizing: "border-box",
                maxWidth: "100%",
              }}
            >
              {/* Product image */}
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  height: { xs: 150, sm: 180, md: 200 },
                  objectFit: "cover",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              />
              {/* Product details */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                {/* Product title */}
                <Typography
                  variant="h6"
                  gutterBottom
                  noWrap
                  sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" } }}
                >
                  {item.title}
                </Typography>
                {/* Product price */}
                <Typography component="p" color="text.secondary">
                  {item.price.toLocaleString()} تومان
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
