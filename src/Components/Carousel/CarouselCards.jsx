import React, { memo } from "react";
import { ReactComponent as DoubleCheck } from "../../assets/images/double-check.svg";

function CarouselCards() {
  const arr = ["دقت بالا در کنترل موجودی در هنگام نقل و انتقال کالاها در بین انبارها", "دقت بالا در کنترل موجودی در هنگام مرجوع شدن کالاها", "مدیریت راحت انبارها", "سرعت در انجام کارهای مرتبط با انبارداری"];

  return (
    <div className="flex-center gap-6 carousels">
      {arr.map((item, index) => {
        return (
          <div className="flex-center gap-4 glass-container rounded-20 py-4 px-8 carousel" key={index}>
            <DoubleCheck />
            <p className="text-white">{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default memo(CarouselCards);
