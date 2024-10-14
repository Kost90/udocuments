import SectionContainer from "@/components/containers/Container";
import { Paragraph } from "@/components/typography/Typography";

type HeadingSectionProps = {
  titelText: string;
  paragraphText: string;
  className?: string;
};

function HeadingSection({ ...props }: HeadingSectionProps) {
  return (
    <SectionContainer
      className={`bg-sectionBg h-full w-full pt-32 md:pt-[185px] pb-28 border-b border-b-slate-400 ${props.className}`}
    >
      <div className="flex flex-col gap-6 justify-start items-start pt-10 md:py-20">
      <h1
          id="page_titel"
          className="text-large-mobile lg:text-large-desktop text-orange font-semibold lg:leading-[40px] leading-9"
        >{props.titelText}</h1>
        <Paragraph
          text={props.paragraphText}
        />
      </div>
    </SectionContainer>
  );
}

export default HeadingSection;
