import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = () => {
    const arr = ["دقت بالا در کنترل موجودی در هنگام نقل و انتقال کالاها در بین انبارها", "دقت بالا در کنترل موجودی در هنگام مرجوع شدن کالاها", "مدیریت راحت انبارها", "سرعت در انجام کارهای مرتبط با انبارداری"]
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
