import SectionContainer from "@/components/containers/Container";
import { Titel } from "@/components/typography/Typography";

function page() {
  return (
    <SectionContainer className="bg-sectionBg h-screen text-center">
        <div className="flex justify-center items-center h-full">
        <Titel
        text="Спасибі, вашу заявку ми отримали. Менеджер зв'яжеться з вами найближчим часом."
        id="Titel_thankyou_page"
        className="text-cream text-center max-w-full md:max-w-[50%] leading-[40px]"
      />
        </div>
     
    </SectionContainer>
  );
}

export default page;
