"use client";
import SectionContainer from "../containers/Container";
import Image from "next/image";
import { Paragraph } from "../typography/Typography";
import { Separator } from "../ui/separator";
import { sectionData } from "@/constants/data";
import { motion } from "framer-motion";

function ApproachSection() {
  return (
    <SectionContainer className="bg-general-gradient h-full border-y border-y-slate-400 py-10 md:py-20">
      <div className="flex flex-col justify-start items-start gap-5">
        {sectionData.map((el, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 * i, ease: "linear" }}
            viewport={{ once: true, amount: 0.2 }}
            key={el.id}
          >
            <div className="flex flex-row justify-start items-center gap-5">
              <Image src={el.svgIcone} alt="svg_icon" />
              <Paragraph text={el.description} />
            </div>
            {i < 2 ? (
              <Separator orientation="vertical" className="m-4 h-14 md:h-20" />
            ) : null}
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default ApproachSection;
