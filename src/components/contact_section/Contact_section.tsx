import SectionContainer from "../containers/Container";
import { Titel, Paragraph } from "../typography/Typography";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

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
    contact: "м.Одеса, вул. Катерининська, буд. 26",
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
        <div className="flex flex-col items-start justify-start gap-8">
            {contactData.map((el,i) => (
                <div className="flex flex-col items-start justify-start" key={el.id}>
                    <el.svgIcone className="text-cream w-[26px] h-[26px]"/>
                    <Paragraph text={el.titel} className="font-semibold lg:text-[20px] lg:leading-5 mt-0 mb-0"/>
                    {el.id === 'mail'?<a href={`mailto:${el.contact}`} className="text-base-mobile text-cream text-wrap lg:leading-8 mt-4 mb-4 font-light text-sm lg:text-[16px]">{el.contact}</a>:null}
                    {el.id === 'phone'?<a href={`tel:${el.contact}`} className="text-base-mobile text-cream text-wrap lg:leading-8 mt-4 mb-4 font-light text-sm lg:text-[16px]">{el.contact}</a>:null}
                    {el.id !== 'mail' && el.id !== 'phone'? <Paragraph text={el.contact} className="font-light text-sm lg:text-[16px]"/>:null}
                </div>
            ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default ContactSection;
