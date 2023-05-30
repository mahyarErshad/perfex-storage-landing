import React from "react";
import SectionHeading from "../Utils/SectionHeading/SectionHeading";

function FeaturesSection() {
  return (
    <section className="container flex-center mb-[9.5rem] gap-10">
      <SectionHeading title="ویژگی های ماژول انبارداری" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 max-md:grid-cols-1 gap-6">
      <div className="flex-col py-10 px-4 glass-container rounded-20">
      <h3 className="gradient-text text-center font-bold text-2xl">عنوان ویژگی</h3>
      </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
