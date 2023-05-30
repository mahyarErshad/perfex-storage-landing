import React from "react";
import styles from "./styles.module.css";

function SectionHeading({ title }) {
  return (
    <div className="flex-center flex-col gap-3">
      <span className={`w-10 h-2 rounded-20 ${styles.gradient}`}></span>
      <h2 className="max-lg:text-2xl lg:text-[2rem] font-bold text-center gradient-text__animation">{title}</h2>
    </div>
  );
}

export default SectionHeading;
