import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";

function FAQSection() {
  return (
    <section className="container flex-center mb-[12.1875rem]">
      <Accordion>
        <AccordionItem>
          <AccordionHeader>
            <h3 className={`accordion-title`}>Title 1</h3>
          </AccordionHeader>

          <AccordionBody>
            <div className="accordion-body">Lorem ipsum dolor sit amet.</div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>
            <h3 className={`accordion-title`}>Title 2</h3>
          </AccordionHeader>

          <AccordionBody>
            <div className="accordion-body">Lorem ipsum dolor sit amet.</div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default FAQSection;
