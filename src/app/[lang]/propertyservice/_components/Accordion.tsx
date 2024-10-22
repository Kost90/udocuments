import AccordionComponent from "@/components/accordion/Accordion";
import { UDocumentData } from "@/constants/types";

interface Services {
  title: string;
  services: string[];
}

function Accordion({
  titel,
  services,
}: {
  titel?: string;
  lang: UDocumentData;
  services: Services[];
}) {
  return (
    <div className="md:mt-5 rounded-md overflow-hidden bg-cream p-2 w-full md:w-2/5">
      <h2 className="text-3xl font-bold text-center">{titel}</h2>
      {services.map((el, i) => (
        <AccordionComponent
          value={el.title}
          triggerName={el.title}
          key={i}
          content={el.services}
        />
      ))}
    </div>
  );
}

export default Accordion;
