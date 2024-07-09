"use client";
import Image from "next/image";
import LogoWhite from "../../../public/Print_Transparent.svg";
import { MenuIcon, XIcon } from "lucide-react";
import { Nav, NavLink } from "../ui/Nav";
import Button from "../ui/Button";
import Menumobile from "../menumobile/Menumobile";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function Header() {
  const [isOpen, setIsOpend] = useState<boolean>(false);

  const handelChange = () => {
    setIsOpend(!isOpen);
  };

  return (
    <header className="w-full bg-transparent absolute z-[1] border-b border-b-white">
      <Nav className="relative container z-10 mt-0 md:flex hidden">
        <NavLink href="/">
          <div className="md:h-[120px] h-11 sm:h-16 w-full">
            <Image src={LogoWhite} alt="logo" width={180} />
          </div>
        </NavLink>
        <div className="flex flex-row items-center justify-between gap-7">
          <div>
            <NavLink href="/">Головна</NavLink>
            <NavLink href="/aboutus">Про нас</NavLink>
            {/* Делаю дропдаун */}
            <NavLink href="/services">Послуги</NavLink>
            <NavLink href="/contacts">Контакти</NavLink>
          </div>
          <Button type="button" className="h-10 md:w-36 group:text-black">
            <NavLink
              href="/consultation"
              className="!text-black hover:!text-cream"
            >
              Консультація
            </NavLink>
          </Button>
        </div>

        <div className="flex flex-row items-center">
          {/* Делаю переключение на страницы с другим языком */}
          <NavLink href="/" className="font-light">
            Ua
          </NavLink>
          <div className="h-6 w-[1px] bg-white" />
          <NavLink href="/ru" className="font-light">
            Ru
          </NavLink>
          <div className="h-6 w-[1px] bg-white" />
          <NavLink href="/en" className="font-light">
            Eng
          </NavLink>
        </div>
      </Nav>
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
