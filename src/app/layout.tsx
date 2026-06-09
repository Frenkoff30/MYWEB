import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "./components/CursorGlow";
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
  title: "Webo Studio: Tvorba moderních webů",
  description:
    "Navrhujeme a vytváříme jednoduché, moderní weby pro živnostníky a malé firmy. Weby, které skutečně prodávají.",
  icons: {
    icon: "/images/logo/logo.png",
  },
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
        <CursorGlow />
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
