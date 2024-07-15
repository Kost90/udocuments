import React from "react";
import HeadingSection from "@/components/headingsection/HeadingSection";
import MainSection from "./_components/mainsection/MainSection";

function page() {
  return (
    <>
      <HeadingSection
        titelText="Послуги у сфері нерухомості"
        paragraphText="відкрийте для себе наш широкий спектр послуг у сфері нерухомості та юридичної допомоги"
        className="border-b border-b-slate-400 md:pb-20"
      />
      <MainSection/>
    </>
  );
}

export default page;
