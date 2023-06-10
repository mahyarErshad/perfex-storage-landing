import React, { memo } from "react";
import SectionHeading from "../Utils/SectionHeading/SectionHeading";
import FeatureSectionCard from "../Utils/FeatureSectionCard/FeatureSectionCard";

function FeaturesSection() {
  return (
    <section className="container flex-center mb-[9.5rem] gap-10">
      <SectionHeading title="ویژگی های ماژول انبارداری" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 max-md:grid-cols-1 gap-6 w-full">
        <FeatureSectionCard title="فرآیندهای بهینه شده کسب و کار" description="ایجاد راه های مناسب برای مدیریت انبار به شما کمک می کند تا فرآیندهای داخل انبار را به آرامی اصلاح کنید.این بدان معناست که نه تنها نیازاست که بهترین فرآیندها را متناسب با خود سازمان داشته باشید،بلکه فرایند هایی که متناسب با نوع محصولات شما باشند را اداره کنید." gradient="from-[#F4D03F] to-[#16A085]" />
        <FeatureSectionCard gradient="from-[#8BC6EC] to-[#9599E2]" />
        <FeatureSectionCard gradient="from-[#FF3C3C] to-[#640000]" />
        <FeatureSectionCard gradient="from-[#FBAB7E] to-[#F7CE68]" />
      </div>
    </section>
  );
}

export default memo(FeaturesSection);
