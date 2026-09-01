import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./site";
import "./globals.css";
import Particles from "./components/Particles";
import SectionDots from "./components/SectionDots";
import CardSpotlightGlobal from "./components/CardSpotlight";
import BackToTop from "./components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Díky metadataBase stačí u odkazů a obrázků relativní cesta.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Webo Studio – tvorba webů pro živnostníky a malé firmy",
    // Podstránky uvádějí jen svůj název, zbytek doplní šablona.
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Jiří Švec" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "tvorba webových stránek",
    "tvorba webu na míru",
    "web pro živnostníky",
    "web pro řemeslníky",
    "webové stránky Hlinsko",
    "webové stránky Pardubice",
    "redesign webu",
    "e-shop na míru",
    "webdesign",
  ],
  category: "technology",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Webo Studio – tvorba webů pro živnostníky a malé firmy",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Webo Studio – tvorba webů pro živnostníky a malé firmy",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Ikony se neuvádějí ručně – Next je bere ze souborů favicon.ico,
  // icon.png a apple-icon.png ve složce app a sám doplní rozměry i typ.
};

export const viewport: Viewport = {
  themeColor: "#0a0c10",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-white">
        <Particles />
        <SectionDots />
        <CardSpotlightGlobal />
        <BackToTop />
        <div className="vignette" aria-hidden />
        {children}
      </body>
    </html>
  );
}
