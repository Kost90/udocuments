import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import Image, { StaticImageData } from "next/image";

type IProps = {
  image: StaticImageData | string;
  description: string;
};

function CardWithSvg({ ...props }: IProps) {
  return (
    <Card className="bg-cardTransparent border border-orange h-[230px] w-[430px] flex items-center flex-col justify-center top-[-2%]">
      <CardContent>
        <Image src={props.image} alt="time_managment_icon" />
      </CardContent>
      <CardFooter>
        <p className="text-base-mobile md:text-base-desctope text-cream text-wrap !leading-6 md:!leading-8 text-center">
          {props.description}
        </p>
      </CardFooter>
    </Card>
  );
}

export default CardWithSvg;
