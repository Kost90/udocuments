import SectionContainer from "../containers/Container";
import {UDocumentData} from "@/constants/types";
import CardFirstSection from '@/components/first_section/cardFirstSection/CardFirstSection';

function FirstSection({lang}: { lang: UDocumentData }) {
    return (
        <SectionContainer className="bg-header-section bg-cover h-full">
            <CardFirstSection lang={lang}/>
        </SectionContainer>
    );
}

export default FirstSection;
