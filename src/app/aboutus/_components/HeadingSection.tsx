"use client";
import { motion } from "framer-motion";
import SectionContainer from "@/components/containers/Container";
import { Paragraph, Titel } from "@/components/typography/Typography";
import {
  animateTyphograpyVariants,
  viewPort,
  transition,
} from "@/constants/animation_variants";

const MotionTitel = motion(Titel);
const MotionParagraph = motion(Paragraph);

function HeadingSection() {
  return (
    <SectionContainer className="bg-sectionBg h-full w-full pt-32 md:pt-[185px] pb-28 border-b border-b-slate-400">
      <div className="flex flex-col gap-6 justify-start items-start pt-10 md:py-20">
        <MotionTitel
          initial="initial"
          whileInView="whileInView"
          viewport={viewPort}
          transition={transition}
          variants={animateTyphograpyVariants}
          text="Досвідчені фахівці в галузі права"
          id="heading_aboutus_page"
          className="leading-9"
        />
        <MotionParagraph
          initial="initial"
          whileInView="whileInView"
          viewport={viewPort}
          transition={transition}
          variants={animateTyphograpyVariants}
          text="Надання експертних юридичних консультацій та допомоги у сфері нерухомості та не тільки"
        />
      </div>
    </SectionContainer>
  );
}

export default HeadingSection;
