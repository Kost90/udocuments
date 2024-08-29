"use client";
import AccordionComponent from "@/components/accordion/Accordion";
import SectionContainer from "@/components/containers/Container";
import { Paragraph, Titel } from "@/components/typography/Typography";
import Button from "@/components/ui/Button";
import {
  verticalAnimate,
  transitionWithoutDelay,
  viewPort,
} from "@/constants/animation_variants";
import { advocateServiceData } from "@/constants/data";
import { motion } from "framer-motion";
import Link from "next/link";
import {useSearchParams} from "next/navigation";

const MotionTitel = motion(Titel);
const MotionParagraph = motion(Paragraph);

function MainSection() {
    const searchParams = useSearchParams();
    const lang = searchParams.get("lang");
  return (
    <SectionContainer className="bg-light-gradient h-full w-full py-20 border-b border-b-slate-400">
      <MotionTitel
        initial="initial"
        whileInView="whileInView"
        viewport={viewPort}
        transition={transitionWithoutDelay}
        variants={verticalAnimate}
        text="Терміни та вартість"
        id="titel_main_section_property_services"
      />
      <MotionParagraph
        initial="initial"
        whileInView="whileInView"
        viewport={viewPort}
        transition={transitionWithoutDelay}
        variants={verticalAnimate}
        className="my-5"
        text="Залежать від наявної документації та поточного стану справ.
Ми готові надати вам кваліфікований юридичний супровід вашого бізнесу.
Ви можете отримати БЕЗКОШТОВНУ консультацію і ми індивідуально вкажемо вам терміни та вартість та запропонуємо відповідний варіант."
      />

      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={viewPort}
        transition={transitionWithoutDelay}
        variants={verticalAnimate}
        className="mt-5 md:mt-10"
      >
        {advocateServiceData.map((el, i) => (
          <AccordionComponent
            value={el.titel}
            triggerName={el.titel}
            key={i}
            content={el.services}
          />
        ))}
      </motion.div>
      <Button type="button" className="m-auto">
        <Link href={`?modal=true&lang=${lang}`}>Консультація</Link>
      </Button>
    </SectionContainer>
  );
}

export default MainSection;
