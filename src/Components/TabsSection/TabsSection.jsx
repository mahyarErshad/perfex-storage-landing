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
          <Tab className=" flex-center flex-col cursor-pointer duration-300" key={index}>
            <div className="glass-container rounded-20 py-6 max-h-[4.5rem] text-white w-[12.5rem] font-bold text-center">عنوان تصویر</div>
            <span className="w-[85%] h-1 bg-gradient-to-r from-[#8BC6EC] to-[#9599E2] rounded-20 duration-300 opacity-0"></span>
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}

export default TabsSection;
