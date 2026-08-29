import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import PortfolioCarousel from "../components/PortfolioCarousel";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Portfolio | Webo Studio",
  description:
    "Ukázky hotových webů od Webo Studio. Podívejte se, jak naše weby vypadají v praxi.",
};

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section id="portfolio">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">
                  Naše práce
                </span>
                <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Pár ukázek, jak weby od <span className="text-gradient glitch">Webo</span> vypadají v praxi
                </h1>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10">
                <PortfolioCarousel />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#kontakt"
                  className="btn-glow rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-400"
                >
                  Chci takový web
                </Link>
                <Link
                  href="/recenze"
                  className="rounded-full border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-white/10"
                >
                  Recenze klientů →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
