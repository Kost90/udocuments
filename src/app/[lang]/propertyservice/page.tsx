import HeadingSection from "@/components/headingsection/HeadingSection";
import MainSection from "./_components/MainSection";
import {Metadata} from "next";
import {UDocumentData} from "@/constants/types";
import {getDictionary} from "@/app/[lang]/dictionaries";

export const metadata: Metadata = {
    alternates: {
        canonical: `${process.env.SITE_URL}/propertyservice`,
        languages: {
            'en': '/en',
            'uk': '/ua',
            'ru': '/ru'
        },
    },
    title: 'Комплексні послуги у сфері нерухомості',
    description: 'Професійні послуги з оформлення нерухомості в Одесі. Юридична перевірка, оформлення договорів купівлі-продажу. Дізнайтесь більше!',
}

async function page({params: {lang}}: { params: { lang: string } }) {
    const t: UDocumentData = await getDictionary(lang);
    return (
        <>
            <HeadingSection
                titelText={t.propertyServicesPage.title}
                paragraphText={t.propertyServicesPage.paragraph}
                className="border-b border-b-slate-400 md:pb-10"
            />
            <MainSection lang={t}/>
        </>
    );
}

export default page;
