import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./fullwidthSwiper.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery, useTheme } from "@mui/material";

import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    images: {default: "/public/images/clocks.gif",
      mobile: "/public/images/clock3.jpg"
    },
    title: "ساعت",
    link: "/categoriesSwiper/ساعت",
  },
  {
    id: 2,
    images: {default: "/public/images/shoesBanner.webp",
      mobile: '/public/images/shoesBanner3.jpg'
    },
    title: "کفش زنانه و مردانه",
    link: "/categoriesSwiper/کفش",
  },
  {
    id: 3,
    images: {default: "/public/images/jewelery.webp",
      mobile: "/public/images/jewlery2.jpg"
    },
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
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // sm یعنی کمتر از 600px

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
        {categories.map((cat) => {
  const imageSrc =
    typeof cat.images === "string"
      ? cat.images
      : isMobile
      ? cat.images.mobile
      : cat.images.default;

  return (
    <SwiperSlide key={cat.id}>
      <Box
        onClick={() => navigate(cat.link)}
        sx={{
          position: "relative",
          width: "100%",
          height: {
            xs: "200px",
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
          src={imageSrc}
          alt={cat.title}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            overflow: "hidden",
          }}
        />
      </Box>
    </SwiperSlide>
  );
})}

      </Swiper>
    </Box>
  );
}
