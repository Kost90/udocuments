'use client'
import { motion } from "framer-motion";
import SectionContainer from "../containers/Container";
import { Titel, Paragraph } from "../typography/Typography";
import Button from "../ui/Button";
import Link from "next/link";
import { animateTyphograpyLeft, animateTyphograpyVariants, transition, viewPort } from "@/constants/animation_variants";

const MotionTitel = motion(Titel);

function ConsultationSection() {
  return (
    <SectionContainer className="bg-sectionBg h-full py-10 md:py-32">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
        <MotionTitel
          initial="initial"
          whileInView="whileInView"
          viewport={viewPort}
          transition={transition}
          variants={animateTyphograpyVariants}
          text="Eкспертна юридична допомога та консультації"
          id="main_section_titel"
          className="text-large-desctope leading-[36px] lg:leading-[40px]"
        />
        <motion.div 
        initial="initial"
        whileInView="whileInView"
        viewport={viewPort}
        transition={transition}
        variants={animateTyphograpyLeft}
        className="flex flex-col items-start justify-center gap-10 my-5 md:my-0">
          <Paragraph text="Заплануйте безкоштовну консультацію з нашими юристами, щоб отримати необхідну допомогу." className="lg:leading-[34px]"/>
          <Button type="button">
            {/* Сделать кнопку и открытие поп апа */}
            <Link href={"#"}>Консультація</Link>
          </Button>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

export default ConsultationSection;
