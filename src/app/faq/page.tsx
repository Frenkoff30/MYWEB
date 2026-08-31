import type { Metadata } from "next";
import { pageMetadata } from "../site";
import Link from "next/link";
import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = pageMetadata({
  title: "Časté otázky",
  description:
    "Odpovědi na nejčastější otázky ohledně tvorby webů – ceny, termíny, mobilní verze, doména a hosting.",
  path: "/faq",
});

const faqs = [
  {
    q: "Jak dlouho trvá vytvoření webu?",
    a: "U jednoduché prezentace obvykle 1–2 týdny od schválení návrhu. U rozsáhlejších projektů termín domluvíme individuálně.",
  },
  {
    q: "Kolik bude web stát?",
    a: "Cena se vždy odvíjí od rozsahu projektu. Orientační ceny najdete v sekci Služby. Po krátkém rozhovoru vám rádi připravíme konkrétní nabídku na míru, zdarma a nezávazně.",
  },
  {
    q: "Bude web fungovat i na mobilu?",
    a: "Ano, každý web stavíme tak, aby skvěle vypadal a fungoval na mobilu, tabletu i počítači. Dnes přichází většina návštěvníků z telefonu a s tím počítáme.",
  },
  {
    q: "Pomůžete mi i s texty a obsahem?",
    a: "Rádi poradíme se strukturou a zněním textů tak, aby web jasně sděloval to, co potřebujete. Na vyžádání připravíme texty kompletně za vás.",
  },
  {
    q: "Zajistíte mi i doménu a hosting?",
    a: "Ano, postaráme se o registraci domény i spuštění webu online. Vše zařídíme za vás.",
  },
  {
    q: "Co když budu chtít web později upravit?",
    a: "Žádný problém. Nabízíme průběžnou údržbu a drobné úpravy.",
  },
  {
    q: "Co když se na webu něco pokazí?",
    a: "Ozvěte se nám a problém vyřešíme co nejdříve. Protože web známe od základu, oprava je obvykle rychlá.",
  },
];

export default function FaqPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section
          id="faq"
          className="relative overflow-hidden bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02)_64px,rgba(255,255,255,0.02)_calc(100%-64px),transparent)]"
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: { "@type": "Answer", text: item.a },
                })),
              }),
            }}
          />
          <div className="relative z-[1] mx-auto max-w-3xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">
                  Často kladené otázky
                </span>
                <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Možná tu odpověď už je</h1>
              </div>
            </Reveal>

            <div className="mt-10 space-y-4">
              {faqs.map((item) => (
                <Reveal key={item.q}>
                  <details className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 transition duration-300 open:border-blue-400/30 open:bg-white/[0.05] hover:border-white/20">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white transition group-hover:text-blue-300">
                      {item.q}
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm text-neutral-50 transition duration-300 group-open:rotate-45 group-open:border-blue-400/50 group-open:bg-blue-500/10 group-open:text-blue-400">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-white">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>

            <Reveal delay={100}>
              <p className="mt-10 text-center text-sm text-white">
                Nenašli jste odpověď, kterou jste hledali?{" "}
                <Link
                  href="/#kontakt"
                  className="font-semibold text-blue-400 transition hover:text-blue-300 hover:underline"
                >
                  Napište nám
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
