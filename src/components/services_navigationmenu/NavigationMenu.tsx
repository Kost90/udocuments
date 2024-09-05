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
import {navigationMenuData} from "@/constants/data";
import {useSearchParams} from "next/navigation";

function NavigationMenuServices() {
    const searchParams = useSearchParams();
    const langParam = searchParams.get("lang");

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{langParam === 'ua' ? 'Послуги' : langParam === 'ru' ? 'Услуги' : langParam === 'en' ? 'Services' : 'Oops data is missing'}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        {navigationMenuData.map((el) => (
                            <Link href={`${el.href}?lang=${langParam}`} key={el.id} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {langParam === 'ua' ? el.text.ua : langParam === 'ru' ? el.text.ru : langParam === 'en' ? el.text.en : 'Oops data is missing'}
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
