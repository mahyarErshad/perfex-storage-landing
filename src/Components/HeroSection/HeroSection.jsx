import React from "react";
import CustomButton from "../Utils/CustomButton/CustomButton";
import image from "../../assets/images/hero-section-image.png";
import topRightBoxes from "../../assets/images/hero-boxes-top-right.png";
import bottomLeftBoxes from "../../assets/images/hero-boxes-bottom-left.png";
import { ReactComponent as Arrow } from "../../assets/images/twisted-arrow.svg";

function HeroSection() {
  return (
    <section className="container flex-center pt-[6.5rem]">
      <h1 className="font-bold text-[3.5rem] gradient-text">ماژول انبارداری اسکریپت پرفکس</h1>
      <p className="mt-8 text-center text-base text-white">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
      <CustomButton className="mt-11" />
      <div className="relative">
        <img src={image} alt="محیط کاربری ماژول انبارداری اسکریپت پرفکس" />
        <img src={topRightBoxes} className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%]" alt="Boxes" />
        <img src={bottomLeftBoxes} className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[45%]" alt="Boxes" />
        <Arrow className="absolute top-0 left-0 -translate-x-[80%] -translate-y-[80%]" />
      </div>
    </section>
  );
}

export default HeroSection;
