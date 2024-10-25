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
    <div className="md:mt-5 rounded-md overflow-hidden bg-cream p-6 w-full sm:w-2/3 md:w-2/5 flex flex-col items-center justify-start h-full md:min-h-[380px] xl:min-h-0">
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
