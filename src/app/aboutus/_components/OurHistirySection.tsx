"use client";
import Image from "next/image";
import SectionContainer from "@/components/containers/Container";
import { Paragraph, Titel } from "@/components/typography/Typography";
import {
  verticalAnimate,
  viewPort,
  transitionWithoutDelay,
} from "@/constants/animation_variants";
import { motion } from "framer-motion";
import Picture from "../../../../public/assets/our_history_image.png";

function OurHistirySection() {
  return (
    <SectionContainer className="bg-light-gradient h-full w-full py-20 md:py-32 border-b border-b-slate-400">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={viewPort}
        transition={transitionWithoutDelay}
        variants={verticalAnimate}
        className="flex flex-col lg:flex-row justify-between items-start gap-6"
      >
        <div className="flex flex-col gap-6 justify-start items-start">
          <Titel
            text="Наша історія та відданість юридичній професії"
            id="heading_ourhistory_section"
            className="leading-9"
          />
          <Paragraph text="Правова Корпорація - провідне юридичне об'єднання, засноване на принципах надання виняткової юридичної допомоги та консультацій. Маючи команду висококваліфікованих юристів, ми присвячуємо себе обслуговуванню наших клієнтів у сферах нерухомості та загальної юридичної допомоги. Маючи команду висококваліфікованих юристів, ми присвячуємо себе обслуговуванню наших клієнтів у сферах нерухомості та загальної юридичної допомоги.Маючи команду висококваліфікованих юристів, ми присвячуємо себе обслуговуванню наших клієнтів у сферах нерухомості та загальної юридичної допомоги." />
        </div>
        <div className="flex">
          <Image
            src={Picture}
            alt="our_history_image"
            className="max-w-full md:max-w-[520px] lg:max-w-[640px]"
          />
        </div>
      </motion.div>
    </SectionContainer>
  );
}

export default OurHistirySection;
