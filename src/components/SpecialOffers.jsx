import "swiper/css";
import "swiper/css/autoplay";

import { A11y, Autoplay } from "swiper/modules";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { getSpecialOffers } from "../services/productsService";
import { useNavigate } from "react-router-dom";

export default function SpecialOffers() {
  // State to hold the list of special offer products
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();
  // Fetch special offers once on component mount
  useEffect(() => {
    getSpecialOffers().then((res) => setOffers(res.data));
  }, []);

  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "auto",
        mt: 15,
        backgroundColor: "rgba(163, 177, 138, 0.7)",
        padding: 3,
      }}
    >
      {/* Section title */}
      <Typography
        variant="h5"
        textAlign="center"
        sx={{ mb: 4, color: "background.default", fontWeight: "bold" }}
      >
        تخفیف‌های ویژه
      </Typography>
      {/* Swiper carousel with autoplay and accessibility modules */}
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          321: { slidesPerView: 2, spaceBetween: 10 },
          426: { slidesPerView: 4, spaceBetween: 15 },
          1440: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {/* Render each special offer as a SwiperSlide */}
        {offers.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                sx={{
                  width: 200,
                  maxWidth: "90vw",
                  height: { xs: 300, sm: 320, md: 340 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: 2,
                  boxShadow: 2,
                  borderBottom: "2px solid #ddd",
                  transition: "all 0.2s",
                  mx: "auto",
                  "&:hover": {
                    boxShadow: 4,
                    borderBottom: "2px solid #D4B483",
                    cursor: "pointer",
                  },
                }}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                {/* Product image */}
                <CardMedia
                  component="img"
                  image={item.image || "/placeholder.jpg"}
                  alt={item.title || "محصول"}
                  sx={{
                    height: { xs: 150, sm: 150, md: 170 },
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                {/* Product info and pricing */}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    py: 1,
                  }}
                >
                  <Typography variant="body2" noWrap>
                    {item.title || "بدون عنوان"}
                  </Typography>
                  <Typography
                    sx={{ textDecoration: "line-through" }}
                    variant="caption"
                    color="text.secondary"
                  >
                    {item.price?.toLocaleString()} تومان
                  </Typography>
                  <Typography
                    variant="body2"
                    color="success.main"
                    fontWeight="bold"
                  >
                    {(item.price * (1 - item.discount / 100)).toFixed(0)} تومان
                  </Typography>
                  <Typography color="error" variant="caption">
                    {item.discount?.toLocaleString()}% تخفیف
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
