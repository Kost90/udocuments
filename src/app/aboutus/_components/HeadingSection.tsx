"use client";
import { motion } from "framer-motion";
import SectionContainer from "@/components/containers/Container";
import { Paragraph, Titel } from "@/components/typography/Typography";
import {
  animateTyphograpyVariants,
  viewPort,
  transition,
  transitionWithoutDelay,
} from "@/constants/animation_variants";

const MotionTitel = motion(Titel);
const MotionParagraph = motion(Paragraph);

function HeadingSection() {
  return (
    <SectionContainer className="bg-sectionBg h-full w-full pt-32 md:pt-[185px] pb-28 border-b border-b-slate-400">
      <div className="flex flex-col gap-6 justify-start items-start pt-10 md:py-20">
        <motion.h1
          initial="initial"
          whileInView="whileInView"
          viewport={viewPort}
          transition={transitionWithoutDelay}
          variants={animateTyphograpyVariants}
          id="heading_aboutus_page"
          className="text-large-mobile lg:text-large-desktop text-orange font-semibold leading-8 lg:leading-[40px] leading-9"
        >Досвідчені фахівці в галузі права</motion.h1>
        <MotionParagraph
          initial="initial"
          whileInView="whileInView"
          viewport={viewPort}
          transition={transitionWithoutDelay}
          variants={animateTyphograpyVariants}
          text="Надання експертних юридичних консультацій та допомоги у сфері нерухомості та не тільки"
        />
      </div>
    </SectionContainer>
  );
}

export default HeadingSection;
