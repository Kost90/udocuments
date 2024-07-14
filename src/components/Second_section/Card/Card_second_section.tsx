"use client";
import { Paragraph } from "../../typography/Typography";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type IProps = {
  image: StaticImageData | string;
  description: string;
  index:number;
};

const MotionCard = motion(Card);

function CardSecondSection({ ...props }: IProps) {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.1 * props.index, ease: "linear" }}
      viewport={{ once: true, amount:0.2 }}
      className="bg-cardTransparent border border-orange h-full sm:h-[230px] w-full sm:max-w-[430px] flex items-center flex-col justify-center p-2"
    >
      <CardContent>
        <Image src={props.image} alt="time_managment_icon" />
      </CardContent>
      <CardFooter>
        <Paragraph text={props.description} className="text-center" />
      </CardFooter>
    </MotionCard>
  );
}

export default CardSecondSection;
