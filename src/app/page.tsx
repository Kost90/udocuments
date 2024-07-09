import HelloSection from "@/components/first_section/FirstSection";
import FiveSection from "@/components/five_section/Five_section";
import FourSection from "@/components/four_section/Four_section";
import SecondSection from "@/components/Second_section/SecondSection";
import SixSection from "@/components/six_section/Six_section";
import ThirdSection from "@/components/third_section/Third_section";
import ContactSection from "@/components/contact_section/Contact_section";

export default function Home() {
  return (
    <>
      <HelloSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FiveSection />
      <SixSection />
      <ContactSection />
    </>
  );
}
