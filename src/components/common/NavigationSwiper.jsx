import { Box } from "@mui/material";
import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";

const NavigationSwiper = ({ children }) => {
  return (
    <Box
      sx={{
        "& .swiper-slide": {
          width: "80%",
          opacity: "0.6",
          paddingBottom: "3rem",
        },
        "& .swiper-slide-active": { opacity: 1 },
        "& .swiper-pagination-bullet": {
          backgroundColor: "text.primary",
        },
        "& .swiper-button-next, & .swiper-button-prev": {
          color: "text.primary",
          "&::after": {
            fontSize: { xs: "1rem", md: "2rem" },
          },
        },
        "& .swiper": {
          paddingX: { xs: "1rem", md: "4rem" },
        },
        // boxShadow: "2px 2px 100px 5px rgba(255,255,255,0.5)",
      }}
    >
      <Swiper
        spaceBetween={10}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
        style={{ width: "80%", height: "max-content" }}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default NavigationSwiper;
