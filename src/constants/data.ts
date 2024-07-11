import { Mail, Phone, MapPin } from "lucide-react";
import { StaticImageData } from "next/image";
import TimeManagment from "../../public/assets/TimeManagment-icon.png";
import Planet from "../../public/assets/Planet-icone.png";
import LightIcon from "../../public/assets/Light-icon.png";
import HandsIcone from "../../public/assets/hands_cone.svg";
import FolderIcon from "../../public/assets/folder-icone.svg";
import ShieldIcon from "../../public/assets/shield_icone.svg";

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
      contact: "hello@gmail.com",
    },
    {
      id: "phone",
      svgIcone: Phone,
      titel: "Телефон",
      contact: "+38(00)000 000",
    },
    {
      id: "map",
      svgIcone: MapPin,
      titel: "Офіс",
      contact: "м.Одеса, вул. Катерининська, буд. 8",
    },
  ];