"use client";
import SectionContainer from "../containers/Container";
import Image from "next/image";
import WebflowIcon from "../../../public/assets/webflow_icon.svg";
import RelumeIcon from "../../../public/assets/relum_icon.svg";
import {motion} from "framer-motion";
import {
    verticalAnimate,
    viewPort,
    transitionWithoutDelay,
    transition,
} from "@/constants/animation_variants";
import {UDocumentData} from "@/constants/types";

const iconsArr = [WebflowIcon, RelumeIcon, WebflowIcon, RelumeIcon];

function OurPartnersSection({lang}: { lang: UDocumentData }) {

    return (
        <SectionContainer
            className="h-full bg-cream py-10 md:py-20"
            ariaLabelledby="partners-section-title"
        >
            <div className="flex flex-col justify-center items-center gap-10">
                <motion.h2
                    initial="initial"
                    whileInView="whileInView"
                    viewport={viewPort}
                    transition={transitionWithoutDelay}
                    variants={verticalAnimate}
                    className="!text-black font-semibold"
                    aria-label="Leading companies from across the country trust us"
                >
                    {lang.ourPartnersSection.title}
                </motion.h2>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={transition}
                    viewport={viewPort}
                    className="flex flex-row justify-center items-center gap-10 flex-wrap"
                    aria-label="Partner Logos"
                >
                    {iconsArr.map((el, i) => (
                        <Image src={el} alt="icon" key={i}/>
                    ))}
                </motion.div>
            </div>
        </SectionContainer>
    );
}

export default OurPartnersSection;
