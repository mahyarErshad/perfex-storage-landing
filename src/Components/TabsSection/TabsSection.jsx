import React from "react";
import SectionHeading from "../Utils/SectionHeading/SectionHeading";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import laptopImage from "../../assets/images/Tabs/Laptop.png";

function TabsSection() {
  const array = Array.from({ length: 6 }, () => 1);
  return (
    <Tabs className="w-full px-4 flex-col mx-auto flex-center mb-32 relative">
      <span className="w-[23.25rem] h-[23.25rem] bg-primary absolute top-[34%] right-[4%] max-lg:hidden blur-[28.125rem]"></span>
      <SectionHeading title="تصاویر ماژول انبارداری" />
      <TabList className="mt-10 flex-center flex-wrap gap-6 mb-20">
        {array.map((_, index) => (
          <Tab className=" flex-center flex-col cursor-pointer duration-300 tab" key={index}>
            <div className="glass-container rounded-20 py-6 max-h-[4.5rem] text-white w-[12.5rem] font-bold text-center z-10">عنوان تصویر</div>
            <span className="w-[85%] h-2 -translate-y-1 bg-gradient-to-r from-[#8BC6EC] to-[#9599E2] rounded-20 duration-300 opacity-0 z-0"></span>
          </Tab>
        ))}
      </TabList>
      {array.map((_, index) => (
        <TabPanel key={index}>
          <img src={laptopImage} alt="laptop" />
        </TabPanel>
      ))}
    </Tabs>
  );
}

export default TabsSection;
