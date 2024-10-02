"use client";
import { Card, CardContent, CardFooter } from "../ui/Card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import {
  transitionWithoutDelay,
  viewPort,
} from "@/constants/animation_variants";
import { UDocumentData } from "@/constants/types";

const MotionCarousel = motion(Carousel);

function CarouselSpacing({ lang }: { lang: UDocumentData }) {
  return (
    <MotionCarousel
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={transitionWithoutDelay}
      viewport={viewPort}
      className="w-full py-8"
    >
      <CarouselContent className="-mr-1">
        {lang.secondSection.carouselData.teamArray.map((el) => (
          <CarouselItem
            key={el.id}
            className="pl-4 pr-6 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="border-orange cursor-pointer overflow-hidden h-full my-4 md:my-10 shadow-cardShadow">
                <CardContent className="w-full p-0 overflow-hidden max-h-[450px]">
                  <Image
                    src={el.image}
                    alt={el.id}
                    placeholder="blur"
                    width={500}
                    height={100}
                    blurDataURL={"blur"}
                  />
                </CardContent>
                <CardFooter className="w-full bg-navBar flex flex-col justify-center items-center px-0 py-1">
                  <span className="text-orange">{el.name}</span>
                  <span className="text-cream">{el.role}</span>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious type={"button"} />
      <CarouselNext type={"button"} />
    </MotionCarousel>
  );
}

export default CarouselSpacing;
