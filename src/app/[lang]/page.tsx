import dynamic from 'next/dynamic'
import {getDictionary} from "@/app/[lang]/dictionaries";

const ConsultationSection = dynamic(() => import('@/components/Consultation_section/ConsultationSection'));
const FirstSection = dynamic(() => import ('@/components/first_section/FirstSection'));
const SecondSection = dynamic(() => import('@/components/Second_section/SecondSection'));
const ThirdSection = dynamic(() => import('@/components/third_section/Third_section'));
const ApproachSection = dynamic(() => import('@/components/ApproachSection/ApproachSection'));
const OurPartnersSection = dynamic(() => import('@/components/OurPartners_section/OurPartners_section'));
const ContactSection = dynamic(() => import('@/components/contact_section/Contact_section'));


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
