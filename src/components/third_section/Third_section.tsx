"use client";
import SectionContainer from "../containers/Container";
import { Titel, Paragraph } from "../typography/Typography";
import { Card, CardHeader, CardContent } from "../ui/Card";
import Link from "next/link";
import { cardData } from "@/constants/data";
import { motion } from "framer-motion";
import {
  animateTyphograpyVariants,
  transition,
  transitionWithoutDelay,
  viewPort,
} from "@/constants/animation_variants";

const MotionTitel = motion(Titel);
const MotionParagraph = motion(Paragraph);

function ThirdSection() {
  return (
    <SectionContainer className="bg-general-gradient h-full border-y border-y-slate-400 py-10 md:py-20">
      <MotionTitel
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, ease: "linear" }}
        variants={animateTyphograpyVariants}
        text="Наші послуги"
        id="main_titel"
      />
      <MotionParagraph
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transitionWithoutDelay}
        viewport={viewPort}
        text="We specialize in real estate law consultation, legal documentation, and general legal assistance."
        className="mt-3 md:mt-3"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "linear" }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 my-10 md:my-20"
      >
        {cardData.map((el) => (
          <Card
            key={el.id}
            className="w-full sm:w-[520px] md:w-1/2 md:max-w-[640px] h-[300px] bg-navBar border-orange cursor-pointer hover:bg-orange hover:border-cream shadow-cardShadow rounded-[15px] hover:scale-105 transition-all ease-in-out duration-300 text-cream hover:text-black justify-center items-center flex flex-col text-center"
          >
            <Link href="/services">
              <CardHeader className="text-base md:text-2xl font-bold">
                {el.titel}
              </CardHeader>
              <CardContent className="">{el.description}</CardContent>
            </Link>
          </Card>
        ))}
      </motion.div>
    </SectionContainer>
  );
}

export default ThirdSection;
