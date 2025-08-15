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

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/db.json`)
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.products.find(
          (product) => product.id.toString() === id
        );
        setProduct(foundProduct);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <Typography variant="h6">در حال بارگذاری...</Typography>;
  if (!product) return <Typography variant="h6">محصول پیدا نشد</Typography>;

  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : null;

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

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 4, gap: 2 }}
          >
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
