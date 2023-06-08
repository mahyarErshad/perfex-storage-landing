import React, { memo } from "react";
import CarouselCards from "./CarouselCards";
import CustomButton from "../Utils/CustomButton/CustomButton";
import SectionHeading from "../Utils/SectionHeading/SectionHeading";

const Carousel = () => {
  return (
    <section className="flex-center flex-col w-full mb-[6.25rem]">
      <SectionHeading title="مزایای ماژول انبارداری" />
      <div className="w-full flex gap-6 px-4 carousel-wrapper mt-14">
        <CarouselCards />
        <CarouselCards />
      </div>
      <CustomButton className="mt-24" />
    </section>
  );
};

export default memo(Carousel);
