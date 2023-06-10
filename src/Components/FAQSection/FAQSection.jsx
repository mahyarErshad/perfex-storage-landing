import React, { memo, useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import SectionHeading from "../Utils/SectionHeading/SectionHeading";
import { ReactComponent as ArrowIcon } from "../../assets/images/icon-arrow.svg";
import { ReactComponent as TwistedArrowIcon } from "../../assets/images/twisted-arrow.svg";
import FaqData from "../../lib/FaqData";

function FAQSection() {
  const [state, setState] = useState(null);

  const toggleAccordion = (index) => {
    setState((prev) => (prev === index ? null : index));
  };

  return (
    <section className="container flex-center mb-[12.1875rem] gap-12 relative">
      <span className="w-[23.25rem] h-[23.25rem] bg-primary absolute top-0 left-0 max-lg:hidden -translate-x-[80%] blur-[28.125rem]"></span>
      <TwistedArrowIcon className="absolute left-12 -bottom-16 scale-x-[-1] rotate-180 max-lg:hidden" />
      <SectionHeading title="سوالات متداول" />
      <Accordion className="max-w-[54.5rem]">
        {FaqData.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader onClick={() => toggleAccordion(index)} className={`glass-container flex items-center justify-between px-6 py-4 rounded-lg w-full accordion-header ${state === index ? "open" : ""}`}>
              <h3 className="text-white text-sm">{item.header}</h3>
              <ArrowIcon className="duration-300" />
            </AccordionHeader>

            <AccordionBody className={`mb-3 px-6 accordion-body ${state === index ? "accordion-body__border" : ""}`}>
              <div className="text-white my-6 text-sm leading-10">{item.body}</div>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default memo(FAQSection);
