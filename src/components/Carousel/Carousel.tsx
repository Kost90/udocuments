import {
  Card,
  CardContent,
  CardFooter,
} from "../ui/Card";
import Image from "next/image";
import { teamArray } from "@/constants/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CarouselSpacing() {
  return (
    <Carousel className="w-full py-8">
      <CarouselContent className="-mr-1">
        {teamArray.map((el) => (
          <CarouselItem key={el.id} className="pl-4 pr-6 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="border-orange cursor-pointer overflow-hidden h-full my-4 md:my-10 shadow-cardShadow">
                <CardContent className="w-full p-0 overflow-hidden max-h-[450px]">
                  <Image
                    src={el.image}
                    alt={el.id}
                    placeholder="blur"
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
    </Carousel>
  );
}

export default CarouselSpacing