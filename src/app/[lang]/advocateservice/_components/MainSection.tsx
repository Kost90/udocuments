"use client";
import AccordionComponent from "@/components/accordion/Accordion";
import SectionContainer from "@/components/containers/Container";
import {Paragraph, Titel} from "@/components/typography/Typography";
import Button from "@/components/ui/Button";
import {
    verticalAnimate,
    transitionWithoutDelay,
    viewPort,
} from "@/constants/animation_variants";
import {motion} from "framer-motion";
import Link from "next/link";
import {UDocumentData} from "@/constants/types";

const MotionTitel = motion(Titel);
const MotionParagraph = motion(Paragraph);

function MainSection({lang}: { lang: UDocumentData }) {
    return (
        <SectionContainer className="bg-light-gradient h-full w-full py-20 border-b border-b-slate-400">
            <MotionTitel
                initial="initial"
                whileInView="whileInView"
                viewport={viewPort}
                transition={transitionWithoutDelay}
                variants={verticalAnimate}
                text={lang.advocateServicesPage.mainSection.title}
                id="titel_main_section_property_services"
            />
            <MotionParagraph
                initial="initial"
                whileInView="whileInView"
                viewport={viewPort}
                transition={transitionWithoutDelay}
                variants={verticalAnimate}
                className="my-5"
                text={lang.advocateServicesPage.mainSection.paragraph}
            />
            <motion.div
                initial="initial"
                whileInView="whileInView"
                viewport={viewPort}
                transition={transitionWithoutDelay}
                variants={verticalAnimate}
                className="mt-5 md:mt-10"
            >
                {lang.advocateServicesPage.mainSection.advocateServicesData.map((el, i) => (
                    <AccordionComponent
                        value={el.title}
                        triggerName={el.title}
                        key={i}
                        content={el.services}
                    />
                ))}
            </motion.div>
            <Button type="button" className="m-auto">
                <Link href={`?modal=true`}>{lang.buttonText.consultations}</Link>
            </Button>
        </SectionContainer>
    );
}

export default MainSection;
