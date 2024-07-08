import SectionContainer from "../containers/Container";
import CardSecondSection from "./Card/Card_second_section";
import TimeManagment from "../../../public/assets/TimeManagment-icon.png";
import Planet from "../../../public/assets/Planet-icone.png";
import LightIcon from "../../../public/assets/Light-icon.png";
import { Paragraph, Titel } from "../typography/Typography";
import { StaticImageData } from "next/image";

interface ICardsData {
  id:string,
  image:StaticImageData,
  description:string,
}

const cardsData:ICardsData[] = [
  {
    id:'fisrt',
    image: TimeManagment,
    description: "Працюємо з 2016 року",
  },
  {
    id:'second',
    image: Planet,
    description: "Представництва у Великій Британії, Туреччині, Україні",
  },
  {
    id:'third',
    image: LightIcon,
    description: "300+ задоволених клієнтів",
  },
];

function SecondSection() {
  return (
    <SectionContainer className="relative h-full bg-dark-gradient">
      <div className="flex flex-col md:flex-row justify-center items-center w-full md:flex-wrap m-auto left-0 right-0 gap-5 h-full mt-2 lg:absolute lg:top-[-15%] xl:top-[-35%]">
        {cardsData.map((el) => (
          <CardSecondSection image={el.image} description={el.description} key={el.id} />
        ))}
      </div>
      <Titel text="Наша команда" id="section_main_titel" className="xl:mt-[380px] lg:mt-[560px] md:mt-[160px] mt-[120px]"/>
      <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
    </SectionContainer>
  );
}

export default SecondSection;
