import React from "react";
import styles from "./styles.module.css";

function CustomButton({ className, text, href }) {
  return (
    <a href={href} target="blank" className={`${className} ${styles.button} py-4 min-w-[12.5rem] flex-center text-white text-xl font-bold cursor-pointer duration-300`}>
      {text || "خرید ماژول"}
    </a>
  );
}

export default CustomButton;
