import type { Metadata } from "next";
import { pageMetadata } from "../site";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = pageMetadata({
  title: "Obchodní podmínky",
  description:
    "Obchodní podmínky pro poskytování služeb tvorby a správy webových stránek Webo Studio.",
  path: "/obchodni-podminky",
});

export default function ObchodniPodminkyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-20">
      <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Obchodní podmínky
      </h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-300">
        <section>
          <h2 className="text-lg font-bold text-white">1. Základní údaje</h2>
          <p className="mt-2">
            Poskytovatelem služeb je Jiří Švec, IČO 29639107, se sídlem Rokycanova 908, 539 01 Hlinsko
            (dále jen „poskytovatel“). Poskytovatel podniká na základě živnostenského oprávnění.
            Kontaktní e-mail:{" "}
            <a href="mailto:info@webostudio.cz" className="font-semibold text-blue-400 hover:underline">
              info@webostudio.cz
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white">2. Předmět služeb</h2>
          <p className="mt-2">
            Poskytovatel zajišťuje tvorbu, úpravy a správu webových stránek, tvorbu firemních e-mailů
            a související služby v oblasti online prezentace. Konkrétní rozsah, obsah a cena služeb jsou
            vždy sjednány individuálně na základě poptávky objednatele.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white">3. Objednávka a uzavření smlouvy</h2>
          <p className="mt-2">
            Poptávku lze zaslat prostřednictvím kontaktního formuláře, e-mailem nebo telefonicky.
            Na základě poptávky připraví poskytovatel nabídku s popisem rozsahu prací a cenou. Smlouva
            je uzavřena okamžikem, kdy objednatel nabídku odsouhlasí (i elektronicky, například e-mailem).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white">4. Cena a platební podmínky</h2>
          <p className="mt-2">
            Cena služeb je stanovena dle odsouhlasené nabídky. U jednorázových zakázek může poskytovatel
            požadovat zálohu. Pravidelné služby (například správa webu či firemní e-mail) jsou účtovány
            v dohodnutých intervalech. Platba probíhá na základě vystavené faktury bankovním převodem,
            není-li dohodnuto jinak. Poskytovatel není plátcem DPH; uvedené ceny jsou konečné.
          </p>
          <p className="mt-2">
            U pravidelných služeb <strong className="text-white">neprobíhá automatické strhávání plateb</strong>{" "}
            z platební karty – každé období je vyúčtováno samostatnou fakturou. Objednatel může pravidelnou
            službu kdykoli ukončit oznámením e-mailem, a to ke konci již uhrazeného období; za neodebrané
            období se platba nevrací pouze tehdy, byla-li služba v jeho průběhu poskytována.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white">5. Součinnost objednatele</h2>
          <p className="mt-2">
            Objednatel se zavazuje poskytnout poskytovateli včas všechny podklady nutné pro realizaci
            zakázky (texty, obrázky, loga, přístupy apod.) a odpovídá za to, že je oprávněn tyto podklady
            použít. Za obsah dodaný objednatelem nenese poskytovatel odpovědnost.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white">6. Předání a autorská práva</h2>
          <p className="mt-2">
            Po dokončení a úplném uhrazení ceny získává objednatel právo výsledné dílo užívat pro účel,
            ke kterému bylo vytvořeno. Poskytovatel je oprávněn uvést realizovaný web ve svém portfoliu
            a referencích, pokud si objednatel výslovně nevyžádá opak.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white">7. Reklamace</h2>
          <p className="mt-2">
            Případné vady díla je objednatel povinen uplatnit bez zbytečného odkladu, nejlépe e-mailem
            na adresu uvedenou výše. Poskytovatel se zavazuje oprávněné vady odstranit v přiměřené lhůtě.
            Za vadu se nepovažuje požadavek na změnu nad rámec původně odsouhlaseného zadání.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white">8. Odstoupení od smlouvy</h2>
          <p className="mt-2">
            Obě strany mohou od smlouvy odstoupit z důvodů stanovených zákonem. Odstoupí-li objednatel
            v průběhu realizace, náleží poskytovateli úhrada za dosud provedené práce.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white">9. Ochrana osobních údajů</h2>
          <p className="mt-2">
            Zpracování osobních údajů se řídí samostatným dokumentem{" "}
            <Link href="/ochrana-udaju" className="font-semibold text-blue-400 hover:underline">
              Ochrana osobních údajů
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white">10. Závěrečná ustanovení</h2>
          <p className="mt-2">
            Vztahy neupravené těmito podmínkami se řídí právním řádem České republiky, zejména zákonem
            č. 89/2012 Sb., občanský zákoník. Poskytovatel si vyhrazuje právo tyto podmínky měnit;
            pro již uzavřené zakázky platí znění účinné v době uzavření smlouvy.
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
