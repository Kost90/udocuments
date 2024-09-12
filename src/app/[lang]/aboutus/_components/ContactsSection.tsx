"use client";
import {motion} from "framer-motion";
import SectionContainer from "@/components/containers/Container";
import ContactsList from "@/components/contact_section/Contacts_list";
import {transitionWithoutDelay, viewPort} from "@/constants/animation_variants";
import {UDocumentData} from "@/constants/types";

function ContactsSection({lang}: { lang: UDocumentData }) {
    return (
        <SectionContainer className="bg-sectionBg h-full w-full py-20 md:py-32 border-b border-b-slate-400">
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={transitionWithoutDelay}
                viewport={viewPort}
                className="flex flex-col md:flex-row justify-around items-start gap-10"
            >
                {lang.contactsSection.contactData.map((el) => (
                    <ContactsList
                        id={el.id}
                        titel={el.title}
                        svgIcone={el.svgIcone}
                        contact={el.contact}
                        key={el.id}
                        className="md:items-center md:justify-center md:text-center w-full"
                        paragraphStyle="max-w-[200px] md:text-center mt-0"
                    />
                ))}
            </motion.div>
        </SectionContainer>
    );
}

export default ContactsSection;
