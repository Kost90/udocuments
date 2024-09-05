'use client'
import {
    Card,
    CardContent,
    CardFooter,
} from "../ui/Card";
import Image from "next/image";
import {teamArray} from "@/constants/data";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {motion} from "framer-motion";
import {transitionWithoutDelay, viewPort} from "@/constants/animation_variants";
import {useSearchParams} from "next/navigation";

const MotionCarousel = motion(Carousel);

function CarouselSpacing() {
    const searchParams = useSearchParams();
    const langParam = searchParams.get("lang");
    return (
        <MotionCarousel
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={transitionWithoutDelay}
            viewport={viewPort}
            className="w-full py-8">
            <CarouselContent className="-mr-1">
                {teamArray.map((el) => (
                    <CarouselItem key={el.ua.id} className="pl-4 pr-6 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card
                                className="border-orange cursor-pointer overflow-hidden h-full my-4 md:my-10 shadow-cardShadow">
                                <CardContent className="w-full p-0 overflow-hidden max-h-[450px]">
                                    <Image
                                        src={el.ua.image}
                                        alt={el.ua.id}
                                        placeholder="blur"
                                    />
                                </CardContent>
                                <CardFooter
                                    className="w-full bg-navBar flex flex-col justify-center items-center px-0 py-1">
                                    <span
                                        className="text-orange">{langParam === 'ua' ? el.ua.name : langParam === 'ru' ? el.ru.name : langParam === 'en' ? el.en.name : 'Oops data is missing'}</span>
                                    <span
                                        className="text-cream">{langParam === 'ua' ? el.ua.role : langParam === 'ru' ? el.ru.role : langParam === 'en' ? el.en.role : 'Oops data is missing'}</span>
                                </CardFooter>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious type={"button"}/>
            <CarouselNext type={"button"}/>
        </MotionCarousel>
    );
}

export default CarouselSpacing