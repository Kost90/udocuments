"use client";
import clsx from "clsx";
import {motion} from "framer-motion";
import {NavLink} from "../ui/Nav";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import {UDocumentData} from "@/constants/types";

type IProps = {
    isOpen: boolean;
    onClick: () => void;
    lang: UDocumentData;
    params: string;
};

const MenuVariants = {
    hidden: {
        opacity: 0,
        y: "-90%",
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.7},
    },
    exit: {
        opacity: 0,
        y: "-90%",
        transition: {duration: 0.5},
    },
};

function Menumobile({isOpen, onClick, lang, params}: IProps) {

    return (
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            exit="exit"
            variants={MenuVariants}
            className={clsx(
                "flex md:hidden justify-center items-center gap-3 absolute top-0 z-[1] h-screen w-full flex-col left-0 font-semibold bg-navBar"
            )}
        >
            <NavLink href={`/${params}`} onClick={onClick}>
                {lang.header.main}
            </NavLink>
            {/* <NavLink href={`/${params}/aboutus`} onClick={onClick}>
                {lang.header.aboutus}
            </NavLink> */}
            {/* <Accordion
                type="single"
                collapsible
                className="flex justify-center items-center md:max-w-[70%] gap-4"
            >
                <AccordionItem value="service_links1">
                    <AccordionTrigger
                        className="p-2 text-cream font-bold hover:text-orange text-[14px] lg:text-lg border-b-0">
                        {lang.header.services.lable}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col justify-start items-start gap-2">
                        <NavLink href={`/${params}/propertyservice`} onClick={onClick}>
                            {lang.header.services.link[0].lable}
                        </NavLink>
                        <NavLink href={`/${params}/advocateservice`} onClick={onClick}>
                            {lang.header.services.link[1].lable}
                        </NavLink>
                    </AccordionContent>
                </AccordionItem>
            </Accordion> */}

            <NavLink href={`/${params}/contacts`} onClick={onClick}>
                {lang.header.contacts}
            </NavLink>
            <div className="flex flex-row items-center">
                <NavLink href="/ua" className={params === "ua" ? "font-light text-orange" : "font-light"}
                         onClick={onClick} language="ua" params={params}>
                    Ua
                </NavLink>
                <div className="h-6 w-[1px] bg-white"/>
                <NavLink href="/ru" className={params === "ru" ? "font-light text-orange" : "font-light"}
                         onClick={onClick} language="ru" params={params}>
                    Ru
                </NavLink>
                <div className="h-6 w-[1px] bg-white"/>
                <NavLink href="/en" className={params === "en" ? "font-light text-orange" : "font-light"}
                         onClick={onClick} language="en" params={params}>
                    Eng
                </NavLink>
            </div>
        </motion.div>
    );
}

export default Menumobile;
