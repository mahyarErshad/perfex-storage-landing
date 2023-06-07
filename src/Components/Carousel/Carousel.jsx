import React from "react";
import CarouselCards from "./CarouselCards";

const Carousel = () => {
  return (
    <section className="w-full flex gap-6 px-4 mb-[6.25rem] carousel-wrapper">
      <CarouselCards />
      <CarouselCards />
    </section>
  );
};

export default Carousel;
