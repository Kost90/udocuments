export type Lang = 'ua' | 'ru' | 'en' | 'default';

export const titles: Record<Lang, string> = {
    ua: "Наші послуги",
    ru: "Наши услуги",
    en: "Our Services",
    default: "Oops data is missing"
};

export const paragraphs: Record<Lang, string> = {
    ua: "Ми спеціалізуємося на консультаціях з питань нерухомості, юридичній документації та загальній юридичній допомозі.",
    ru: "Мы специализируемся на консультациях по вопросам недвижимости, юридической документации и общей юридической помощи.",
    en: "We specialize in real estate consulting, legal documentation, and general legal assistance.",
    default: "Oops data is missing"
};