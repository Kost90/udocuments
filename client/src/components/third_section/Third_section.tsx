import SectionContainer from "../containers/Container";
import {Titel} from "../typography/Typography";
import {UDocumentData} from "@/constants/types";
import AccordionWrapper from "./AccordionWrapper";

function ThirdSection({lang, params}: { lang: UDocumentData, params:string }) {
    return (
        <SectionContainer className="bg-general-gradient h-full border-y border-y-slate-400 py-10 md:py-20">
            <Titel
            className="lg:leading-[60px]"
                text={lang.thirdSection.title}
                id="main_titel"
            />
            <AccordionWrapper lang={lang} params={params}/>
        </SectionContainer>
    );
}

export default ThirdSection;