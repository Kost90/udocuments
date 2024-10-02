"use client";
import dynamic from 'next/dynamic'
import {motion} from "framer-motion";
import SectionContainer from "../containers/Container";
import {Paragraph, Titel} from "../typography/Typography";
import {
    animateTyphograpyVariants,
    transitionWithoutDelay,
    viewPort,
} from "@/constants/animation_variants";
import {UDocumentData} from "@/constants/types";

const CardSecondSection = dynamic(() => import('@/components/Second_section/Card/Card_second_section'), {ssr: false});
const CarouselSpacing = dynamic(() => import('@/components/Carousel/Carousel'), {ssr: false});

const MotionTitel = motion(Titel);
const MotionParagraph = motion(Paragraph);

function SecondSection({lang}: { lang: UDocumentData }) {
    return (
        <SectionContainer className="relative h-full bg-dark-gradient pb-10 md:pb-20">
            <div
                className="flex flex-col md:flex-row justify-center items-center w-full md:flex-wrap m-auto left-0 right-0 gap-5 mt-2 lg:absolute lg:top-[-5%]">
                {lang.secondSection.cardsData.map((el, i) => (
                    <CardSecondSection
                        image={el.image}
                        description={el.description}
                        key={el.id}
                        index={i}
                    />
                ))}
            </div>
            <MotionTitel
                initial="initial"
                whileInView="whileInView"
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.3, ease: "linear"}}
                variants={animateTyphograpyVariants}
                text={lang.secondSection.title}
                id="section_main_titel"
                className="xl:mt-[320px] lg:mt-[500px] md:mt-[140px] mt-[120px]"
                aria-label="Our Team Section Title"
            />
            <MotionParagraph
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={transitionWithoutDelay}
                viewport={viewPort}
                text={lang.secondSection.paragraph}
                className="mt-3 md:mt-3"
                aria-label="Section Description"
            />
            <CarouselSpacing lang={lang}/>
        </SectionContainer>
    );
}

export default SecondSection;
