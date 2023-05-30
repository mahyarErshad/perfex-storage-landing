import React from "react";
import SectionHeading from "../Utils/SectionHeading/SectionHeading";

function FeaturesSection() {
  return (
    <section className="container flex-center mb-[9.5rem] gap-10">
      <SectionHeading title="ویژگی های ماژول انبارداری" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 max-md:grid-cols-1 gap-6 w-full">
        <div className="flex-col py-10 px-4 glass-container rounded-20 w-full">
          <h3 className="gradient-text text-center font-bold max-lg:text-xl lg:text-2xl">عنوان ویژگی</h3>
          <span className="h-[0.125rem] w-full bg-gradient mt-6"></span>
          <p className="mt-8 w-full text-white text-xs leading-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
