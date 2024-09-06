// eslint-disable-next-line @next/next/no-document-import-in-page
import {Html, Head, Main, NextScript} from 'next/document';

export default function Document () {
    return (
        <Html>
            <Head>
                <link rel="alternate" href="https://www.udocument.net/?lang=en" hrefLang="en"/>
                <link rel="alternate" href="https://www.udocument.net/?lang=ru" hrefLang="ru"/>
                <link rel="alternate" href="https://www.udocument.net/?lang=ua" hrefLang="uk-UA"/>
                <link rel="alternate" href="https://www.udocument.net/" hrefLang="x-default"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}