import FirstSection from "@/components/first_section/FirstSection";
import ConsultationSection from "@/components/Consultation_section/ConsultationSection";
import ApproachSection from "@/components/ApproachSection/ApproachSection";
import SecondSection from "@/components/Second_section/SecondSection";
import OurPartnersSection from "@/components/OurPartners_section/OurPartners_section";
import ThirdSection from "@/components/third_section/Third_section";
import ContactSection from "@/components/contact_section/Contact_section";

// TODO: Think about Suspense where is useSearchParams
export default function Home() {

  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ApproachSection />
      <ConsultationSection />
      <OurPartnersSection />
      <ContactSection />
    </>
  );
}
