import {Mail, MapPin, Phone, FileQuestion} from "lucide-react";
import {Lang} from '@/constants/data';

export const contactData = {
    ua: [
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
    ],
    ru: [
        {
            id: "mail",
            svgIcone: Mail,
            titel: "Электронная почта",
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
            titel: "Офис",
            contact: "г.Одесса, ул. Екатерининская, д. 8",
        },
    ],
    en: [
        {
            id: "mail",
            svgIcone: Mail,
            titel: "Email",
            contact: "leparker@ukr.net",
        },
        {
            id: "phone",
            svgIcone: Phone,
            titel: "Phone",
            contact: "+380(99)773 10 93",
        },
        {
            id: "map",
            svgIcone: MapPin,
            titel: "Office",
            contact: "8 Katerynynska St, Odesa, Ukraine",
        },
    ],
    default: [{
        id: 'default',
        svgIcone: FileQuestion,
        titel: 'Oops data is missing',
        contact: 'Oops data is missing',
    },
    ],
};

export const paragraph:Record<Lang, string> = {
    ua: "Для консультації звертайтесь за такими контактами:",
    ru: "Для консультации обращайтесь по следующим контактам:",
    en: "For consultation, please contact us at:",
    default:'Oops data is missing',
}

export const title:Record<Lang, string> = {
    ua: "Наші контакти",
    ru: "Наши контакты:",
    en: "Our contacts:",
    default:'Oops data is missing',
}