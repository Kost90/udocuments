import OurPertnersSection from "@/components/OurPartners_section/OurPartners_section"
import HeadingSection from "./_components/HeadingSection"
import OurTeamSection from "./_components/OurTeamSection"
import OurHistirySection from "./_components/OurHistirySection"
import ContactsSection from "./_components/ContactsSection"
import FormSection from "./_components/FormSection"
import {Metadata} from "next";
import {getDictionary} from "@/app/[lang]/dictionaries";

export const metadata: Metadata = {
    alternates: {
        canonical: `${process.env.SITE_URL}/aboutus`,
        languages: {
            'en': '/en',
            'uk': '/ua',
            'ru': '/ru'
        },
    },
    title: 'Про нас',
    description: 'Наша команда, історія створення UDocument, юридичні послуги, оформлення нерухомості',
}

async function page({params: {lang}}: { params: { lang: string } }) {
    const t = await getDictionary(lang);
    return (
        <>
            <HeadingSection lang={t}/>
            <OurHistirySection lang={t}/>
            <OurTeamSection lang={t}/>
            <OurPertnersSection lang={t}/>
            <ContactsSection lang={t}/>
            <FormSection lang={t}/>
        </>
    )
}

export default page