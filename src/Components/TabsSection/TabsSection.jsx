import React from "react";
import SectionHeading from "../Utils/SectionHeading/SectionHeading";
import { Tab, TabList, Tabs } from "react-tabs";

function TabsSection() {
  const array = Array.from({ length: 6 }, () => 1);
  return (
    <Tabs className="container flex-center mb-32">
      <SectionHeading title="تصاویر ماژول انبارداری" />
      <TabList className="mt-10 flex-center gap-6">
        {array.map((_, index) => (
          <Tab className="glass-container flex-center cursor-pointer rounded-20 py-6 max-h-[4.5rem] text-white w-[12.5rem] font-bold duration-300" key={index}>
            عنوان تصویر
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}

export default TabsSection;
