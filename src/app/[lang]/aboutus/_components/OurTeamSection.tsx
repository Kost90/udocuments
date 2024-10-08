"use client";
import CarouselSpacing from "@/components/Carousel/Carousel";
import SectionContainer from "@/components/containers/Container";
import {Paragraph, Titel} from "@/components/typography/Typography";
import {
    animateTyphograpyVariants,
    viewPort,
    transitionWithoutDelay,
} from "@/constants/animation_variants";
import {motion} from "framer-motion";
import {UDocumentData} from "@/constants/types";

const MotionTitel = motion(Titel);
const MotionParagraph = motion(Paragraph);

function OurTeamSection({lang}: { lang: UDocumentData }) {
    return (
        <SectionContainer className="bg-sectionBg h-full w-full py-20 md:py-32" ariaLabelledby="title-our-team-section">
            <MotionTitel
                initial="initial"
                whileInView="whileInView"
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.3, ease: "linear"}}
                variants={animateTyphograpyVariants}
                text={lang.aboutUsPage.ourTeamSection.title}
                id="titel_our_team_section"
            />
            <MotionParagraph
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={transitionWithoutDelay}
                viewport={viewPort}
                text={lang.aboutUsPage.ourTeamSection.paragraph}
                className="mt-3 md:mt-3"
            />
            <CarouselSpacing lang={lang}/>
        </SectionContainer>
    );
}

export default OurTeamSection;
