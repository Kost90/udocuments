"use client";
import Image from "next/image";
import LogoWhite from "../../../public/Print_Transparent.svg";
import {MenuIcon, XIcon} from "lucide-react";
import {Nav, NavLink} from "../ui/Nav";
import Button from "../ui/Button";
import Menumobile from "../menumobile/Menumobile";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";
import NavigationMenuServices from "../services_navigationmenu/NavigationMenu";
import {UDocumentData} from "@/constants/types";

function Header({lang, params}: { lang: UDocumentData, params: string }) {
    const [isOpen, setIsOpend] = useState<boolean>(false);

    const handelChange = () => {
        setIsOpend(!isOpen);
    };

    return (
        <header className="w-full bg-transparent absolute z-[1] border-b border-b-white">
            {/* Desktop navigation */}
            <Nav className="relative container z-10 mt-0 md:flex hidden">
                <NavLink href={`/${params}`}>
                    <div className="flex w-24 md:w-36 md:h-[120px]">
                        <Image src={LogoWhite} alt="Print Transparent Logo" width={180}/>
                    </div>
                </NavLink>
                <div className="flex flex-row items-center justify-between gap-7">
                    <div className="flex justify-center items-center">
                        <NavLink href={`/${params}`}>{lang.header.main}</NavLink>
                        <NavLink href={`/${params}/aboutus`}>{lang.header.aboutus}</NavLink>
                        <NavigationMenuServices lang={lang} params={params} />
                        <NavLink href={`/${params}/contacts`}>{lang.header.contacts}</NavLink>
                    </div>
                    <NavLink href={`?modal=true`} className='inline-block'>
                        <Button
                            type="button"
                            className="min-h-11 md:w-36 group:text-black font-normal"
                        >
                            {lang.buttonText.consultations}
                        </Button>
                    </NavLink>
                </div>
                <div className="flex flex-row items-center">

                    <NavLink href="/ua" className={params === "ua" ? "font-light text-orange" : "font-light"}
                             language="ua" params={params}>
                        Ua
                    </NavLink>
                    <div className="h-6 w-[1px] bg-white"/>
                    <NavLink href="/ru" className={params === "ru" ? "font-light text-orange" : "font-light"}
                             language="ru" params={params}>
                        Ru
                    </NavLink>
                    <div className="h-6 w-[1px] bg-white"/>
                    <NavLink href="/en" className={params === "en" ? "font-light text-orange" : "font-light"}
                             language="en" params={params}>
                        Eng
                    </NavLink>
                </div>
            </Nav>

            {/* Mobile navigation */}
            <Nav className="relative container z-10 mt-0 md:hidden">
                <NavLink href={`/${params}`} className="z-[10]" onClick={handelChange}>
                    <div className="md:h-[80px] w-24">
                        <Image src={LogoWhite} alt="logo" width={100}/>
                    </div>
                </NavLink>
                <button type="button" onClick={handelChange} className="mr-2"
                        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
                        aria-expanded={isOpen}>
                    {!isOpen ? <MenuIcon/> : <XIcon/>}
                </button>
            </Nav>
            <AnimatePresence>
                {!isOpen ? null : (
                    <Menumobile isOpen={isOpen} onClick={handelChange} lang={lang} params={params}/>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;
