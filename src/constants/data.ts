import {Mail, Phone, MapPin} from "lucide-react";
import {StaticImageData} from "next/image";
import TimeManagment from "../../public/assets/TimeManagment-icon.png";
import Planet from "../../public/assets/Planet-icone.png";
import LightIcon from "../../public/assets/Light-icon.png";
import HandsIcone from "../../public/assets/hands_cone.svg";
import FolderIcon from "../../public/assets/folder-icone.svg";
import ShieldIcon from "../../public/assets/shield_icone.svg";
import Bilozor from "../../public/assets/belozor_image.png";
import Dontsov from "../../public/assets/dontsov_image.png";
import Tsapushel from "../../public/assets/tsapushel_image.png";
import Barda from "../../public/assets/barda_image.png";
import Loshakova from "../../public/assets/loshakova_image.png";
import Sherbin from "../../public/assets/sherbin_image.png";

export type Lang = 'ua' | 'ru' | 'en' | 'default';

export const buttonText: Record<Lang, string> = {
    ua: 'Консультація',
    ru: 'Консультация',
    en: 'Consultation',
    default: 'Oops, data is missing',
}

export interface ICardsData {
    id: string;
    image: StaticImageData;
    descriptionUA: string;
    descriptionRU: string;
    descriptionEN: string;
}

export const cardsData: ICardsData[] = [
    {
        id: "fisrt",
        image: TimeManagment,
        descriptionUA: "Працюємо з 2016 року",
        descriptionRU: "Работаем с 2016 года",
        descriptionEN: "Working from 2016",
    },
    {
        id: "second",
        image: Planet,
        descriptionUA: "Представництва у Великій Британії, Туреччині, Україні",
        descriptionRU: "Представительства в Великобритании, Турции, Украине",
        descriptionEN: "Representations in United Kingdom, Turkey, Ukraine",
    },
    {
        id: "third",
        image: LightIcon,
        descriptionUA: "300+ задоволених клієнтів",
        descriptionRU: "300+ довольных клиентов",
        descriptionEN: "300+ satisfied customers",
    },
];

export const cardData = [
    {
        id: "firstCard",
        titelUA: "Юридичний супровід бізнесу",
        titelRU: "Юридическое сопровождение бизнеса",
        titelEN: "Legal business support",
        href: "/advocateservice",
        descriptionUA: "Ми надаємо повний цикл юридичного супроводу бізнесу",
        descriptionRU: "Мы предоставляем полный цикл юридического сопровождения бизнеса",
        descriptionEN: "We provide a full cycle of legal support for businesses",
    },
    {
        id: "secondCard",
        titelUA: "Послуги у сфері нерухомості",
        titelRU: "Услуги в сфере недвижимости",
        titelEN: "Real estate services",
        href: "/propertyservice",
        descriptionUA: "Наша команда досвідчених юристів та інженерів з оформлення нерухомості",
        descriptionRU: "Наша команда опытных юристов и инженеров по оформлению недвижимости",
        descriptionEN: "Our team of experienced lawyers and property registration engineers",
    },
];

export const sectionData = [
    {
        id: "firstEl",
        svgIcone: FolderIcon,
        descriptionUA:
            "Сучасний підхід до надання високоякісних послуг у галузі оформлення нерухомості.",
        descriptionRU:
            "Современный подход к предоставлению высококачественных услуг в сфере оформления недвижимости.",
        descriptionEN:
            "A modern approach to providing high-quality services in the field of real estate processing.",
    },
    {
        id: "secondtEl",
        svgIcone: ShieldIcon,
        descriptionUA:
            "Захист прав та інтересів наших клієнтів – наш пріоритет.",
        descriptionRU:
            "Защита прав и интересов наших клиентов – наш приоритет.",
        descriptionEN:
            "Protecting the rights and interests of our clients is our priority.",
    },
    {
        id: "thirdEl",
        svgIcone: HandsIcone,
        descriptionUA:
            "Дотримання термінів надання послуг відповідно до укладеного договору.",
        descriptionRU:
            "Соблюдение сроков предоставления услуг в соответствии с заключенным договором.",
        descriptionEN:
            "Adherence to service delivery timelines in accordance with the signed contract.",
    },
];

// Todo: Need to delete after change aboutus page
export const contactData = [
    {
        id: "mail",
        svgIcone: Mail,
        titel: "Email",
        contact: "leparker@ukr.net",
    },
    {
        id: "phone",
        svgIcone: Phone,
        titel: "Телефон",
        contact: "+380(99)773 10 93",
    },
    {
        id: "map",
        svgIcone: MapPin,
        titel: "Офіс",
        contact: "м.Одеса, вул. Катерининська, буд. 8",
    },
];

