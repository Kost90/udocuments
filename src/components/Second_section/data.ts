export type Lang = 'ua' | 'ru' | 'en' | 'default';

export const titles: Record<Lang, string> = {
    ua: "Наша команда",
    ru: "Наша команда",
    en: "Our Team",
    default: "Oops data is missing"
};

export const paragraphs: Record<Lang, string> = {
    ua: "Познайомтесь з нашою командою професіоналів, яка спеціалізується на наданні високоякісних юридичних послуг у сфері нерухомості та інших юридичних областях.",
    ru: "Познакомьтесь с нашей командой профессионалов, специализирующихся на предоставлении высококачественных юридических услуг в области недвижимости и других юридических областях.",
    en: "Meet our team of professionals who specialize in providing high-quality legal services in the field of real estate and other legal areas.",
    default: "Oops data is missing"
};