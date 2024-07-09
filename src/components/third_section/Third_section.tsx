import SectionContainer from "../containers/Container";
import { Titel, Paragraph } from "../typography/Typography";
import { Card, CardHeader, CardContent } from "../ui/Card";
import Link from "next/link";

const cardData = [
  {
    id: "firstCard",
    titel: "Юридичний супровід бізнесу",
    description: "Ми надаємо повний цикл юридичного супроводу бізнесу",
  },
  {
    id: "secondCard",
    titel: "Послуги у сфері нерухомості",
    description:
      "Наша команда досвідчених юристів та інженерів з оформлення нерухомості",
  },
];

function ThirdSection() {
  return (
    <SectionContainer className="bg-sectionBg h-full border-y border-y-cream py-10 md:py-20">
      <Titel text="Наші послуги" id="main_titel" />
      <Paragraph
        text="We specialize in real estate law consultation, legal documentation, and general legal assistance."
        className="md:mt-10"
      />
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 my-10 md:my-20">
        {cardData.map((el) => (
          <Card
            key={el.id}
            className="w-full sm:w-[520px] md:w-1/2 md:max-w-[640px] h-[300px] bg-navBar border-orange cursor-pointer hover:bg-orange hover:border-cream shadow-cardShadow rounded-[15px] hover:scale-105 transition-all ease-in-out duration-300 text-cream hover:text-black justify-center items-center flex flex-col text-center"
          >
            <Link href="/services">
              <CardHeader className="text-base md:text-2xl font-bold">
                {el.titel}
              </CardHeader>
              <CardContent className="">{el.description}</CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

export default ThirdSection;
