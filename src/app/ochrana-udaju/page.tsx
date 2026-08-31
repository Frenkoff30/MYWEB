import type { Metadata } from "next";
import { pageMetadata } from "../site";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = pageMetadata({
  title: "Ochrana osobních údajů",
  description:
    "Informace o zpracování osobních údajů zaslaných prostřednictvím kontaktního formuláře Webo Studio.",
  path: "/ochrana-udaju",
});

export default function OchranaUdajuPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-20">
      <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Zpracování osobních údajů
      </h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-300">
        <p>
          Vážíme si vašeho soukromí a osobní údaje, které nám prostřednictvím kontaktního formuláře poskytnete,
          zpracováváme v souladu s nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR).
        </p>

        <section>
          <h2 className="text-lg font-bold text-white">Jaké údaje zpracováváme</h2>
          <p className="mt-2">
            Jméno a příjmení, telefonní číslo, e-mailovou adresu (pokud ji uvedete), typ poptávaného projektu
            a obsah vaší zprávy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white">Účel a doba zpracování</h2>
          <p className="mt-2">
            Údaje používáme výhradně za účelem vyřízení vaší poptávky a komunikace ohledně nabídky našich
            služeb. Údaje uchováváme po dobu nezbytně nutnou k vyřízení poptávky a případné následné
            komunikaci, nejdéle však po dobu 24 měsíců od posledního kontaktu.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white">Předávání třetím stranám</h2>
          <p className="mt-2">
            Vaše údaje nepředáváme třetím stranám pro marketingové účely. Pro doručení zprávy z kontaktního
            formuláře využíváme technického poskytovatele e-mailových služeb, který se zprávou nakládá pouze
            za účelem jejího doručení.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white">Vaše práva</h2>
          <p className="mt-2">
            Máte právo na přístup ke svým osobním údajům, jejich opravu či výmaz, omezení zpracování a právo
            vznést námitku proti zpracování. Pro uplatnění těchto práv nás kontaktujte na e-mailu{" "}
            <a href="mailto:info@webostudio.cz" className="font-semibold text-blue-400 hover:underline">
              info@webostudio.cz
            </a>
            .
          </p>
        </section>

        <p className="pt-4">
          <Link href="/" className="font-semibold text-blue-400 transition hover:text-blue-300 hover:underline">
            ← Zpět na úvod
          </Link>
        </p>
      </div>
      </main>
      <SiteFooter />
    </>
  );
}
