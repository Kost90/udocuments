import HelloSection from "@/components/first_section/FirstSection";
import ConsultationSection from "@/components/consultation_section/ConsultationSection";
import ApproachSection from "@/components/approachSection/ApproachSection";
import SecondSection from "@/components/Second_section/SecondSection";
import OurPartnersSection from "@/components/OurPartners_section/OurPartners_section";
import ThirdSection from "@/components/third_section/Third_section";
import ContactSection from "@/components/contact_section/Contact_section";

export default function Home() {
  return (
    <>
      <HelloSection />
      <SecondSection />
      <ThirdSection />
      <ApproachSection />
      <ConsultationSection />
      <OurPartnersSection />
      <ContactSection />
    </>
  );
}
