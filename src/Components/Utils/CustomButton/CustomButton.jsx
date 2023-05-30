import React from "react";
import styles from "./styles.module.css";
import { ReactComponent as BackgroundShape } from "../../../assets/images/button-background-shape.svg";

function CustomButton({ className, text, href }) {
  return (
    <>
      <a href={href} target="blank" className={`${className} ${styles.button} py-4 bg-primary min-w-[12.5rem] flex-center text-white text-xl font-bold cursor-pointer duration-300 z-10`}>
        {text || "خرید ماژول"}
      </a>
      <BackgroundShape className="-translate-y-[85%]" />
    </>
  );
}

export default CustomButton;
