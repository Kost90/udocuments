"use client";
import { motion } from "framer-motion";
import SectionContainer from "@/components/containers/Container";
import { Paragraph } from "@/components/typography/Typography";
import {
  animateTyphograpyVariants,
  viewPort,
  transitionWithoutDelay,
} from "@/constants/animation_variants";

const MotionParagraph = motion(Paragraph);

type HeadingSectionProps = {
  titelText: string;
  paragraphText: string;
  className?: string;
};

function HeadingSection({ ...props }: HeadingSectionProps) {
  return (
    <SectionContainer
      className={`bg-sectionBg h-full w-full pt-32 md:pt-[185px] pb-28 border-b border-b-slate-400 ${props.className}`}
    >
      <div className="flex flex-col gap-6 justify-start items-start pt-10 md:py-20">
      <motion.h1
          initial="initial"
          whileInView="whileInView"
          viewport={viewPort}
          transition={transitionWithoutDelay}
          variants={animateTyphograpyVariants}
          id="page_titel"
          className="text-large-mobile lg:text-large-desktop text-orange font-semibold lg:leading-[40px] leading-9"
        >{props.titelText}</motion.h1>
        <MotionParagraph
          initial="initial"
          whileInView="whileInView"
          viewport={viewPort}
          transition={transitionWithoutDelay}
          variants={animateTyphograpyVariants}
          text={props.paragraphText}
        />
      </div>
    </SectionContainer>
  );
}

export default HeadingSection;
