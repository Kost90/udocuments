"use client";
import  CarouselSpacing  from "@/components/Carousel/Carousel";
import SectionContainer from "@/components/containers/Container";
import { Paragraph, Titel } from "@/components/typography/Typography";
import { animateTyphograpyVariants} from "@/constants/animation_variants";
import { motion } from "framer-motion";

const MotionTitel = motion(Titel);

function OurTeamSection() {
  return (
    <SectionContainer className="bg-sectionBg h-full w-full py-20 md:py-32">
      <MotionTitel
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, ease: "linear" }}
        variants={animateTyphograpyVariants}
        text="Наша команда"
        id="titel_our_team_section"
      />
      <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." className="mt-4"/>
        <CarouselSpacing />
    </SectionContainer>
  );
}

export default OurTeamSection;
