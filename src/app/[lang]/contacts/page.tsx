import ContactSection from '@/components/contact_section/Contact_section'
import React from 'react'
import {Metadata} from "next";
import {UDocumentData} from "@/constants/types";
import {getDictionary} from "@/app/[lang]/dictionaries";

export const metadata: Metadata = {
    alternates: {
        canonical: `${process.env.SITE_URL}/contacts`,
    },
    title: 'Контакти',
    description: 'Напишіть нам, замовте зворотній звязок, комплексний юридичний супровід бізнесу',
}

async function page({params: {lang}}: { params: { lang: string } }) {
    const t: UDocumentData = await getDictionary(lang);
    return (
        <>
            <ContactSection lang={t} className='py-32 md:py-40'/>
        </>
    )
}

export default page