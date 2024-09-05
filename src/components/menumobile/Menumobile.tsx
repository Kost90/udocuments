"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { NavLink } from "../ui/Nav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {useSearchParams} from "next/navigation";
import {Lang, headerLinksText} from "@/constants/data";
import {propertyText, businessSupport} from './data'

type IProps = {
  isOpen: boolean;
  onClick: () => void;
};

const MenuVariants = {
  hidden: {
    opacity: 0,
    y: "-90%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
  exit: {
    opacity: 0,
    y: "-90%",
    transition: { duration: 0.5 },
  },
};

function Menumobile({ isOpen, onClick }: IProps) {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("lang");
  const lang: Lang = (langParam as Lang) || 'default';

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
      <NavLink href={`/?lang=${langParam}`} onClick={onClick}>
        {headerLinksText[lang].main}
      </NavLink>
      <NavLink href={`/aboutus?lang=${langParam}`} onClick={onClick}>
        {headerLinksText[lang].aboutus}
      </NavLink>
      {/* Делаю дропдаун */}
      <Accordion
        type="single"
        collapsible
        className="flex justify-center items-center md:max-w-[70%] gap-4"
      >
        <AccordionItem value="service_links1">
          <AccordionTrigger className="p-2 text-cream font-bold hover:text-orange text-[14px] lg:text-lg border-b-0">
            {langParam === 'ua' ? 'Послуги' : langParam === 'ru' ? 'Услуги' : langParam === 'en' ? 'Services' : 'Oops data is missing'}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col justify-start items-start gap-2">
            <NavLink href={`/propertyservice?lang=${langParam}`} onClick={onClick}>
              {propertyText[lang]}
            </NavLink>
            <NavLink href={`/advocateservice?lang=${langParam}`} onClick={onClick}>
              {businessSupport[lang]}
            </NavLink>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <NavLink href="/contacts" onClick={onClick}>
        Контакти
      </NavLink>
      <div className="flex flex-row items-center">
        <NavLink href="?lang=ua" className="font-light" onClick={onClick} language="ua">
          Ua
        </NavLink>
        <div className="h-6 w-[1px] bg-white" />
        <NavLink href="?lang=ru" className="font-light" onClick={onClick} language="ru">
          Ru
        </NavLink>
        <div className="h-6 w-[1px] bg-white" />
        <NavLink href="?lang=en" className="font-light" onClick={onClick} language="en">
          Eng
        </NavLink>
      </div>
    </motion.div>
  );
}

export default Menumobile;
