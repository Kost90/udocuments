import SectionContainer from "../containers/Container";
import {Titel, Paragraph} from "../typography/Typography";
import {UDocumentData} from "@/constants/types";
import CardWrapper from "./CardWrapper";

function ThirdSection({lang, params}: { lang: UDocumentData, params:string }) {
    return (
        <SectionContainer className="bg-general-gradient h-full border-y border-y-slate-400 py-10 md:py-20">
            <Titel
                text={lang.thirdSection.title}
                id="main_titel"
            />
            <Paragraph
                text={lang.thirdSection.paragraph}
                className="mt-3 md:mt-3"
            />
            <CardWrapper lang={lang} params={params}/>
        </SectionContainer>
    );
}

export default ThirdSection;