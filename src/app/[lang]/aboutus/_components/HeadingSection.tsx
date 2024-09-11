"use client";
import {motion} from "framer-motion";
import SectionContainer from "@/components/containers/Container";
import {Paragraph} from "@/components/typography/Typography";
import {
    animateTyphograpyVariants,
    viewPort,
    transitionWithoutDelay,
} from "@/constants/animation_variants";
import {UDocumentData} from "@/constants/types";

const MotionParagraph = motion(Paragraph);

function HeadingSection({lang}: { lang: UDocumentData }) {
    return (
        <SectionContainer className="bg-sectionBg h-full w-full pt-32 md:pt-[185px] pb-28 border-b border-b-slate-400"
                          ariaLabelledby="section-heading">
            <div className="flex flex-col gap-6 justify-start items-start pt-10 md:py-20">
                <motion.h1
                    initial="initial"
                    whileInView="whileInView"
                    viewport={viewPort}
                    transition={transitionWithoutDelay}
                    variants={animateTyphograpyVariants}
                    id="section-heading"
                    className="text-large-mobile lg:text-large-desktop text-orange font-semibold lg:leading-[40px] leading-9"
                >
                    {lang.aboutUsPage.headingSection.title}
                </motion.h1>
                <MotionParagraph
                    initial="initial"
                    whileInView="whileInView"
                    viewport={viewPort}
                    transition={transitionWithoutDelay}
                    variants={animateTyphograpyVariants}
                    text={lang.aboutUsPage.headingSection.paragraph}
                    className="mt-3"
                />
            </div>
        </SectionContainer>
    );
}

export default HeadingSection;
