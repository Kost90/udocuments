"use client";
import Link from "next/link";
import {Paragraph} from '@/components/typography/Typography';
import Button from '@/components/ui/Button';
import {motion} from "framer-motion";
import {UDocumentData} from "@/constants/types";

function CardFirstSection({lang}: { lang: UDocumentData }) {
    return (
        <motion.div
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{ duration: 0.2, ease: "linear" }}
            className="flex flex-col w-full h-full sm:w-[420px] md:w-[520px] lg:w-[700px] md:h-[391px] bg-darkTransparent p-4 items-start justify-around rounded-2xl mt-[200px] md:mt-[300px] mb-[200px] md:mb-[320px] border-orange border"
            aria-labelledby="card-main-title"
        >
            <h1
                style={{ contentVisibility: 'auto' }}
                className="text-large-mobile lg:text-3xl sm:text-2xl text-xl text-orange font-semibold leading-8 lg:leading-[40px]"
                id="card-main-title"
            >
                {lang.firstSection.title}
            </h1>
            <Paragraph
                text={
                    lang.firstSection.paragraph
                }
                className="mt-3 md:mt-0 lg:text-lg"
            />
            <Link href={`?modal=true`}>
                <Button
                    type="button"
                    className="h-12 md:w-48 flex items-center justify-center text-sm md:text-base"
                    aria-label="Замовити дзвінок"
                >
                    {lang.firstSection.callBack}
                </Button>
            </Link>
        </motion.div>
    );
}

export default CardFirstSection;