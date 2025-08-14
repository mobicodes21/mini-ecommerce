// Import Swiper core styles and custom styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { getAllCategories } from "../services/allCategories";
import { useNavigate } from "react-router-dom";

// Swiper component to display product categories as a carousel
export default function CategoriesSwiper({ onCategorySelect = () => {} }) {
  const navigate = useNavigate();

  const [getCategories, setGetCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Navigate to selected category and call optional callback
  const handleCategoryClick = (category) => {
    navigate(`/categoriesSwiper/${category}`);
    onCategorySelect(category);
  };
// Fetch all categories on component mount
  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setGetCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(`خطا در بارگذاری دسته‌بندی‌ها: ${err.message}`);
        setLoading(false);
      });
  }, []);

  if (loading) return <Typography>در حال بارگذاری دسته‌بندی‌ها...</Typography>;
  if (error) return <Typography>{error}</Typography>;
  return (
    <Box sx={{ maxWidth: "100%", margin: "auto", my: 4 }}>
      <Typography
        variant="h5"
        textAlign="center"
        sx={{ mb: 5, color: "text.primary", fontWeight: "bold" }}
      >
        دسته بندی محصولات
      </Typography>
      {/* Swiper carousel with category cards */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        {getCategories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <Box
              sx={{
                textAlign: "center",
                padding: "30px",
                borderRadius: "12px",
                background: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                },
              }}
              onClick={() => handleCategoryClick(cat.value)}
            >
              {/* Category image */}
              <Box
                sx={{
                  mb: 1,
                  width: { xs: "70px", sm: "80px", md: "100px" },
                  height: { xs: "70px", sm: "80px", md: "100px" },
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              {/* Category title */}
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "14px", fontWeight: "bold" }}
              >
                {cat.title}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
