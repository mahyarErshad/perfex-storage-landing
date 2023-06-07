import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import SectionHeading from "../Utils/SectionHeading/SectionHeading";
import { ReactComponent as ArrowIcon } from "../../assets/images/icon-arrow.svg";

function FAQSection() {
  const data = [
    {
      header: "آیا کالاهای ثبت شده قبلی در اسکریپت در این ماژول نیز قابل استفاده هستند؟",
    },
    {
      header: "آیا می توان چند انبار مختلف را مدیریت کرد؟",
    },
    {
      header: "آیا می شود یک محصول را در چند انبار قرار داد؟",
    },
    {
      header: "آیا می توان یک محصول را در بین انبارهای مختلف جابجا کرد؟",
    },
    {
      header: "آیا امکان انبارگردانی در این ماژول وجود دارد؟",
    },
    {
      header: "آیا امکان تعیین شخص یا ناظر برای کنترل و تایید ورود و خروج کالا از انبارها وجود دارد؟",
    },
    {
      header: "آیا امکان مشاهده وضعیت مرسوله یا بسته ارسالی توسط مشتری وجود دارد؟",
    },
  ];
  return (
    <section className="container flex-center mb-[12.1875rem] gap-12">
      <SectionHeading title="سوالات متداول" />
      <Accordion className="max-w-[54.5rem]">
        {data.map((item, i) => {
          return (
            <AccordionItem key={i}>
              <AccordionHeader className="glass-container flex items-center justify-between px-6 py-4 rounded-lg w-full accordion-header">
                <h3 className="text-white text-sm">{item.header}</h3>
                <ArrowIcon className="duration-300" />
              </AccordionHeader>

              <AccordionBody className="mb-3">
                <div className="text-white">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</div>
              </AccordionBody>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}

export default FAQSection;
