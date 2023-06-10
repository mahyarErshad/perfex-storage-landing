import React, { memo } from "react";

function FeatureSectionCard({ gradient, title, description }) {
  return (
    <div className="flex-col flex-center">
      <span className={`w-[85%] h-2 rounded-[0.3125rem] bg-gradient-to-r ${gradient}`}></span>
      <div className="flex-col py-10 px-4 -mt-1 glass-container rounded-20 w-full">
        <h3 className="text-white text-center font-bold max-lg:text-base lg:text-lg">{title}</h3>
        <span className="h-[0.125rem] w-full bg-gradient mt-6"></span>
        <p className="mt-8 w-full text-white text-xs leading-6 min-h-[9rem]">{description}</p>
      </div>
    </div>
  );
}

export default memo(FeatureSectionCard);
