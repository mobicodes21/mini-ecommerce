import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { addItemToCart } from "../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
// Product detail page component
export default function ProductDetail() {
  const { id } = useParams(); // Get product ID from route params
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // State to hold product data
  const [product, setProduct] = useState(null);
  // Loading state to show spinner or loading text
  const [loading, setLoading] = useState(true);
  // Fetch product details from API when component mounts or id changes
  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);
  // Show loading text while fetching data
  if (loading) return <Typography variant="h6">در حال بارگذاری...</Typography>;
  // Show message if product not found
  if (!product) return <Typography variant="h6">محصول پیدا نشد</Typography>;
  // Calculate discounted price if discount exists
  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : null;
  // Dispatch action to add product to cart in redux store
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
      })
    );
  };

  return (
    <Container maxWidth="lg" sx={{ my: 6 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Product image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              width: "100%",
              maxHeight: { xs: 300, md: 500 },
              borderRadius: 3,
              objectFit: "cover",
              boxShadow: 4,
            }}
          />
        </Grid>

        {/* Product info */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" } }}
          >
            {product.title}
          </Typography>

          <Box sx={{ my: 2 }}>
            {/* Show discount if available */}
            {product.discount ? (
              <>
                <Typography
                  variant="body2"
                  sx={{
                    textDecoration: "line-through",
                    color: "gray",
                    mb: 0.5,
                  }}
                >
                  {product.price.toLocaleString()} تومان
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="error"
                  sx={{ fontSize: { xs: "1.3rem", md: "1.6rem" } }}
                >
                  {discountedPrice.toLocaleString()} تومان
                </Typography>
                <Chip
                  label={`${product.discount}% تخفیف`}
                  color="error"
                  sx={{ mt: 1 }}
                />
              </>
            ) : (
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ fontSize: { xs: "1.3rem", md: "1.6rem" }, mt: 1 }}
              >
                {product.price.toLocaleString()} تومان
              </Typography>
            )}
          </Box>

          <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
            دسته‌بندی: {product.category}
          </Typography>

          {/* Action buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 4, gap: 2 }}
          >
            {/* Add to cart button */}
            <Button
              onClick={handleAddToCart}
              variant="contained"
              size="large"
              startIcon={<AddShoppingCartIcon sx={{ ml: 1 }} />}
              sx={{
                backgroundColor: "primary.main",
                color: "#fff",
                px: 4,
                py: 1.2,
                fontWeight: "bold",
                "&:hover": { backgroundColor: "primary.dark" },
              }}
            >
              افزودن به سبد خرید
            </Button>
            {/* Navigate to cart button */}
            <Button
              onClick={() => navigate("/cart")}
              variant="outlined"
              size="large"
              startIcon={<ShoppingCartCheckoutIcon sx={{ ml: 1 }} />}
              sx={{
                color: "secondary.main",
                borderColor: "secondary.main",
                px: 4,
                py: 1.2,
                fontWeight: "bold",
                ml: 1,
                "&:hover": {
                  backgroundColor: "secondary.main",
                  borderColor: "secondary.dark",
                  color: "#fff",
                },
              }}
            >
              مشاهده سبد خرید
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
