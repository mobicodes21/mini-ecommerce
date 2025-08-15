import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  clearCart,
  removeItemFromCart,
  selectTotalPrice,
} from "../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import CheckoutButton from "./CheckoutButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items || []);
  const totalPrice = useSelector(selectTotalPrice);
  const [products, setProducts] = useState([]);
  // Fetch product data from local server on component mount
useEffect(() => {
  fetch("https://689f49313fed484cf879ac3c.mockapi.io/store")
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setProducts(data[0].products || []);
      } else {
        setProducts([]);
      }
    })
    .catch((err) => console.error("خطا در دریافت داده", err));
}, []);

  // Merge cart items with full product data (image, name, price)
  const mergedCartItems = cartItems.map((cartItem) => {
    const fullProduct = products.find((p) => p.id === cartItem.id);
    return {
      ...cartItem,
      image: fullProduct?.image || "",
      name: fullProduct?.name || cartItem.name,
      price: fullProduct?.price || cartItem.price,
    };
  });
  // Remove individual item from cart
  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };
  // Clear all items in cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Box
      sx={{
        px: 5,
        py: 3,
        maxWidth: 900,
        mx: "auto",
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      {/* Cart header with icon */}
      <Box display="flex" alignItems="center" justifyContent="center" mb={3}>
        <ShoppingCartIcon
          sx={{ fontSize: 30, color: "secondary.main", ml: 1 }}
        />
        <Typography variant="h4" fontWeight="bold" color="text.primary">
          سبد خرید
        </Typography>
      </Box>

      {/* If cart is empty, show message */}
      {mergedCartItems.length === 0 ? (
        <Typography variant="h6" textAlign="center" color="text.secondary">
          سبد خرید شما خالی است
        </Typography>
      ) : (
        <>
          {/* Cart item list */}
          <Grid container spacing={2}>
            {mergedCartItems.map((item) => (
              <Grid
                item
                xs={12}
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                    width: "100%",
                    boxSizing: "border-box",
                    gap: 1,
                  }}
                >
                  {/* Product image */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      flexShrink: 0,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 2,
                        flexShrink: 0,
                      }}
                    />
                  </Box>
                  {/* Product details */}
                  <Box
                    sx={{
                      flexGrow: 1,
                      minWidth: 0,
                      mr: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        wordBreak: "break-word",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography color="text.secondary">
                      قیمت: {parseInt(item.price).toLocaleString()} تومان
                    </Typography>
                    <Typography>تعداد: {item.quantity}</Typography>
                    <Typography fontWeight="bold">
                      مجموع:{" "}
                      {(parseInt(item.price) * item.quantity).toLocaleString()}{" "}
                      تومان
                    </Typography>
                  </Box>
                  {/* Remove item button */}
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleRemoveItem(item.id)}
                    sx={{
                      minWidth: 80,
                      flexShrink: 0,
                      mt: { xs: 1, sm: 0 },
                      alignSelf: { xs: "flex-start", sm: "center" },
                    }}
                  >
                    حذف
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 4 }} />
          {/* Total price and clear cart */}
          <Box textAlign="center">
            <Typography variant="h5" fontWeight="bold">
              جمع کل: {totalPrice.toLocaleString()} تومان
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{ mt: 2 }}
              onClick={handleClearCart}
            >
              پاک کردن سبد خرید
            </Button>
            <CheckoutButton />
          </Box>
        </>
      )}
    </Box>
  );
}
