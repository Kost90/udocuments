"use client";
import {useSearchParams, usePathname} from "next/navigation";
import {useFormState} from "react-dom";
import Input from "../Input/Input";
import Button from "../ui/Button";
import {sendCallBackMessage} from "@/app/aboutus/_actions/actions";
import Link from "next/link";
import {motion} from "framer-motion";
import {
    transitionWithoutDelay,
    viewPort,
} from "@/constants/animation_variants";
import {Titel, Paragraph} from "../typography/Typography";
import {title, paragraph, cancel, send} from './data';
import {Lang} from "@/constants/data";

function Modal() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const langParam = searchParams.get("lang");
    const lang: Lang = (langParam as Lang) || 'default';
    const pathname = usePathname();
    const [error, sendCallbackMessAction] = useFormState(sendCallBackMessage, {});

    const titleText = title[lang];
    const paragraphText = paragraph[lang];
    const cancelButtonText = cancel[lang];
    const sendButtonText = send[lang];

    return (
        <>
            {modal && (
                <div
                    className="left-0 h-full bg-transparent flex justify-center items-center w-full top-0 fixed z-10 p-5">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={transitionWithoutDelay}
                        viewport={viewPort}
                        className="flex flex-col gap-2 md:gap-4 justify-center items-start p-6 bg-general-gradient w-full h-full rounded-xl border border-orange text-start max-w-full md:max-w-[60%] max-h-full lg:max-h-[60%] lg:max-w-[50%]"
                    >
                        <Titel
                            text={titleText}
                            id="titel_of_modal_window"
                            className="mb-0 leading-10"
                        />
                        <Paragraph text={paragraphText} className="mt-0"/>
                        <form
                            action={sendCallbackMessAction}
                            className="flex flex-col gap-6 justify-center items-start bg-general-gradient w-full h-full"
                        >
                            <Input
                                label={langParam === 'ua' ? 'Імя' : langParam === 'ru' ? 'Имя' : langParam === 'en' ? 'Name' : 'missing data'}
                                type="text"
                                name="name"
                                id="text_input_name"
                                placeholder={langParam === 'ua' ? 'Ваше імя' : langParam === 'ru' ? 'Ваше имя' : langParam === 'en' ? 'Your name' : 'missing data'}
                                required={true}
                                error={error?.name}
                            />
                            <Input
                                label={langParam === 'ua' ? 'Телефон' : langParam === 'ru' ? 'Телефон' : langParam === 'en' ? 'Phone' : 'missing data'}
                                type="tel"
                                name="phone"
                                id="text_input_phone"
                                placeholder={langParam === 'ua' ? 'Ваш телефон' : langParam === 'ru' ? 'Ваш телефон' : langParam === 'en' ? 'Your phone number' : 'missing data'}
                                error={error?.phone}
                            />
                            <div className="flex flex-row flex-wrap items-center justify-center gap-3">
                                <Button type="submit">{sendButtonText}</Button>
                                <Link href={`${pathname}?lang=${langParam}`}>
                                    <Button type="button"
                                            className="hover:bg-cream hover:!text-black hover:font-bold">{cancelButtonText}</Button>
                                </Link>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </>
    );
}

export default Modal;
