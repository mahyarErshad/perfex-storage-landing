import React from "react";
import SectionHeading from "../Utils/SectionHeading/SectionHeading";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import image1 from "../../assets/images/Tabs/1.webp";
import image2 from "../../assets/images/Tabs/2.webp";
import image3 from "../../assets/images/Tabs/3.webp";
import image4 from "../../assets/images/Tabs/4.webp";
import image5 from "../../assets/images/Tabs/5.png";
import image6 from "../../assets/images/Tabs/6.png";

function TabsSection() {
  const array = [
    {
      text: "ایجاد انبارهای مختلف",
      image: image1,
    },
    {
      text: "مدیریت کالاها و خدمات",
      image: image2,
    },
    {
      text: "صدور حواله ورودی انبار",
      image: image3,
    },
    {
      text: "صدور حواله خروجی انبار",
      image: image4,
    },
    {
      text: "ایجاد حواله مبادلات داخلی",
      image: image5,
    },
    {
      text: "لیست بارنامه ها",
      image: image6,
    },
  ];
  return (
    <Tabs className="w-full px-4 flex-col mx-auto flex-center mb-32 relative">
      <span className="w-[23.25rem] h-[23.25rem] bg-primary absolute top-[34%] right-[4%] max-lg:hidden blur-[28.125rem]"></span>
      <SectionHeading title="تصاویر ماژول انبارداری" />
      <TabList className="mt-10 flex-center flex-wrap gap-6 mb-20">
        {array.map(({ text }, index) => (
          <Tab className=" flex-center flex-col cursor-pointer duration-300 tab" key={index}>
            <div className="glass-container rounded-20 py-6 max-h-[4.5rem] text-white w-[12.5rem] font-bold text-center z-10">{text}</div>
            <span className="w-[85%] h-2 -translate-y-1 bg-gradient-to-r from-[#8BC6EC] to-[#9599E2] rounded-20 duration-300 opacity-0 z-0"></span>
          </Tab>
        ))}
      </TabList>
      <div className="w-full min-h-[42rem] flex-center">
        {array.map(({ text, image }, index) => (
          <TabPanel key={index}>
            <img src={image} alt={text} />
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
}

export default TabsSection;
