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
        description:
            "Сучасний підхід до надання високоякісних послуг у галузі оформлення нерухомості.",
    },
    {
        id: "secondtEl",
        svgIcone: ShieldIcon,
        description: "Захист прав та інтересів наших клієнтів – наш пріоритет.",
    },
    {
        id: "firstEl",
        svgIcone: HandsIcone,
        description:
            "Дотримання термінів надання послуг відповідно до укладеного договору.",
    },
];

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
        id: "belozor",
        image: Bilozor,
        name: "Олеся Білозор",
        role: "керуючий партнер, адвокат",
    },
    {
        id: "dontsov",
        image: Dontsov,
        name: "Костянтин Донцов",
        role: "партнер, адвокат",
    },
    {
        id: "loshakova",
        image: Loshakova,
        name: "Лошакова Юлія",
        role: "адвокат",
    },
    {
        id: "barda",
        image: Barda,
        name: "Барда Катерина",
        role: "адвокат",
    },
    {
        id: "tsapushel",
        image: Tsapushel,
        name: "Тсапушел Ірина",
        role: "юрист",
    },
    {
        id: "sherbin",
        image: Sherbin,
        name: "Щербін Андрій",
        role: "інженер з технічної інвентаризації",
    },
];

export const navigationMenuData = [{
    id: "propertyServices",
    href: "/propertyservice",
    text: "у сфері нерухомості",
},
    {
        id: "advocateServices",
        href: "/advocateservice",
        text: "послуги Адвоката, супровід",
    }];

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
