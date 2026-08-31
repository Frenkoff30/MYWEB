import type { Metadata } from "next";
import { pageMetadata } from "../site";
import Link from "next/link";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = pageMetadata({
  title: "Recenze",
  description:
    "Reference a zkušenosti klientů se spoluprací s Webo Studio.",
  path: "/recenze",
});

export default function RecenzePage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section id="reference" className="relative overflow-hidden">
          <div className="relative z-[1] mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">
                  Reference
                </span>
                <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Recenze od klientů budou brzy tady
                </h1>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <TiltCard className="mx-auto mt-10 max-w-xl">
                <div
                  data-spotlight
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center"
                >
                  <span className="text-4xl">💬</span>
                  <p className="mt-4 text-neutral-50">
                    Aktuálně sbíráme reference od svých klientů, takže zde již brzy uvidíte jejich
                    reálné zkušenosti.
                  </p>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/portfolio"
                  className="rounded-full border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-white/10"
                >
                  Zatím mrkněte na naši práci →
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
