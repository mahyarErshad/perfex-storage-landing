import React, { memo } from "react";
import SectionHeading from "../Utils/SectionHeading/SectionHeading";
import FeatureSectionCard from "../Utils/FeatureSectionCard/FeatureSectionCard";

function FeaturesSection() {
  return (
    <section className="container flex-center mb-[9.5rem] gap-10">
      <SectionHeading title="ویژگی های ماژول انبارداری" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 max-md:grid-cols-1 gap-6 w-full">
        <FeatureSectionCard title="فرآیندهای بهینه شده کسب و کار" description="ایجاد راه های مناسب برای مدیریت انبار به شما کمک می کند تا فرآیندهای داخل انبار را به آرامی اصلاح کنید.این بدان معناست که نه تنها نیازاست که بهترین فرآیندها را متناسب با خود سازمان داشته باشید،بلکه فرایند هایی که متناسب با نوع محصولات شما باشند را اداره کنید." gradient="from-[#F4D03F] to-[#16A085]" />
        <FeatureSectionCard title="قابلیت مشاهده موجودی" description="با استفاده از قابلیت اسکن موجودی ماژول انبارداری، مشاهده سریع موجودی  امکان پذیر هست و می توانید موجودی با وضعیت نامشخص را حذف ‌کنید که شامل موجودی فراموش شده، گم شده یا اشتباه قسمت بندی شده است." gradient="from-[#8BC6EC] to-[#9599E2]" />
        <FeatureSectionCard title="کاهش حجم امور اداری" description="تمام امور اداری که شامل مجموعه‌ای از کاغذبازی و پردازش داده‌ها  به صورت دستی و زمانبر می شود ، توسط مدیریت انبارداری پرفکس ساده و سازمان‌دهی می‌شوند. با اطلاعات موجود در سیستم انبارداری، موارد جدید  را می‌توان در عرض چند ثانیه تجزیه و تحلیل و منتشر کرد." gradient="from-[#FF3C3C] to-[#640000]" />
        <FeatureSectionCard title="بهبود روابط تامین کننده و مشتری" description="ماژول انبارداری اسکریپت پرفکس با امکان  مدیریت چندین انبار و محصولات انبارها ، با قابلیت هایی مانند ایجاد حواله خروج،لیست کردن کالاهای آسیب دیده وبرگشت از فروش و... تحویل صحیح  هرمرسوله به مشتری تسریع می بخشد." gradient="from-[#FBAB7E] to-[#F7CE68]" />
      </div>
    </section>
  );
}

export default memo(FeaturesSection);
