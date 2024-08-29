"use client";
import Image from "next/image";
import LogoWhite from "../../../public/Print_Transparent.svg";
import { MenuIcon, XIcon } from "lucide-react";
import { Nav, NavLink } from "../ui/Nav";
import Button from "../ui/Button";
import Menumobile from "../menumobile/Menumobile";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavigationMenuServices from "../services_navigationmenu/NavigationMenu";
import {useSearchParams} from "next/navigation";

function Header() {
  const [isOpen, setIsOpend] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  const handelChange = () => {
    setIsOpend(!isOpen);
  };

  return (
    <header className="w-full bg-transparent absolute z-[1] border-b border-b-white">
      {/* Desktop navigation */}
      <Nav className="relative container z-10 mt-0 md:flex hidden">
        <NavLink href={`/?lang=${lang}`}>
          <div className="flex w-24 md:w-36 md:h-[120px]">
            <Image src={LogoWhite} alt="Print Transparent Logo" width={180} />
          </div>
        </NavLink>
        <div className="flex flex-row items-center justify-between gap-7">
          <div className="flex justify-center items-center">
            <NavLink href={`/?lang=${lang}`}>Головна</NavLink>
            <NavLink href={`/aboutus?lang=${lang}`}>Про нас</NavLink>
            <NavigationMenuServices />
            <NavLink href={`/contacts?lang=${lang}`}>Контакти</NavLink>
          </div>
          <NavLink href={`?modal=true&lang=${lang}`}>
            <Button
              type="button"
              className="h-10 md:w-36 group:text-black font-normal"
            >
              Консультація
            </Button>
          </NavLink>
        </div>
        <div className="flex flex-row items-center">

           <NavLink href="?lang=ua" className="font-light" language="ua">
            Ua
          </NavLink>
          <div className="h-6 w-[1px] bg-white" />
          <NavLink href="?lang=ru" className="font-light" language="ru">
            Ru
          </NavLink>
          <div className="h-6 w-[1px] bg-white" />
          <NavLink href="?lang=en" className="font-light" language="en">
            Eng
          </NavLink>
        </div>
      </Nav>

      {/* Mobile navigation */}
      <Nav className="relative container z-10 mt-0 md:hidden">
        <NavLink href="/" className="z-[10]" onClick={handelChange}>
          <div className="md:h-[80px] w-24">
            <Image src={LogoWhite} alt="logo" width={100} />
          </div>
        </NavLink>
        <button type="button" onClick={handelChange} className="mr-2">
          {isOpen === false ? <MenuIcon /> : <XIcon />}
        </button>
      </Nav>
      <AnimatePresence>
        {isOpen === false ? null : (
          <Menumobile isOpen={isOpen} onClick={handelChange} />
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
