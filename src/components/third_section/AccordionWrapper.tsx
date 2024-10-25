"use client";
import { motion } from "framer-motion";
import { UDocumentData } from "@/constants/types";
import Accordion from "../../app/[lang]/propertyservice/_components/Accordion";

function AccordionWrapper({
  lang,
  params,
}: {
  lang: UDocumentData;
  params: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "linear" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 my-10"
    >
      {lang.services.map((el, i) => (
        <>
          <Accordion titel={el.title} services={el.mainContent} lang={lang} key={`$${el.title} + ${i}`}/>
        </>
      ))}
    </motion.div>
  );
}

export default AccordionWrapper;
