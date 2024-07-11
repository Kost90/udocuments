"use client";
import SectionContainer from "../containers/Container";
import Image from "next/image";
import WebflowIcon from "../../../public/assets/webflow_icon.svg";
import RelumeIcon from "../../../public/assets/relum_icon.svg";
import { Paragraph } from "../typography/Typography";
import { motion } from "framer-motion";
import {
  verticalAnimate,
  viewPort,
  transitionWithoutDelay,
  transition,
} from "@/constants/animation_variants";

const iconsArr = [WebflowIcon, RelumeIcon, WebflowIcon, RelumeIcon];

const MotionParagraph = motion(Paragraph);

function OurPartnersSection() {
  return (
    <SectionContainer className="h-full bg-cream py-10 md:py-20">
      <div className="flex flex-col justify-center items-center gap-10">
        <MotionParagraph
          initial="initial"
          whileInView="whileInView"
          viewport={viewPort}
          transition={transitionWithoutDelay}
          variants={verticalAnimate}
          text="Нам довіряють провідні компанії з усієї країни"
          className="!text-black font-semibold"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={transition}
          viewport={viewPort}
          className="flex flex-row justify-center items-center gap-10 flex-wrap"
        >
          {iconsArr.map((el, i) => (
            <Image src={el} alt="icon" key={i} />
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}

export default OurPartnersSection;
