import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = () => {
  return (
    <section className="w-full flex-center">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <h1 className="text-white">h1</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="text-white">h2</h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
