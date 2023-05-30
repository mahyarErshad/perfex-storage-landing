import React from "react";
import styles from "./styles.module.css";

function SectionHeading({title}) {
  return (
    <div className="flex-center flex-col gap-4">
      <span className={`w-10 h-2 rounded-[1.25rem] ${styles.gradient}`}></span>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeading;
