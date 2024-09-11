import HeadingSection from "@/components/headingsection/HeadingSection";
import MainSection from "./_components/MainSection";
import {Metadata} from "next";

export const metadata: Metadata = {
    alternates:{
        canonical:`${process.env.SITE_URL}/propertyservice`,
    },
    title: 'Оформлення нерухомості',
    description: 'оформлення нерухомості, реєстрація права сласності, виготовлення технічного паспорту',
}

function page() {
  return (
    <>
      <HeadingSection
        titelText="Послуги у сфері нерухомості"
        paragraphText="Відкрийте для себе наш широкий спектр послуг у сфері нерухомості та юридичної допомоги"
        className="border-b border-b-slate-400 md:pb-10"
      />
      <MainSection />
    </>
  );
}

export default page;
