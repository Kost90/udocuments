import AccordionComponent from "@/components/accordion/Accordion";
import SectionContainer from "@/components/containers/Container";
import { Paragraph, Titel } from "@/components/typography/Typography";
import { propertyServiceData } from "@/constants/data";

function MainSection() {
  return (
    <SectionContainer className="bg-light-gradient h-full w-full py-20 border-b border-b-slate-400">
      <Titel
        text="Терміни та вартість"
        id="titel_main_section_property_services"
      />
      <Paragraph
        className="my-5"
        text="Залежать від наявної документації та поточного стану справ.
Ми готові надати вам кваліфікований супровід введення в експлуатацію вашої нерухомості.
Ви можете отримати БЕЗКОШТОВНУ консультацію і ми індивідуально вкажемо вам терміни та вартість та запропонуємо відповідний варіант."
      />

      <div className="mt-5 md:mt-10">
        {propertyServiceData.map((el, i) => (
          <AccordionComponent
            value={el.titel}
            triggerName={el.titel}
            key={i}
            content={el.services}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

export default MainSection;
