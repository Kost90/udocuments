"use client";
import {useSearchParams, usePathname} from "next/navigation";
import {useFormState} from "react-dom";
import Input from "../Input/Input";
import Button from "../ui/Button";
import {sendCallBackMessage} from "@/app/[lang]/aboutus/_actions/actions";
import Link from "next/link";
import {motion} from "framer-motion";
import {
    transitionWithoutDelay,
    viewPort,
} from "@/constants/animation_variants";
import {Titel, Paragraph} from "../typography/Typography";
import {UDocumentData} from "@/constants/types";

function Modal({lang}: { lang: UDocumentData }) {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();
    const [error, sendCallbackMessAction] = useFormState(sendCallBackMessage, {});

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
                            text={lang.modal.title}
                            id="titel_of_modal_window"
                            className="mb-0 leading-10"
                        />
                        <Paragraph text={lang.modal.paragraph} className="mt-0"/>
                        <form
                            action={sendCallbackMessAction}
                            className="flex flex-col gap-6 justify-center items-start bg-general-gradient w-full h-full"
                        >
                            <Input
                                label={lang.modal.label.name}
                                type="text"
                                name="name"
                                id="text_input_name"
                                placeholder={lang.modal.placeholders.name}
                                required={true}
                                error={error?.name}
                            />
                            <Input
                                label={lang.modal.label.phone}
                                type="tel"
                                name="phone"
                                id="text_input_phone"
                                placeholder={lang.modal.placeholders.phone}
                                error={error?.phone}
                            />
                            <div className="flex flex-row flex-wrap items-center justify-center gap-3">
                                <Button type="submit">{lang.modal.send}</Button>
                                <Link href={`${pathname}`}>
                                    <Button type="button"
                                            className="hover:bg-cream hover:!text-black hover:font-bold">{lang.modal.cancel}</Button>
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