export const teamArray = [
    {
        ua: {
            id: "belozor",
            image: Bilozor,
            name: "Олеся Білозор",
            role: "керуючий партнер, адвокат",
        },
        ru: {
            id: "belozor",
            image: Bilozor,
            name: "Олеся Белозор",
            role: "управляющий партнер, адвокат",
        },
        en: {
            id: "belozor",
            image: Bilozor,
            name: "Olesya Bilozor",
            role: "Managing Partner, Lawyer",
        }
    },
    {
        ua: {
            id: "dontsov",
            image: Dontsov,
            name: "Костянтин Донцов",
            role: "партнер, адвокат",
        },
        ru: {
            id: "dontsov",
            image: Dontsov,
            name: "Константин Донцов",
            role: "партнер, адвокат",
        },
        en: {
            id: "dontsov",
            image: Dontsov,
            name: "Kostiantyn Dontsov",
            role: "Partner, Lawyer",
        }
    },
    {
        ua: {
            id: "loshakova",
            image: Loshakova,
            name: "Лошакова Юлія",
            role: "адвокат",
        },
        ru: {
            id: "loshakova",
            image: Loshakova,
            name: "Лошакова Юлия",
            role: "адвокат",
        },
        en: {
            id: "loshakova",
            image: Loshakova,
            name: "Yulia Loshakova",
            role: "Lawyer",
        }
    },
    {
        ua: {
            id: "barda",
            image: Barda,
            name: "Барда Катерина",
            role: "адвокат",
        },
        ru: {
            id: "barda",
            image: Barda,
            name: "Барда Екатерина",
            role: "адвокат",
        },
        en: {
            id: "barda",
            image: Barda,
            name: "Kateryna Barda",
            role: "Lawyer",
        }
    },
    {
        ua: {
            id: "tsapushel",
            image: Tsapushel,
            name: "Лісковська Ірина",
            role: "юрист",
        },
        ru: {
            id: "tsapushel",
            image: Tsapushel,
            name: "Лисковская Ирина",
            role: "юрист",
        },
        en: {
            id: "tsapushel",
            image: Tsapushel,
            name: "Iryna Liskovska",
            role: "Lawyer",
        }
    },
    {
        ua: {
            id: "sherbin",
            image: Sherbin,
            name: "Щербін Андрій",
            role: "інженер з технічної інвентаризації",
        },
        ru: {
            id: "sherbin",
            image: Sherbin,
            name: "Щербин Андрей",
            role: "инженер по технической инвентаризации",
        },
        en: {
            id: "sherbin",
            image: Sherbin,
            name: "Andriy Shcherbin",
            role: "Technical Inventory Engineer",
        }
    }
];

export const headerLinksText = {
    ua: {
        main: 'Головна',
        aboutus: 'Про нас',
        contacts: 'Контакти',
    },
    ru: {
        main: 'Главная',
        aboutus: 'О нас',
        contacts: 'Контакты',
    },
    en: {
        main: 'Home',
        aboutus: 'About Us',
        contacts: 'Contacts',
    },
    default: {
        main: 'Oops data is missing',
        aboutus: 'About us data is missing',
        contacts: 'Contacts is missing',
    },
}

export const navigationMenuData = [
    {
        id: "propertyServices",
        href: "/propertyservice",
        text: {
            ua: "у сфері нерухомості",
            ru: "в сфере недвижимости",
            en: "In the field of real estate"
        }
    },
    {
        id: "advocateServices",
        href: "/advocateservice",
        text: {
            ua: "послуги Адвоката, супровід",
            ru: "услуги Адвоката, сопровождение",
            en: "Advocate services, support"
        }
    }
];

export const propertyServiceData = [
    {
        title: "Виготовлення технічного паспорту або звіту",
        services: [
            "Право власності на квартиру, будинок, приміщення (договір купівлі-продажу, свідоцтва, інвестиційний договір тощо)",
            "Паспорт або код власника",
        ],
    },
    {
        title: "Об'єднання або поділ об'єкту нерухомості",
        services: [
            "Право власності на квартиру, будинок, приміщення (договір купівлі-продажу, свідоцтва, інвестиційний договір тощо)",
            "Технічний паспорт на об'єкт",
            "Паспорт або код власника",
        ],
    },
    {
        title: "Реєстрація права власності на об'єкт",
        services: [
            "Право власності на квартиру, будинок, приміщення (договір купівлі-продажу, свідоцтва, інвестиційний договір тощо)",
            "Технічний паспорт на об'єкт",
            "Паспорт або код власника",
        ],
    },
];

export const advocateServiceData = [{
    titel: "послуги адвоката",
    services: ["право власності на квартиру/будинок/приміщення (договір купівлі-продажу, свідоцтва, інвестиційний договір, тощо)", "паспорт/код власника"],
},
    {
        titel: "юридичний супровід бізнесу",
        services: ["право власності на квартиру/будинок/приміщення (договір купівлі-продажу, свідоцтва, інвестиційний договір, тощо)", "технічний паспорт на обєкт", "паспорт/код власника"],
    },
    {
        titel: "міграційні послуги",
        services: ["право власності на квартиру/будинок/приміщення (договір купівлі-продажу, свідоцтва, інвестиційний договір, тощо)", "технічний паспорт на обєкт", "паспорт/код власника"],
    }]
