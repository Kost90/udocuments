import HeadingSection from "@/components/headingsection/HeadingSection";
import MainSection from "./_components/MainSection";
import {Metadata} from "next";
import {getDictionary} from "@/app/[lang]/dictionaries";
import {UDocumentData} from "@/constants/types";

export const metadata: Metadata = {
    alternates: {
        canonical: `${process.env.SITE_URL}/advocateservice`,
        languages: {
            'en': '/en',
            'uk': '/ua',
            'ru': '/ru'
        },
    },
    title: 'Комплексні адвокатські послуги та юридичний супровід бізнесу.',
    description: 'Професійні послуги юридичні послуги з супроводу бізнесу в Одесі. Юридична перевірка, податкова консультація, оформлення договорів купівлі-продажу. Дізнайтесь більше!',
}

async function page({params: {lang}}: { params: { lang: string } }) {
    const t: UDocumentData = await getDictionary(lang);
    return (
        <>
            {/* <HeadingSection
                titelText={t.advocateServicesPage.title}
                paragraphText={t.advocateServicesPage.paragraph}
                className="border-b border-b-slate-400 md:pb-10"
            /> */}
            {/* <MainSection lang={t}/> */}
        </>
    );
}

export default page;
