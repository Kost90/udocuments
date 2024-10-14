import CarouselSpacing from "@/components/Carousel/Carousel";
import SectionContainer from "@/components/containers/Container";
import {Paragraph, Titel} from "@/components/typography/Typography";
import {UDocumentData} from "@/constants/types";

function OurTeamSection({lang}: { lang: UDocumentData }) {
    return (
        <SectionContainer className="bg-sectionBg h-full w-full py-20 md:py-32" ariaLabelledby="title-our-team-section">
            <Titel
                text={lang.aboutUsPage.ourTeamSection.title}
                id="titel_our_team_section"
            />
            <Paragraph
                text={lang.aboutUsPage.ourTeamSection.paragraph}
                className="mt-3 md:mt-3"
            />
            <CarouselSpacing lang={lang}/>
        </SectionContainer>
    );
}

export default OurTeamSection;
