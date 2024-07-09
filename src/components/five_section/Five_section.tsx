import SectionContainer from "../containers/Container";
import { Titel, Paragraph } from "../typography/Typography";
import Button from "../ui/Button";
import Link from "next/link";

function FiveSection() {
  return (
    <SectionContainer className="bg-sectionBg h-full py-10 md:py-32">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
        <Titel
          text="Eкспертна юридична допомога та консультації"
          id="main_section_titel"
          className="text-large-desctope leading-[44px] lg:leading-[57px]"
        />
        <div className="flex flex-col items-start justify-center gap-10 my-5 md:my-0">
          <Paragraph text="Заплануйте безкоштовну консультацію з нашими юристами, щоб отримати необхідну допомогу." className="lg:leading-[34px]"/>
          <Button type="button">
            <Link href={"#"}>Консультація</Link>
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}

export default FiveSection;
