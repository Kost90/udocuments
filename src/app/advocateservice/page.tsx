import HeadingSection from "@/components/headingsection/HeadingSection";
import MainSection from "./_components/MainSection";
import {Metadata} from "next";

export const metadata: Metadata = {
    alternates:{
        canonical:`${process.env.SITE_URL}/advocateservice`,
    },
    title: 'Адвокатські послуги',
    description: 'Послуги адвоката, супровід справ у суді, комплексний юридичний супровід бізнесу',
}

function page() {
  return (
    <>
      <HeadingSection
        titelText="Послуги адвоката та юридичний супровід бізнесу"
        paragraphText="відкрийте для себе наш широкий спектр послуг у сфері адвокатських послуг та юридичної допомоги"
        className="border-b border-b-slate-400 md:pb-10"
      />
      <MainSection />
    </>
  );
}

export default page;
