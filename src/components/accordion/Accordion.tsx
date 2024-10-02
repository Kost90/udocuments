import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionProps {
  value: string;
  triggerName: string;
  content: string[];
}

function AccordionComponent({ value, triggerName, content }: AccordionProps) {
  return (
    <Accordion 
    type="single" 
    collapsible 
    className="flex justify-center items-center md:max-w-[70%] gap-4 m-auto my-3">

      <AccordionItem
        value={value}
        className="bg-cream rounded-lg p-3 border border-slate-600 w-full"
      >
        <AccordionTrigger className="text-lg font-bold">{triggerName}</AccordionTrigger>
        <AccordionContent className="flex flex-col justify-start items-start gap-2">
          <ul className="flex flex-col justify-start items-start gap-2 px-4">
            {content.map((item, index) => (
              <li key={`${item} + ${index}`} className="text-black list-disc">
                {item}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionComponent;
