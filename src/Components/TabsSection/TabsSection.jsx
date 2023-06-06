import React from "react";
import SectionHeading from "../Utils/SectionHeading/SectionHeading";
import { Tab, TabList, Tabs } from "react-tabs";

function TabsSection() {
  const array = Array.from({ length: 6 }, () => 1);
  return (
    <Tabs className="container flex-center">
      <SectionHeading title="تصاویر ماژول انبارداری" />
      <TabList className="mt-10 flex-center gap-6">
        {array.map((_, index) => (
          <Tab key={index}>عنوان تصویر</Tab>
        ))}
      </TabList>
    </Tabs>
  );
}

export default TabsSection;
