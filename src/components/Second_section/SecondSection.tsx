"use client";
import { motion } from "framer-motion";
import SectionContainer from "../containers/Container";
import CardSecondSection from "./Card/Card_second_section";
import { Paragraph, Titel } from "../typography/Typography";
import CarouselSpacing from "../Carousel/Carousel";
import {
  animateTyphograpyVariants,
  transitionWithoutDelay,
  viewPort,
} from "@/constants/animation_variants";
import { cardsData } from "@/constants/data";

const MotionTitel = motion(Titel);
const MotionParagraph = motion(Paragraph);

function SecondSection() {
  return (
    <SectionContainer className="relative h-full bg-dark-gradient pb-10 md:pb-20">
      <div className="flex flex-col md:flex-row justify-center items-center w-full md:flex-wrap m-auto left-0 right-0 gap-5 mt-2 lg:absolute lg:top-[-5%]">
        {cardsData.map((el, i) => (
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
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, ease: "linear" }}
          variants={animateTyphograpyVariants}
          text="Наша команда"
          id="section_main_titel"
          className="xl:mt-[320px] lg:mt-[500px] md:mt-[140px] mt-[120px]"
          aria-label="Our Team Section Title"
        />
        <MotionParagraph
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transitionWithoutDelay}
          viewport={viewPort}
          text="Познайомтесь з нашою командою професіоналів, яка спеціалізується на наданні високоякісних юридичних послуг у сфері нерухомості та інших юридичних областях."
          className="mt-3 md:mt-3"
          aria-label="Section Description"
        />
      <CarouselSpacing />
    </SectionContainer>
  );
}

export default SecondSection;
