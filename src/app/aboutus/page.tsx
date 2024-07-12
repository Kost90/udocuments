import OurPertnersSection from "@/components/OurPartners_section/OurPartners_section"
import HeadingSection from "./_components/HeadingSection"
import OurTeamSection from "./_components/OurTeamSection"
import OurHistirySection from "./_components/OurHistirySection"
import ContactsSection from "./_components/ContactsSection"
import FormSection from "./_components/FormSection"

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