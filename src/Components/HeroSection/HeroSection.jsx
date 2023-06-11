import React, { memo } from "react";
import CustomButton from "../Utils/CustomButton/CustomButton";
import image from "../../assets/images/hero-section-image.webp";
import topRightBoxes from "../../assets/images/hero-boxes-top-right.webp";
import bottomLeftBoxes from "../../assets/images/hero-boxes-bottom-left.webp";
import { ReactComponent as Arrow } from "../../assets/images/twisted-arrow.svg";

function HeroSection() {
  return (
    <section className="container flex-center pt-[6.5rem] relative">
      <span className="w-[11rem] h-[11rem] bg-primary absolute top-0 right-0 max-lg:hidden translate-x-[150%] blur-[10.3125rem]"></span>
      <span className="w-[11rem] h-[11rem] bg-primary absolute top-0 left-0 max-lg:hidden -translate-x-[150%] blur-[10.3125rem]"></span>
      <h1 className="font-bold max-lg:text-3xl text-[3.5rem] gradient-text__animation text-center">ماژول انبارداری اسکریپت پرفکس</h1>
      <p className="mt-8 text-center text-base text-white">با ماژول انبارداری اسکریپت مدیریت ارتباط با مشتری Perfex CRM ، فروش خود را افزایش دهید و کسب و کار خود را با راه حل های قدرتمند مدیریت موجودی، انجام سفارشات و کنترل موجودی بهبود بخشید.</p>
      <CustomButton text="پیشنمایش زنده" href="https://perfex-script.com/admin/" className="mt-11" />
      <div className="relative">
        <span className="w-[11rem] h-[11rem] bg-primary absolute top-0 right-0 max-lg:hidden translate-x-[150%] blur-[8.5625rem]"></span>
        <img src={image} alt="محیط کاربری ماژول انبارداری اسکریپت پرفکس" />
        <img src={topRightBoxes} className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] max-lg:hidden" alt="Boxes" />
        <span className="w-[11rem] h-[11rem] bg-primary absolute top-[50%] left-0 max-lg:hidden -translate-x-[150%] blur-[8.5625rem]"></span>
        <img src={bottomLeftBoxes} className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[45%] max-lg:hidden" alt="Boxes" />
        <Arrow className="absolute top-0 left-0 -translate-x-[80%] -translate-y-[80%] max-lg:hidden" />
      </div>
    </section>
  );
}

export default memo(HeroSection);
