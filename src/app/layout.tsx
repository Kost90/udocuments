import type { Metadata } from "next";
import clsx from "clsx";
import { roboto } from "../components/ui/fonts";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Modal from "@/components/Modal/Modal";

const author = {
  name: "UDocument",
  // TODO: Поменять на мой url
  url: "https://yourwebsite.com",
};

export const metadata: Metadata = {
  title: "UDocument",
  description: "Юридические услуги",
  keywords:
    "юридические услуги, оформлення нерухомості, адвокатська допомога, UDocument",
  authors: [author],
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
        <meta property="og:image" content="/path/to/social-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        className={clsx(`${roboto.className} min-h-screen w-full relative`)}
      >
        <Header />

        <main className="flex min-h-screen flex-col w-full top-0">
          <Modal />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
