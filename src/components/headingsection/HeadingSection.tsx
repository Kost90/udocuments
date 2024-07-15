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
        <MotionTitel
          initial="initial"
          whileInView="whileInView"
          viewport={viewPort}
          transition={transitionWithoutDelay}
          variants={animateTyphograpyVariants}
          text={props.titelText}
          id="heading_propertyservice_page"
          className="leading-9"
        />
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
