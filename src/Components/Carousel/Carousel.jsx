import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ReactComponent as DoubleCheck } from "../../assets/images/double-check.svg";

const Carousel = () => {
  const arr = ["دقت بالا در کنترل موجودی در هنگام نقل و انتقال کالاها در بین انبارها", "دقت بالا در کنترل موجودی در هنگام مرجوع شدن کالاها", "مدیریت راحت انبارها", "سرعت در انجام کارهای مرتبط با انبارداری"];
  return (
    <section className="w-full flex-center">
      <Swiper
        spaceBetween={24}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {arr.map((item, index) => {
          return (
            <SwiperSlide className="flex-center gap-4 glass-container rounded-20 py-4 px-8" key={index}>
              <DoubleCheck />
              <p className="text-white">{item}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Carousel;
