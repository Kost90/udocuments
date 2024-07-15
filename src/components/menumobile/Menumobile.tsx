"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { NavLink } from "../ui/Nav";
import NavigationMenuServices from "../services_navigationmenu/NavigationMenu";

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
      <NavLink href="/" onClick={onClick}>
        Головна
      </NavLink>
      <NavLink href="/aboutus" onClick={onClick}>
        Про нас
      </NavLink>
      {/* Делаю дропдаун */}
      <span className="p-2 text-cream font-bold hover:text-orange text-[14px] lg:text-lg">
        Послуги:
      </span>
      <NavLink href="/propertyservice" onClick={onClick}>
        у сфері нерухомості
      </NavLink>
      <NavLink href="/advocateservice" onClick={onClick}>
        адвоката, супровід бізнесу
      </NavLink>
      <NavLink href="/contacts" onClick={onClick}>
        Контакти
      </NavLink>
      <div className="flex flex-row items-center">
        {/* Делаю переключение на страницы с другим языком */}
        {/* <NavLink href="/" className="font-light" onClick={onClick}>
          Ua
        </NavLink>
        <div className="h-6 w-[1px] bg-white" />
        <NavLink href="/ru" className="font-light" onClick={onClick}>
          Ru
        </NavLink>
        <div className="h-6 w-[1px] bg-white" />
        <NavLink href="/en" className="font-light" onClick={onClick}>
          Eng
        </NavLink> */}
      </div>
    </motion.div>
  );
}

export default Menumobile;
