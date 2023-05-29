import React from "react";
import CustomButton from "../Utils/CustomButton/CustomButton";
import image from "../../assets/images/hero-section-image.png";

function HeroSection() {
  return (
    <section className="container flex-center pt-[6.5rem]">
      <h1 className="font-bold text-[3.5rem] gradient-text">ماژول انبارداری اسکریپت پرفکس</h1>
      <p className="mt-8 text-center text-base text-white">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
      <CustomButton className="mt-11" />
      <div className="relative">
        <img src={image} alt="محیط کاربری ماژول انبارداری اسکریپت پرفکس" />
      </div>
    </section>
  );
}

export default HeroSection;
