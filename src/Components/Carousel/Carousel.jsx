import React from "react";
import CarouselCards from "./CarouselCards";
import CustomButton from "../Utils/CustomButton/CustomButton";

const Carousel = () => {
  return (
    <section className="flex-center flex-col w-full mb-[6.25rem]">
      <div className="w-full flex gap-6 px-4 carousel-wrapper">
        <CarouselCards />
        <CarouselCards />
      </div>
      <CustomButton className="mt-24" />
    </section>
  );
};

export default Carousel;
