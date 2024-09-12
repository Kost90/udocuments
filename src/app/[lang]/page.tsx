import FirstSection from "@/components/first_section/FirstSection";
import ConsultationSection from "@/components/Consultation_section/ConsultationSection";
import ApproachSection from "@/components/ApproachSection/ApproachSection";
import SecondSection from "@/components/Second_section/SecondSection";
import OurPartnersSection from "@/components/OurPartners_section/OurPartners_section";
import ThirdSection from "@/components/third_section/Third_section";
import ContactSection from "@/components/contact_section/Contact_section";
import {getDictionary} from "@/app/[lang]/dictionaries";

export default async function Home({params: {lang}}: { params: { lang: string } }) {
    const t = await getDictionary(lang);
    return (
        <>
            <FirstSection lang={t}/>
            <SecondSection lang={t}/>
            <ThirdSection lang={t} params={lang}/>
            <ApproachSection lang={t}/>
            <ConsultationSection lang={t}/>
            <OurPartnersSection lang={t}/>
            <ContactSection lang={t}/>
        </>
    );
}
