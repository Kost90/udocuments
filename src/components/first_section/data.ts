export type Lang = 'ua' | 'ru' | 'en' | 'default';

export const title:Record<Lang, string> = {
    ua:'UDocument - комплексні юридичні послуги',
    ru:'UDocument - комплексные юридические услуги',
    en:'UDocument - comprehensive legal services',
    default: "Oops data is missing"
}
export const paragraphData: Record<Lang, string> = {
    ua: "у сфері нерухомості, отримання та легалізації документів на території України, Великобританії, Туреччини та інших країн Європи. Наша команда досвідчених адвокатів надає експертні поради та підтримку, які допоможуть вам вирішити складні правові питання.",
    ru: "в сфере недвижимости, получении и легализации документов на территории Украины, Великобритании, Турции и других стран Европы. Наша команда опытных адвокатов предоставляет экспертные советы и поддержку, которые помогут решить сложные правовые вопросы.",
    en: "in the field of real estate, obtaining and legalizing documents on the territory of Ukraine, Great Britain, Turkey and other European countries. Our team of experienced lawyers provide expert advice and support to help you resolve complex legal issues.",
    default: "Oops data is missing"
}