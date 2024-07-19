import type { Metadata } from "next";
import clsx from "clsx";
import { roboto } from "../components/ui/fonts";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Modal from "@/components/Modal/Modal";
import { Suspense } from "react";
import Loader from "../components/Loader/Loader";

const author = {
  name: "UDocument",
  url: "https://www.udocument.net/",
};

export const metadata: Metadata = {
  title: "UDocument",
  description: "Юридические услуги",
  keywords:
    "юридические услуги, оформлення нерухомості, адвокатська допомога, UDocument",
  authors: [author],
  icons:{
    icon:"/public/FullLogo_Transparent.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="юридические услуги, консультация, адвокатська допомога, UDocument"
        />
        <meta name="author" content="UDocument" />
        <meta property="og:title" content="UDocument" />
        <meta property="og:description" content="Юридические услуги" />
        <meta property="og:image" content="/public/Print_Transparent.svg" />
        <meta property="og:url" content="https://www.udocument.net/" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        className={clsx(`${roboto.className} min-h-screen w-full relative`)}
      >
        <Header />

        <main className="flex min-h-screen flex-col w-full top-0">
          <Suspense fallback={<Loader />}>
            <Modal />
          </Suspense>

          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
