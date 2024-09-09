import OurPertnersSection from "@/components/OurPartners_section/OurPartners_section"
import HeadingSection from "./_components/HeadingSection"
import OurTeamSection from "./_components/OurTeamSection"
import OurHistirySection from "./_components/OurHistirySection"
import ContactsSection from "./_components/ContactsSection"
import FormSection from "./_components/FormSection"
import {Metadata} from "next";

export const metadata: Metadata = {
    alternates:{
      canonical:`${process.env.SITE_URL}/aboutus`,
    },
    title: 'Про нас',
    description: 'Наша команда, історія створення UDocument, юридичні послуги, оформлення нерухомості',
}

function page() {
    return (
        <>
            <HeadingSection/>
            <OurHistirySection/>
            <OurTeamSection/>
            <OurPertnersSection/>
            <ContactsSection/>
            <FormSection/>
        </>
    )
}

export default page