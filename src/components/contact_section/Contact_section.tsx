import SectionContainer from "../containers/Container";
import { Titel, Paragraph } from "../typography/Typography";
import { Mail, Phone, MapPin } from "lucide-react";

const contactData = [
  {
    id: "mail",
    svgIcone: Mail,
    titel: "Email",
    contact: "hello@gmail.com",
  },
  {
    id: "phone",
    svgIcone: Phone,
    titel: "Телефон",
    contact: "+38(00)000 000",
  },
  {
    id: "map",
    svgIcone: MapPin,
    titel: "Офіс",
    contact: "м.Одеса, вул. Катерининська, буд. 8",
  },
];

function ContactSection() {
  return (
    <SectionContainer className="bg-light-gradient py-10 md:py-20 h-full border-b border-b-cream">
      <div className="flex flex-col items-start justify-start mb-10 md:mb-20">
        <Titel text="Наші контакти" id="section_titel" />
        <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10">
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start gap-8">
          {contactData.map((el, i) => (
            // TODO: Вынести это в отдельный компонент
            <div
              className="flex flex-col justify-center items-center text-center md:text-start md:items-start md:justify-start gap-1"
              key={el.id}
            >
              <el.svgIcone className="text-cream w-[26px] h-[26px]" />
              <Paragraph
                text={el.titel}
                className="font-semibold lg:text-[20px] lg:leading-5 mt-0 mb-0 md:mt-0 md:mb-0 lg:mt-0 lg:mb-0"
              />
              {el.id === "mail" ? (
                <a
                  href={`mailto:${el.contact}`}
                  className="text-base-mobile text-cream text-wrap lg:leading-8 mt-0 mb-0 font-light text-sm lg:text-[16px] lg:mt-0 lg:mb-0"
                >
                  {el.contact}
                </a>
              ) : null}
              {el.id === "phone" ? (
                <a
                  href={`tel:${el.contact}`}
                  className="text-base-mobile text-cream text-wrap lg:leading-8 mt-0 mb-0 font-light text-sm lg:text-[16px] lg:mt-0 lg:mb-0"
                >
                  {el.contact}
                </a>
              ) : null}
              {el.id !== "mail" && el.id !== "phone" ? (
                <Paragraph
                  text={el.contact}
                  className="font-light text-sm lg:!text-[16px] mt-0 mb-0 md:mt-0 md:mb-0 lg:mt-0 lg:mb-0 max-w-32"
                />
              ) : null}
            </div>
            // =====================================================================================================
          ))}
        </div>
        {/* Вынести это в отельную функцию */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.112728567579!2d30.736870688162714!3d46.4860802253535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631bd65e172a9%3A0x22d39a1e5725cd8e!2z0YPQuy4g0JXQutCw0YLQtdGA0LjQvdC40L3RgdC60LDRjywgOCwg0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgNjUwMDA!5e0!3m2!1sru!2suk!4v1720532290145!5m2!1sru!2suk"
          style={{border:0}}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl w-full md:w-1/2 h-96 md:h-[500px]"
        ></iframe>
      </div>
    </SectionContainer>
  );
}

export default ContactSection;
