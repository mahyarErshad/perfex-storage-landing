import React from "react";

function FeatureSectionCard() {
  return (
    <div className="flex-col py-10 px-4 glass-container rounded-20 w-full">
      <h3 className="gradient-text text-center font-bold max-lg:text-xl lg:text-2xl">عنوان ویژگی</h3>
      <span className="h-[0.125rem] w-full bg-gradient mt-6"></span>
      <p className="mt-8 w-full text-white text-xs leading-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
    </div>
  );
}

export default FeatureSectionCard;
