"use client";
import {motion} from "framer-motion";
import SectionContainer from "../containers/Container";
import {Titel, Paragraph} from "../typography/Typography";
import Button from "../ui/Button";
import Link from "next/link";
import {
    animateTyphograpyLeft,
    animateTyphograpyVariants,
    transitionWithoutDelay,
    viewPort,
} from "@/constants/animation_variants";
import {UDocumentData} from "@/constants/types";

const MotionTitel = motion(Titel);

function ConsultationSection({lang}: { lang: UDocumentData }) {

    return (
        <SectionContainer className="bg-sectionBg h-full py-10 md:py-32" ariaLabelledby="consultation-section-title">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
                <MotionTitel
                    initial="initial"
                    whileInView="whileInView"
                    viewport={viewPort}
                    transition={transitionWithoutDelay}
                    variants={animateTyphograpyVariants}
                    text={lang.consultationSection.title}
                    id="consultation-section-title"
                    className="text-large-desktop leading-[36px] lg:leading-[40px]"
                    aria-label="Expert Legal Assistance and Consultations"
                />
                <motion.div
                    initial="initial"
                    whileInView="whileInView"
                    viewport={viewPort}
                    transition={transitionWithoutDelay}
                    variants={animateTyphograpyLeft}
                    className="flex flex-col items-start justify-center gap-10 my-5 md:my-0"
                >
                    <Paragraph
                        text={lang.consultationSection.paragraph}
                        className="lg:leading-[34px]"
                        aria-label="Schedule a free consultation with our lawyers to get the necessary assistance."
                    />
                    <Button type="button" aria-label="Schedule Consultation">
                        <Link href={`?modal=true`}>{lang.buttonText.consultations}</Link>
                    </Button>
                </motion.div>
            </div>
        </SectionContainer>
    );
}

export default ConsultationSection;
