import SectionContainer from "@/components/containers/Container";
import { Paragraph, Titel } from "@/components/typography/Typography";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { UDocumentData } from "@/constants/types";
import Accordion from "./Accordion";

function MainSection({ lang }: { lang: UDocumentData }) {
  return (
    <div>page</div>
    // <SectionContainer className="bg-light-gradient h-full w-full py-10 border-b border-b-slate-400">
    //   <Titel
    //     text={lang.propertyServicesPage.mainSection.title}
    //     id="titel_main_section_property_services"
    //   />
    //   <Paragraph
    //     className="my-5"
    //     text={lang.propertyServicesPage.mainSection.paragraph}
    //   />
    //   <Accordion lang={lang} />
    //   <Button type="button" className="m-auto">
    //     <Link href={`?modal=true`}>{lang.buttonText.consultations}</Link>
    //   </Button>
    // </SectionContainer>
  );
}

export default MainSection;
