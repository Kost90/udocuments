"use client";
import Link from "next/link";
import SectionContainer from "../containers/Container";
import {Paragraph} from "../typography/Typography";
import Button from "../ui/Button";
import {motion} from "framer-motion";
import {useSearchParams} from "next/navigation";
import {paragraphData} from "@/components/first_section/data";

function FirstSection() {
    return (
        <SectionContainer className="bg-header-section bg-cover h-full">
            <CardMainSec/>
        </SectionContainer>
    );
}

function CardMainSec() {
    const searchParams = useSearchParams();
    const lang = searchParams.get("lang");

    return (
        <motion.div
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.3, ease: "linear"}}
            className="flex flex-col w-full h-full max-h-[26rem] sm:w-[420px] md:w-[520px] lg:w-[588px] md:h-[391px] bg-darkTransparent p-4 items-start justify-around rounded-2xl mt-[200px] md:mt-[300px] mb-[200px] md:mb-[320px] border-orange border"
            aria-labelledby="card-main-title"
        >
            <h1
                className="text-large-mobile lg:text-large-desktop text-orange font-semibold leading-8 lg:leading-[40px]"
                id="card-main-title"
            >
                {lang === 'ua' ? 'UDocument - комплексні юридичні послуги' : lang === 'ru' ? 'UDocument - комплексные юридические услуги' : lang === 'en' ? 'UDocument - comprehensive legal services' : null}
            </h1>
            <Paragraph
                text={
                    lang === 'ua' ? paragraphData.textUa : lang === 'ru' ? paragraphData.textRu : lang === 'en' ? paragraphData.textEn : 'Oops something wrong, data missing'
                }
                className="mt-3 md:mt-0"
            />
            <Link href={`?modal=true&lang=${lang}`}>
                <Button
                    type="button"
                    className="h-12 md:w-48 flex items-center justify-center text-sm md:text-base"
                    aria-label="Замовити дзвінок"
                >
                    {lang === 'ua' ? 'Замовити дзвінок' : lang === 'ru' ? 'Заказать звонок' : lang === 'en' ? 'Book a call' : null}
                </Button>
            </Link>
        </motion.div>
    );
}

export default FirstSection;
