import React from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <h1 className="text-white">h1</h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1 className="text-white">h2</h1>
      </SwiperSlide>
      <h1 className="text-white">h3</h1>
    </Swiper>
  );
};

export default Carousel;
