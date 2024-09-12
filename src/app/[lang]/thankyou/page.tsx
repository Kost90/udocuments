import SectionContainer from "@/components/containers/Container";
import { Titel } from "@/components/typography/Typography";
import {getDictionary} from "@/app/[lang]/dictionaries";
import {UDocumentData} from "@/constants/types";

async function page({params: {lang}}: { params: { lang: string } }) {
    const t:UDocumentData = await getDictionary(lang);
  return (
    <SectionContainer className="bg-sectionBg h-screen text-center">
        <div className="flex justify-center items-center h-full">
        <Titel
        text={t.thankyouPage.title}
        id="Titel_thankyou_page"
        className="text-cream text-center max-w-full md:max-w-[50%] leading-[40px]"
      />
        </div>
    </SectionContainer>
  );
}

export default page;
