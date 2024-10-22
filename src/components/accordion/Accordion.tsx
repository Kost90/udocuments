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
      className="flex justify-center items-center w-full"
    >
      <AccordionItem value={value} className="bg-cream p-3 w-full">
        <AccordionTrigger className="text-lg font-semibold">
          {triggerName}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col justify-start items-start gap-2 p-3">
          <ul className="flex flex-col justify-start items-start gap-2 px-4">
            {content.map((item, index) => (
              <li
                key={`${item} + ${index}`}
                className="text-black list-disc text-base"
              >
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
