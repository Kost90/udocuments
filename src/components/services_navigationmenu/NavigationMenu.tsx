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
import { navigationMenuData } from "@/constants/data";
import {useSearchParams} from "next/navigation";

function NavigationMenuServices() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Послуги</NavigationMenuTrigger>
          <NavigationMenuContent>
            {navigationMenuData.map((el) => (
              <Link href={`${el.href}?lang=${lang}`} key={el.id} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {el.text}
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
