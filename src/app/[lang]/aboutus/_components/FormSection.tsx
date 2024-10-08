import React from "react";
import SectionContainer from "@/components/containers/Container";
import {Paragraph, Titel} from "@/components/typography/Typography";
import Form from "./form/Form";
import {UDocumentData} from "@/constants/types";
import {Mail, MapPin, Phone} from "lucide-react";

function FormSection({lang}: { lang: UDocumentData }) {
    return (
        <SectionContainer className="bg-light-gradient w-full h-full py-20 md:py-32 border-b border-b-slate-400"
                          ariaLabelledby="form-section-title">
            <div
                className="flex flex-col gap-10 justify-center items-center md:flex-row md:justify-between md:items-start">
                <div className="flex flex-col justify-start items-start gap-4 md:gap-6">
                    <Titel text={lang.contactsSection.formContactSection.title} id="titel_formsection"/>
                    <Paragraph text={lang.contactsSection.formContactSection.paragraph}/>
                    <div className="flex flex-col justify-start items-start gap-4">
                        {lang.contactsSection.contactData.map((el) => (
                            <div
                                className="flex flex-row justify-start items-start gap-2"
                                key={el.id}
                            >
                                {el.svgIcone === 'Mail' ? <Mail className="flex w-6 h-6 text-cream"/> : null}
                                {el.svgIcone === 'Phone' ? <Phone className="flex w-6 h-6 text-cream"/> : null}
                                {el.svgIcone === 'MapPin' ? <MapPin className="flex w-6 h-6 text-cream"/> : null}
                                {/*<el.svgIcone className="flex w-6 h-6 text-cream" />*/}
                                {el.id === "mail" ? (
                                    <a
                                        href={`mailto:${el.contact}`}
                                        className="text-sm leading-6 text-slate-400"
                                    >
                                        {el.contact}
                                    </a>
                                ) : null}
                                {el.id === "phone" ? (
                                    <a
                                        href={`tel:${el.contact}`}
                                        className="text-sm leading-6 text-slate-400"
                                    >
                                        {el.contact}
                                    </a>
                                ) : null}
                                {el.id !== "mail" && el.id !== "phone" ? (
                                    <span className="text-sm leading-6 text-slate-400">
                    {el.contact}
                  </span>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
                <Form lang={lang}/>
            </div>
        </SectionContainer>
    );
}

export default FormSection;
