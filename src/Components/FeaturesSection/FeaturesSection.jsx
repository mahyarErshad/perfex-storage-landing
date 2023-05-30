import React from "react";
import SectionHeading from "../Utils/SectionHeading/SectionHeading";
import FeatureSectionCard from "../Utils/FeatureSectionCard/FeatureSectionCard";

function FeaturesSection() {
  return (
    <section className="container flex-center mb-[9.5rem] gap-10">
      <SectionHeading title="ویژگی های ماژول انبارداری" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 max-md:grid-cols-1 gap-6 w-full">
        <FeatureSectionCard />
        <FeatureSectionCard />
        <FeatureSectionCard />
        <FeatureSectionCard />
      </div>
    </section>
  );
}

export default FeaturesSection;
