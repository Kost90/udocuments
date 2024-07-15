import { Mail, Phone, MapPin } from "lucide-react";
import { StaticImageData } from "next/image";
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
  description: string;
}

export const cardsData: ICardsData[] = [
  {
    id: "fisrt",
    image: TimeManagment,
    description: "Працюємо з 2016 року",
  },
  {
    id: "second",
    image: Planet,
    description: "Представництва у Великій Британії, Туреччині, Україні",
  },
  {
    id: "third",
    image: LightIcon,
    description: "300+ задоволених клієнтів",
  },
];

export const cardData = [
  {
    id: "firstCard",
    titel: "Юридичний супровід бізнесу",
    description: "Ми надаємо повний цикл юридичного супроводу бізнесу",
  },
  {
    id: "secondCard",
    titel: "Послуги у сфері нерухомості",
    description:
      "Наша команда досвідчених юристів та інженерів з оформлення нерухомості",
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
  id:"propertyServices",
  href:"/propertyservice",
  text:"у сфері нерухомості",
},
{
  id:"advocateServices",
  href:"/advocateservice",
  text:"послуги Адвоката, супровід",
}];

export const propertyServiceData = [{
  titel:"Виготовлення технічного паспорту/звіту",
  services:["право власності на квартиру/будинок/приміщення (договір купівлі-продажу, свідоцтва, інвестиційний договір, тощо)","паспорт/код власника"],
},
{
  titel:"Обєднання/поділ обєкту нерухомості",
  services:["право власності на квартиру/будинок/приміщення (договір купівлі-продажу, свідоцтва, інвестиційний договір, тощо)","технічний паспорт на обєкт","паспорт/код власника"],
},
{
  titel:"Реєстрація права власності на обєкт",
  services:["право власності на квартиру/будинок/приміщення (договір купівлі-продажу, свідоцтва, інвестиційний договір, тощо)","технічний паспорт на обєкт","паспорт/код власника"],
}]
