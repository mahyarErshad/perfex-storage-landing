import React, { memo } from "react";
import SectionHeading from "../Utils/SectionHeading/SectionHeading";
import CustomButton from "../Utils/CustomButton/CustomButton";
import { ReactComponent as Arrow } from "../../assets/images/twisted-arrow.svg";

function AboutSection() {
  return (
    <section className="container mt-[6.5rem] mb-32 flex-center relative">
      <Arrow className="absolute top-10 -right-16 mirror max-lg:hidden" />
      <SectionHeading title="درباره ماژول انبارداری" />
      <div className="mt-8 glass-container pt-10 w-full flex-col flex-center rounded-20">
        <p className="max-w-[68.5rem] text-base text-white text-center leading-10 mb-20">ماژول انبارداری اسکریپت پرفکس، یک ابزار مدیریت موجودی است که برای کسب و کارهای کوچک و متوسط طراحی شده است. با استفاده از این ماژول، می‌توانید موجودی کالاهای خود را در محل کار یا انبار، مدیریت کنید، موجودی کالاهای خود را دریافت کرده، با توجه به آن محصولات را خریداری کرده، و به روز رسانی کنید. همچنین می‌توانید تغییرات در موجودی را پیگیری کنید و در زمان مناسب کالاهای با موجودی کمتر را خریداری کنید. این ماژول به شما امکان می‌دهد تا همه جزئیات مربوط به موجودی کالاهای خود را دریک مکان به صورت متمرکز ذخیره کرده و گزارش هایی موجودی کالا های خود را مشاهده نمایید.با استفاده از ماژول انبارداری Perfex CRM ، می‌توانید به طور دقیق موجودی کالاهای خود را مدیریت کرده و با کاهش هدررفت‌ها و بهبود توزیع موجودی‌ها، عملکرد کسب و کار خود را بهبود بخشید.</p>
        <CustomButton />
      </div>
    </section>
  );
}

export default memo(AboutSection);
