'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {UDocumentData} from "@/constants/types";

function NavigationMenuServices({lang}: { lang: UDocumentData}) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{lang?.header.services.lable}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        {lang?.header.services.link.map((el) => (
                            <Link href={`/${el.href}`} key={el.href} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {el.lable}
                                </NavigationMenuLink>
                            </Link>
                        ))}
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default NavigationMenuServices;
