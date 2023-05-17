import { Box } from "@mui/material";
import { Swiper } from "swiper/react";
// import { Autoplay } from "swiper";
import { Navigation, Pagination } from "swiper";

const AutoSwiper = ({ children }) => {
  return (
    <Box
      sx={{
        "& .swiper-slide": {
          width: {
            xs: "50%",
            sm: "35%",
            md: "25%",
            lg: "20.5%",
          },
        },
        "& .swiper-button-next, & .swiper-button-prev": {
          color: "white",
          "&::after": {
            fontSize: { xs: "1rem", md: "2rem" },
          },
        },
      }}
    >
      <Swiper
        slidesPerView="auto"
        grabCursor={true}
        style={{ width: "100%", height: "max-content" }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
        // modules={[Autoplay]}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: true,
        // }}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default AutoSwiper;
