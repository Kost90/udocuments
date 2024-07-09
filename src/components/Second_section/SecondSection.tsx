"use client";
import { motion } from "framer-motion";
import SectionContainer from "../containers/Container";
import CardSecondSection from "./Card/Card_second_section";
import TimeManagment from "../../../public/assets/TimeManagment-icon.png";
import Planet from "../../../public/assets/Planet-icone.png";
import LightIcon from "../../../public/assets/Light-icon.png";
import { Paragraph, Titel } from "../typography/Typography";
import { StaticImageData } from "next/image";
import { CarouselSpacing } from "../Carousel/Carousel";


interface ICardsData {
  id: string;
  image: StaticImageData;
  description: string;
}

const cardsData: ICardsData[] = [
  {
    id: "fisrt",
    image: TimeManagment,
    description: "Працюємо з 2016 року",
  },
  {
    id: "second",
    image: Planet,
    description: "Представництва у Великій Британії, Туреччині, Україні",
  },
  {
    id: "third",
    image: LightIcon,
    description: "300+ задоволених клієнтів",
  },
];

const MotionTitel = motion(Titel);

function SecondSection() {
  return (
    <SectionContainer className="relative h-full bg-dark-gradient pb-10 md:pb-20">
      <div className="flex flex-col md:flex-row justify-center items-center w-full md:flex-wrap m-auto left-0 right-0 gap-5 mt-2 lg:absolute lg:top-[-5%]">
        {cardsData.map((el,i) => (
          <CardSecondSection
            image={el.image}
            description={el.description}
            key={el.id}
            index={i}
          />
        ))}
      </div>
      <MotionTitel
      initial={{opacity:0,x:-20}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true,amount:0.2}}
      transition={{ duration: 0.3, ease: "linear" }}
        text="Наша команда"
        id="section_main_titel"
        className="xl:mt-[320px] lg:mt-[500px] md:mt-[140px] mt-[120px]"
      />
      <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <CarouselSpacing />
    </SectionContainer>
  );
}

export default SecondSection;
