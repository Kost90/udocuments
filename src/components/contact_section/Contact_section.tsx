"use client";
import SectionContainer from "../containers/Container";
import ContactsList from "./Contacts_list";
import { Titel, Paragraph } from "../typography/Typography";
import { contactData } from "@/constants/data";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <SectionContainer className="bg-light-gradient py-10 md:py-20 h-full border-b border-b-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col items-start justify-start mb-10 md:mb-20">
          <Titel text="Наші контакти" id="section_titel" />
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start gap-8">
            {contactData.map((el) => (
              <ContactsList
                id={el.id}
                titel={el.titel}
                svgIcone={el.svgIcone}
                contact={el.contact}
                key={el.id}
              />
            ))}
          </div>
          <GoogleMapFrame />
        </div>
      </motion.div>
    </SectionContainer>
  );
}

export function GoogleMapFrame() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.112728567579!2d30.736870688162714!3d46.4860802253535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631bd65e172a9%3A0x22d39a1e5725cd8e!2z0YPQuy4g0JXQutCw0YLQtdGA0LjQvdC40L3RgdC60LDRjywgOCwg0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgNjUwMDA!5e0!3m2!1sru!2suk!4v1720532290145!5m2!1sru!2suk"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-2xl w-full md:w-1/2 h-96 md:h-[500px]"
    ></iframe>
  );
}

export default ContactSection;
