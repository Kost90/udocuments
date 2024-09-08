import type {Metadata} from "next";
import clsx from "clsx";
import {roboto} from "@/components/ui/fonts";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Modal from "@/components/Modal/Modal";
import React, {Suspense} from "react";
import Loader from "../components/Loader/Loader";

const author = {
    name: "UDocument",
    url: "https://www.udocument.net/",
};

export const metadata: Metadata = {
    metadataBase: new URL(process.env.SITE_URL as string),
    alternates: {
        canonical: `${process.env.SITE_URL}`,
        // languages: {
        //     'en-US': '/en-US',
        //     'de-DE': '/de-DE',
        // },
    },
    title: {
        default: 'UDocument - юридичні послуги, оформлення нерухомості',
        template: '%s | UDocument - юридичні послуги, оформлення нерухомості',
    },
    description: "Юридичні послуги, оформлення нерухомості, адвокатська допомога, виготовлення технічного паспорту, реєстрація права вланості",
    keywords:
        "юридичні послуги, оформлення нерухомості, адвокатська допомога, UDocument",
    authors: [author],
    icons: {
        icon: "/public/FullLogo_Transparent.png",
    }, openGraph: {
        title: "UDocument - юридичні послуги, оформлення нерухомості",
        description: "Юридичні послуги, оформлення нерухомості, адвокатська допомога, виготовлення технічного паспорту, реєстрація права вланості",
        type: 'website',
        locale: 'uk-UA',
        url: process.env.SITE_URL,
        siteName: 'UDocument',
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk-UA">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta
                name="keywords"
                content="юридические услуги, консультация, адвокатська допомога, оформлення нерухомості одеса"
            />
            <meta name="author" content="UDocument"/>
            <meta property="og:title" content="UDocument - юридичні послуги, оформлення нерухомості"/>
            <meta property="og:description" content="Юридичні послуги"/>
            <meta property="og:image" content="/public/Print_Transparent.svg"/>
            <meta property="og:url" content="https://www.udocument.net/"/>
            <meta name="twitter:card" content="summary_large_image"/>
        </head>
        <body
            className={clsx(`${roboto.className} min-h-screen w-full relative`)}
        >
        <Header/>

        <main className="flex min-h-screen flex-col w-full top-0">
            <Suspense fallback={<Loader/>}>
                <Modal/>
            </Suspense>

            {children}
        </main>

        <Footer/>
        </body>
        </html>
    );
}
