"use client";
import dynamic from "next/dynamic";
import SectionContainer from "../containers/Container";
import ContactsList from "./Contacts_list";
import Loading from '@/components/Loader/Loader';
import {Titel, Paragraph} from "../typography/Typography";
import {motion} from "framer-motion";
import {UDocumentData} from "@/constants/types";

const GoogleMapFrame = dynamic(() => import('@/components/googleMapFrame/GoogleMapFrame').then((mod) => mod.GoogleMapFrame),{ssr:false,loading:() => <Loading/>});

function ContactSection({className, lang}: { className?: string, lang:UDocumentData }) {

    return (
        <SectionContainer className={`bg-light-gradient py-10 md:py-20 h-full border-b border-b-cream ${className}`}
                          ariaLabelledby="contact-details">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.3, ease: "linear"}}
                viewport={{once: true, amount: 0.2}}
            >
                <div className="flex flex-col items-start justify-start mb-10 md:mb-20">
                    <Titel text={lang.contactsSection.title} id="section_titel"/>
                    <Paragraph text={lang.contactsSection.paragraph} className="mt-3 md:mt-0"/>
                </div>
                <div
                    className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 bg-general-gradient border border-orange p-4 rounded-lg">
                    <div
                        className="flex flex-col md:flex-row lg:flex-col items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start gap-8">
                        {lang.contactsSection.contactData.map((el) => (
                            <ContactsList
                                id={el.id}
                                titel={el.title}
                                svgIcone={el.svgIcone}
                                contact={el.contact}
                                key={el.id}
                            />
                        ))}
                    </div>
                    <GoogleMapFrame/>
                </div>
            </motion.div>
        </SectionContainer>
    );
}

export default ContactSection;
