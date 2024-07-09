import SectionContainer from "../containers/Container";
import { Titel, Paragraph } from "../typography/Typography";
import Button from "../ui/Button";

function FirstSection() {
  return (
    <SectionContainer className="bg-header-section bg-cover h-full">
      <CardMainSec />
    </SectionContainer>
  );
}

function CardMainSec() {
  return (
    <div
      className="flex flex-col w-full h-80 sm:w-[420px] md:w-[520px] lg:w-[588px] md:h-[391px] bg-darkTransparent p-4 items-start justify-around rounded-2xl mt-[200px] md:mt-[320px] mb-[200px] md:mb-[320px] border-orange border"
      aria-labelledby="card-main-title"
    >
      <Titel text="U Document" id="card-main-title" />
      <Paragraph
        text="Пропонує комплексні юридичні послуги у сфері нерухомості,
        отримання та легалізації документів на території України,
        Великобританії, Туреччини та інших країн Європи. Наша команда
        досвідчених адвокатів надає експертні поради та підтримку, які
        допоможуть вам вирішити складні правові питання."
      />
      <Button
        type="button"
        className="h-12 md:w-48 flex items-center justify-center text-sm md:text-base"
      >
        Замовити дзвінок
      </Button>
    </div>
  );
}

export default FirstSection;
