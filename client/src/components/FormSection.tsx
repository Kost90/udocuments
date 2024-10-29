import React from "react";
import SectionContainer from "@/components/containers/Container";
import {Paragraph, Titel} from "@/components/typography/Typography";
import Form from "./form/Form";
import {UDocumentData} from "@/constants/types";

function FormSection({lang}: { lang: UDocumentData }) {
    return (
        <SectionContainer className="bg-light-gradient w-full h-full py-20 md:py-32 border-y border-y-slate-400"
                          ariaLabelledby="form-section-title">
            <div className="flex flex-col gap-10 justify-center items-center md:flex-row md:justify-between md:items-start">
                <div className="flex flex-col justify-start items-start gap-4 md:gap-6">
                    <Titel text={lang.contactsSection.formContactSection.title} id="titel_formsection"/>
                    <Paragraph text={lang.contactsSection.formContactSection.paragraph}/>
                </div>
                <Form lang={lang}/>
            </div>
        </SectionContainer>
    );
}

export default FormSection;
