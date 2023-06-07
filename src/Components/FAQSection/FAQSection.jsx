import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import React from "react";

function FAQSection() {
  const items = [
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
    <section className="container flex-center">
      <Accordion>
        {items.map(({ header, content }, i) => (
          <AccordionItem header={header} key={i}>
            {content}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FAQSection;
