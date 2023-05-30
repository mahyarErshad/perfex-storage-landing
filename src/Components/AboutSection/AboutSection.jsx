import React from "react";
import SectionHeading from "../Utils/SectionHeading/SectionHeading";
import CustomButton from "../Utils/CustomButton/CustomButton";
import { ReactComponent as Arrow } from "../../assets/images/twisted-arrow.svg";

function AboutSection() {
  return (
    <section className="container mt-[6.5rem] mb-32 flex-center relative">
      <Arrow className="absolute top-0 right-0" />
      <SectionHeading title="درباره ماژول انبارداری" />
      <div className="mt-8 glass-container pt-10 w-full flex-col flex-center rounded-20">
        <p className="max-w-[68.5rem] text-base text-white text-center leading-10 mb-20">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
        <CustomButton />
      </div>
    </section>
  );
}

export default AboutSection;
