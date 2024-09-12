import HeadingSection from "@/components/headingsection/HeadingSection";
import MainSection from "./_components/MainSection";
import {Metadata} from "next";
import {getDictionary} from "@/app/[lang]/dictionaries";
import {UDocumentData} from "@/constants/types";

export const metadata: Metadata = {
    alternates: {
        canonical: `${process.env.SITE_URL}/advocateservice`,
    },
    title: 'Адвокатські послуги',
    description: 'Послуги адвоката, супровід справ у суді, комплексний юридичний супровід бізнесу',
}

async function page({params: {lang}}: { params: { lang: string } }) {
    const t: UDocumentData = await getDictionary(lang);
    return (
        <>
            <HeadingSection
                titelText={t.advocateServicesPage.title}
                paragraphText={t.advocateServicesPage.paragraph}
                className="border-b border-b-slate-400 md:pb-10"
            />
            <MainSection lang={t}/>
        </>
    );
}

export default page;
