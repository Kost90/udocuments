import React from "react";
import SectionContainer from "../containers/Container";
import CardWithSvg from "./CardWithSvg";
import TimeManagment from "../../../public/assets/TimeManagment-icon.png";
import Planet from "../../../public/assets/Planet-icone.png";
import LightIcon from "../../../public/assets/Light-icon.png";

const cardsData = [
  {
    image: TimeManagment,
    description: "Працюємо з 2016 року",
  },
  {
    image: Planet,
    description: "Представництва у Великій Британії, Туреччині, Україні",
  },
  {
    image: LightIcon,
    description: "300+ задоволених клієнтів",
  },
];

function SecondSection() {
  return (
    <SectionContainer className="relative h-full bg-dark-gradient">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 h-full absolute">
        {cardsData.map((el, i) => (
          <CardWithSvg image={el.image} description={el.description} key={i} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default SecondSection;
