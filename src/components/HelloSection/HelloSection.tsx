import SectionContainer from "../containers/Container";
import Button from "../ui/Button";

function HelloSection() {
  return (
    <SectionContainer className="bg-header-section bg-cover h-full max-h-[880px]">
      <CardMainSec />
    </SectionContainer>
  );
}

function CardMainSec() {
  return (
    <div
      className="flex flex-col w-full h-80 md:w-[588px] md:h-[391px] bg-darkTransparent p-2 items-start justify-around rounded-2xl mt-[200px] md:mt-[320px] mb-[200px] md:mb-[320px]"
      aria-labelledby="card-main-title"
    >
      <h2
        id="card-main-title"
        className="text-large-mobile md:text-large-desctope text-orange-500 font-semibold"
      >
        U Document
      </h2>
      <p className="text-base-mobile md:text-base-desctope text-cream text-wrap !leading-6 md:!leading-8">
        пропонує комплексні юридичні послуги у сфері нерухомості,
        отримання та легалізації документів на території України,
        Великобританії, Туреччини та інших країн Європи. Наша команда
        досвідчених адвокатів надає експертні поради та підтримку, які
        допоможуть вам вирішити складні правові питання.
      </p>
      <Button
        type="button"
        className="h-12 w-40 md:w-48 flex items-center justify-center text-sm md:text-base"
      >
        Замовити дзвінок
      </Button>
    </div>
  );
}

export default HelloSection;
