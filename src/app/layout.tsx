import type { Metadata } from "next";
import clsx from "clsx";
import { roboto } from "../components/ui/fonts";
import "./globals.css";
import Header from "@/components/header/Header";

const author = {
  name: "UDocument",
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
    <html lang="en">
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

        {children}
      </body>
    </html>
  );
}
