"use client";
import AccordionComponent from "@/components/accordion/Accordion";
import {
  verticalAnimate,
  transitionWithoutDelay,
  viewPort,
} from "@/constants/animation_variants";
import { motion } from "framer-motion";
import { UDocumentData } from "@/constants/types";

function Accordion({ lang }: { lang: UDocumentData }) {
  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      viewport={viewPort}
      transition={transitionWithoutDelay}
      variants={verticalAnimate}
      className="mt-5 md:mt-10"
    >
      {lang.propertyServicesPage.mainSection.advocateServicesData.map(
        (el, i) => (
          <AccordionComponent
            value={el.title}
            triggerName={el.title}
            key={i}
            content={el.services}
          />
        )
      )}
    </motion.div>
  );
}

export default Accordion;
