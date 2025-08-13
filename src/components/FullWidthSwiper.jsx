import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./fullwidthSwiper.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    image: "/public/images/clocks.gif",
    title: "ساعت",
    link: "/categoriesSwiper/ساعت",
  },
  {
    id: 2,
    image: "/public/images/shoesBanner.webp",
    title: "کفش زنانه و مردانه",
    link: "/categoriesSwiper/کفش",
  },
  {
    id: 3,
    image: "/public/images/jewelery.webp",
    title: "زیورآلات",
    link: "/categoriesSwiper/زیورآلات",
  },
];
{/* FullWidthSwiper component:
 - Displays a full-width carousel slider showcasing product categories
 - Uses Swiper.js with autoplay, navigation, and pagination modules enabled
 - Each slide shows a category image and navigates to the corresponding category page on click
 - Responsive heights defined for different screen sizes
 - Images cover the entire slide area with a hover effect to slightly change opacity
 */
}
export default function FullWidthSwiper() {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", height: "auto" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        style={{ width: "100%" }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <Box
              onClick={() => navigate(cat.link)}
              sx={{
                position: "relative",
                width: "100%",
                height: {
                  xs: "200px", // برای موبایل
                  sm: "250px",
                  md: "350px",
                  lg: "400px",
                  xl: "450px",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
                cursor: "pointer",
                "&:hover": { opacity: 0.9 },
              }}
            >
              <Box
                component="img"
                src={cat.image}
                alt={cat.title}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
