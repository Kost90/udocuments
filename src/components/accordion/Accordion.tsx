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

function AccordionComponent({ ...props }: AccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex justify-center items-center md:max-w-[70%] gap-4 m-auto my-3"
    >
      <AccordionItem
        value={props.value}
        className="bg-cream rounded-lg p-3 border border-slate-600 w-full"
      >
        <AccordionTrigger className="text-lg font-bold">
          {props.triggerName}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col justify-start items-start gap-2">
          <h3 className="text-black font-semibold">Документи:</h3>
          <ul className="flex flex-col justify-start items-start gap-2 px-4">
            {props.content.map((el, i) => (
              <li key={i} className="text-black list-disc">
                {el}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionComponent;
