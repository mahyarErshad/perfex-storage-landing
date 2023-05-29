import React from "react";
import styles from "./styles.module.css"

function CustomButton(className, text, href) {
  return (
    <a href={href} target="blank" className={`${className} py-4 min-w-[12.5rem]`}>
      {text}
    </a>
  );
}

export default CustomButton;
