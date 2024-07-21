"use client";
import Link from "next/link";
import SectionContainer from "../containers/Container";
import { Paragraph } from "../typography/Typography";
import Button from "../ui/Button";
import { motion } from "framer-motion";

function FirstSection() {
  return (
    <SectionContainer className="bg-header-section bg-cover h-full">
      <CardMainSec />
    </SectionContainer>
  );
}

function CardMainSec() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="flex flex-col w-full h-full max-h-[26rem] sm:w-[420px] md:w-[520px] lg:w-[588px] md:h-[391px] bg-darkTransparent p-4 items-start justify-around rounded-2xl mt-[200px] md:mt-[300px] mb-[200px] md:mb-[320px] border-orange border"
      aria-labelledby="card-main-title"
    >
      <h1
        className="text-large-mobile lg:text-large-desktop text-orange font-semibold leading-8 lg:leading-[40px]"
        id="card-main-title"
      >
        UDocument - комплексні юридичні послуги
      </h1>
      <Paragraph
        text="у сфері нерухомості,
        отримання та легалізації документів на території України,
        Великобританії, Туреччини та інших країн Європи. Наша команда
        досвідчених адвокатів надає експертні поради та підтримку, які
        допоможуть вам вирішити складні правові питання."
        className="mt-3 md:mt-0"
      />
      <Link href="?modal=true">
        <Button
          type="button"
          className="h-12 md:w-48 flex items-center justify-center text-sm md:text-base"
          aria-label="Замовити дзвінок"
        >
          Замовити дзвінок
        </Button>
      </Link>
    </motion.div>
  );
}

export default FirstSection;
