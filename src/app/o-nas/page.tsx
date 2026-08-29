import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "O nás | Webo Studio",
  description:
    "Kdo jsme? Navrhujeme a vytváříme jednoduché, moderní weby pro živnostníky, řemeslníky a malé provozovny.",
};

export default function ONasPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section id="o-mne" className="relative overflow-hidden">
          <div className="relative z-[1] mx-auto max-w-6xl px-6 py-20 text-left">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">
                  Kdo jsme ?
                </span>
              </div>
            </Reveal>

            <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:items-start">
              <Reveal>
                <div className="text-center lg:sticky lg:top-32">
                  <h1 className="mt-6 text-5xl font-bold text-white sm:text-6xl">
                    Jsme <span className="text-gradient glitch">Webo</span>,
                  </h1>
                  <Image
                    src="/images/logo/logo.png"
                    alt="Webo logo"
                    width={320}
                    height={96}
                    className="float-slow mx-auto mt-10 w-48 sm:w-64"
                  />
                </div>
              </Reveal>

              <div className="space-y-6 border-l border-white/10 pl-6 sm:pl-10">
                <Reveal>
                  <p className="text-xl leading-relaxed text-neutral-50 text-balance sm:text-2xl">
                    navrhujeme a vytváříme weby pro{" "}
                    <span className="text-white font-semibold">živnostníky, řemeslníky a malé provozovny</span>.{" "}
                    Náplní naší práce je pomáhat lidem, kteří ještě žádný web nemají, nebo jim ten současný{" "}
                    <span className="text-red-400 font-semibold">již neslouží tak, jak by měl</span>.
                  </p>
                </Reveal>
                <Reveal delay={100}>
                  <p className="text-xl leading-relaxed text-neutral-50 text-balance sm:text-2xl">
                    Náš cíl je vždy stejný. Udělat{" "}
                    <span className="text-blue-400 font-semibold">jednoduchý, přehledný a moderní web</span>,{" "}
                    který dokáže zaujmout a přivést vám nové zákazníky.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                      href="/#kontakt"
                      className="btn-glow rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-400"
                    >
                      Domluvit konzultaci zdarma
                    </Link>
                    <Link
                      href="/portfolio"
                      className="rounded-full border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-white/10"
                    >
                      Naše práce →
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
