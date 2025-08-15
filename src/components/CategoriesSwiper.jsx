import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules"; // اضافه Autoplay
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { getAllCategories } from "../services/allCategories";
import { useNavigate } from "react-router-dom";

export default function CategoriesSwiper({ onCategorySelect = () => {} }) {
  const navigate = useNavigate();

  const [getCategories, setGetCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleCategoryClick = (category) => {
    navigate(`/categoriesSwiper/${category}`);
    onCategorySelect(category);
  };

  useEffect(() => {
    getAllCategories()
      .then((categories) => {
        setGetCategories(categories);
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
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // اضافه Autoplay به ماژول‌ها
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }} // اضافه pagination قابل کلیک
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // تنظیم بهتر زمان autoplay
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          600: { slidesPerView: 2, spaceBetween: 20 },
          900: { slidesPerView: 3, spaceBetween: 30 },
        }}
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
                {/* مسیر عکس‌ها را اگر لازم است اصلاح کن */}
                <img
                  src={cat.image.startsWith("http") ? cat.image : `https://689f49313fed484cf879ac3c.mockapi.io${cat.image}`}
                  alt={cat.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
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
