'use client'
import LogoWhite from "../../../public/Print_Transparent.svg";
import Image from "next/image";
import {NavLink} from "../ui/Nav";
import {Instagram, Facebook, Youtube} from "lucide-react";
import {Separator} from "../ui/separator";
import NavigationMenuServices from "../services_navigationmenu/NavigationMenu";
import {UDocumentData} from "@/constants/types";

function Footer({lang, params}: { lang: UDocumentData, params: string }) {
    return (
        <footer className="py-8 md:py-14 h-full bg-general-gradient w-full">
            <div className="container">
                <div className="flex justify-between items-center pb-10">
                    <NavLink href={`/${params}`}>
                        <div className="flex w-24 md:w-36 md:h-[120px]">
                            <Image src={LogoWhite} alt="Print Transparent Logo" width={180}/>
                        </div>
                    </NavLink>

                    <div className="flex flex-col md:flex-row text-cream">
                        <NavLink href={`/${params}`}>{lang.header.main}</NavLink>
                        <NavigationMenuServices lang={lang}/>
                        <NavLink href={`/contacts`}>{lang.header.contacts}</NavLink>
                    </div>
                    <div className="flex justify-center items-center">
                        <Instagram className="text-cream cursor-pointer transition duration-300 hover:text-orange"/>
                        <Facebook className="text-cream cursor-pointer transition duration-300 hover:text-orange"/>
                        <Youtube className="text-cream cursor-pointer transition duration-300 hover:text-orange"/>
                    </div>
                </div>
                <Separator/>
                <div className="flex justify-center items-center gap-10 py-2">
          <span className="text-slate-400">
            © 2024 UDocuments. All rights reserved.
          </span>
                    <span className="text-slate-400">Політика конфіденційності</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
