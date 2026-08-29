import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import TypingText from "./components/TypingText";
import TiltCard from "./components/TiltCard";
import ContactForm from "./components/ContactForm";
import MagneticButton from "./components/MagneticButton";
import BrowserMockupContent from "./components/BrowserMockupContent";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const stats = [
  { value: "100 %", label: "spokojenost klientů" },
  { value: "< 24 h", label: "reakce na Vaši zprávu" },
  { value: "1–2 týdny", label: "od nápadu k webu na ostro" },
];

const process = [
  {
    step: "01",
    title: "Nezávazná poptávka",
    description:
      "Napíšete nám  nebo zavoláte a stručně vysvětlíte, co potřebujete a co od webu očekáváte.",
  },
  {
    step: "02",
    title: "Návrh řešení zdarma",
    description:
      "Na základě toho vám připravíme nezávazný návrh řešení, designu a struktury webu, a to ZDARMA.",
  },
  {
    step: "03",
    title: "Doladíme detaily a domluvíme cenu",
    description:
      "Návrh si společně projdeme a zapracujeme do něj všechny vaše požadavky. Teprve potom, až budete spokojení, se domluvíme na konečné ceně.",
  },
  {
    step: "04",
    title: "Tvorba webu",
    description:
      "Pustíme se do vývoje a designu. Texty i funkčnost dotáhneme do finální podoby dle  naší domluvy.",
  },
  {
    step: "05",
    title: "Spuštění a podpora",
    description:
      "Web spustíme a postaráme se, aby od prvního dne fungoval tak, jak má. I po spuštění vám zůstáváme k dispozici pro případné úpravy.",
  },
];

const services: {
  title: string;
  price: string;
  description: string;
  featured?: boolean;
}[] = [
  {
    title: "E-shop na míru",
    price: "od 14 999 Kč",
    description:
      "Vlastní internetový obchod s košíkem, platbami a správou produktů. Připravený prodávat.",
  },
  {
    title: "Nový web na míru",
    price: "od 8 499 Kč",
    description:
      "Kompletní návrh a vytvoření webu od první skici až po jeho spuštění.",
    featured: true,
  },
  {
    title: "Redesign starého webu",
    price: "od 7 499 Kč",
    description:
      "Modernizace vzhledu a funkčnosti webu, který už nesplňuje dnešní standardy.",
  },
  {
    title: "Údržba a úpravy",
    price: "od 490 Kč / měsíc",
    description:
      "Pravidelné aktualizace obsahu, drobné úpravy a technická podpora.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section id="hero" className="relative overflow-hidden px-6 pb-24 pt-12 sm:pt-16">
          <div className="relative z-[1] mx-auto grid max-w-6xl gap-16 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
            <div className="text-center sm:text-left">
              <Reveal delay={100}>
                <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Weby, co{" "}
                  <span className="text-gradient glitch">prodávají</span>.{" "}
                  <br className="hidden sm:block" />
                  Ne jen visí na internetu.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mx-auto mt-8 max-w-xl text-xl leading-relaxed text-neutral-50 sm:mx-0">
                  Pomáháme živnostníkům a malým firmám vytvořit nebo upravit jejich web tak, aby{" "}
                  <span className="text-white font-semibold">skutečně prodával</span>.{" "}
                  Srozumitelný obsah,{" "}
                  <span className="text-blue-400 font-semibold">rychlé načítání</span>,{" "}
                  moderní vzhled a tlačítko, na které lidé{" "}
                  <span className="text-white font-semibold">opravdu kliknou</span>.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                  <MagneticButton>
                    <a
                      href="#kontakt"
                      className="btn-glow rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-400"
                    >
                      Domluvit konzultaci zdarma
                    </a>
                  </MagneticButton>
                  <a
                    href="#proces"
                    className="rounded-full border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-blue-500/10"
                  >
                    Jak spolupráce probíhá
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={250}>
              <TiltCard className="relative mx-auto w-full max-w-md float-slow">
                <div className="group relative z-[1] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-blue-500/10">
                  <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-400/70" />
                    <span className="ml-3 flex h-5 flex-1 max-w-[60%] items-center rounded-full bg-white/5 px-3">
                      <TypingText text="vasefirma.cz" startDelay={1200} />
                    </span>
                  </div>
                  <div className="p-5">
                    <BrowserMockupContent />
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-white/[0.03] px-5 py-3">
                    <span className="text-xs font-semibold text-blue-400">od 8 499 Kč</span>
                    <a href="#sluzby" className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-neutral-950 transition hover:-translate-y-0.5 group-hover:bg-blue-500 group-hover:text-white">Mám zájem →</a>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </section>

        {/* Problém */}
        <section id="problem" className="relative overflow-hidden bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02)_64px,rgba(255,255,255,0.02)_calc(100%-64px),transparent)]">
          <div className="relative z-[1] mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Poznáváte se?</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Bez dobrého webu jste pro spoustu lidí prakticky <span className="text-red-400">neviditelní</span>
                </h2>
                <p className="mt-4 text-lg text-white">
                  Bez kvalitní prezentace na internetu vám dnes lidé jednoduše{" "}
                  <span className="text-white font-semibold">nevěří, zda opravdu existujete</span>, a tak raději zamíří ke{" "}
                  <span className="text-red-400 font-semibold">konkurenci, která web má</span>.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Žádný web",
                  text: "Lidé vás nedohledají na internetu a vaše služby jednoduše minou.",
                },
                {
                  title: "Zastaralý vzhled",
                  text: "Starý nebo nepřehledný web spíše odrazuje, než aby budil důvěru a přiváděl zákazníky.",
                },
                {
                  title: "Nefunguje na mobilu",
                  text: "Většina lidí dnes prochází weby z telefonu. Pokud tam nevypadá dobře, ztrácíte je hned na startu.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <div data-spotlight className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-red-500/[0.06] hover:shadow-lg hover:shadow-red-500/10">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 text-sm font-bold text-red-400 transition duration-300 group-hover:bg-red-500/20 group-hover:text-red-300">
                      !
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-red-400 transition duration-300 group-hover:text-red-300">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-neutral-50">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <p className="mx-auto mt-10 max-w-xl text-center text-lg font-medium text-white">
                Pojďme to změnit. Ve Webo stavíme weby, které vypadají skvěle a začnou pro vás reálně pracovat.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Jak spolupráce probíhá */}
        <section id="proces" className="relative overflow-hidden bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02)_64px,rgba(255,255,255,0.02)_calc(100%-64px),transparent)]">
          <div className="relative z-[1] mx-auto max-w-7xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Postup spolupráce</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Spolupráce s námi probíhá v <span className="text-gradient">jasných krocích</span>
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-white">
                  Pět jednoduchých kroků od prvního nápadu k webu, který vám bude{" "}
                  <span className="text-white font-medium">sloužit roky</span>.
                </p>
              </div>
            </Reveal>
            <div className="relative mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
              <span className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block" />
              {process.map((item, i) => (
                <Reveal key={item.step} delay={i * 120}>
                  <div className="group relative">
                    <div className="relative z-[1] flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-bold text-neutral-950 ring-4 ring-neutral-950 transition duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      {item.step}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-gradient">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Služby a ceník */}
        <section id="sluzby" className="bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02)_64px,rgba(255,255,255,0.02)_calc(100%-64px),transparent)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Co nabízíme</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Vyberte si, co přesně potřebujete</h2>
                <p className="mt-3 text-white">
                  Níže uvedené ceny jsou pouze orientační, finální nabídka se vždy odvíjí od rozsahu a
                  potřeb konkrétního projektu.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={i * 100}>
                  <a
                    href="#kontakt"
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 text-white transition duration-300 hover:-translate-y-1.5 ${
                      service.featured
                        ? "border border-blue-400/30 bg-gradient-to-b from-blue-500/[0.08] to-white/[0.02] shadow-xl shadow-blue-500/10 ring-1 ring-blue-400/20"
                        : "border border-white/10 bg-white/[0.03] hover:border-blue-400/30 hover:bg-white/[0.05]"
                    }`}
                  >
                    {service.featured && (
                      <span className="relative z-[1] mb-3 inline-block w-fit rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                        Nejoblíbenější
                      </span>
                    )}
                    <h3 className="relative z-[1] text-lg font-semibold text-white">{service.title}</h3>
                    <p className="relative z-[1] mt-1 text-xl font-bold text-blue-400">{service.price}</p>
                    <p className="relative z-[1] mt-3 flex-1 text-base text-neutral-50">{service.description}</p>
                    <span className="relative z-[1] mt-4 block h-px w-full bg-white/10" />
                    <span className={`relative z-[1] mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition group-hover:gap-2.5 ${service.featured ? "text-red-400" : "text-blue-400"}`}>
                      Mám zájem <span>→</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Doplňkové služby */}
            <Reveal delay={100}>
              <div className="mt-10 space-y-10">
                <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-200">Doplňkové služby</p>

                <div>
                  <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-widest text-neutral-400">Web a provoz</p>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/></svg>
                        ), title: "SEO optimalizace", desc: "Základní nastavení aby vás vyhledávač našel, meta tagy, rychlost, struktura.", price: "od 2 000 Kč" },
                      { icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        ), title: "Registrace domény", desc: "Vyřídíme za vás, ať máte vše na jednom místě.", price: "~300 Kč / rok" },
                      { icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="3" width="20" height="6" rx="1"/><rect x="2" y="15" width="20" height="6" rx="1"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="6" cy="18" r="1" fill="currentColor"/></svg>
                        ), title: "Webhosting a provoz", desc: "Spolehlivý hosting, SSL a dohled nad tím, že web běží tak jak má.", price: "od 150 Kč / měsíc" },
                      { icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        ), title: "Firemní e-mail", desc: "Vytvoříme vám firemní mail [info@vasefirma.cz] místo gmailové adresy. Působí to profesionálněji.", price: "od 50 Kč / měsíc" },
                    ].map((item) => (
                      <div key={item.title} className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">{item.icon}</span>
                        <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-lg font-bold text-blue-400">{item.price}</p>
                        <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-50">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-widest text-neutral-400">Obsah a marketing</p>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path strokeLinecap="round" strokeLinejoin="round" d="M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        ), title: "Copywriting textů", desc: "Napíšeme nebo upravíme texty na webu tak, aby lépe prodávaly.", price: "od 1 500 Kč" },
                      { icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20c1.5 0 2-1 2-2s-.5-1.5-1-2 .5-2 2-2h2a4 4 0 004-4 8 8 0 00-9-10z"/><circle cx="7.5" cy="10.5" r="1" fill="currentColor"/><circle cx="11" cy="7" r="1" fill="currentColor"/><circle cx="16" cy="10.5" r="1" fill="currentColor"/></svg>
                        ), title: "Logo a vizuální identita", desc: "Jednoduché logo a základní vizuální styl pro firmy, co ještě nemají brand.", price: "od 1 500 Kč" },
                      { icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path strokeLinecap="round" d="M8.6 13.5 15.4 17.5M15.4 6.5 8.6 10.5"/></svg>
                        ), title: "Správa sociálních sítí", desc: "Pravidelné příspěvky a správa profilů na Instagramu a Facebooku.", price: "od 800 Kč / měsíc" },
                      { icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18"/><rect x="7" y="13" width="3" height="5" fill="currentColor" stroke="none"/><rect x="12" y="9" width="3" height="9" fill="currentColor" stroke="none"/><rect x="17" y="5" width="3" height="13" fill="currentColor" stroke="none"/></svg>
                        ), title: "Analytika a reporty", desc: "Napojení Google Analytics a pravidelný přehled návštěvnosti webu.", price: "od 300 Kč / měsíc" },
                    ].map((item) => (
                      <div key={item.title} className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">{item.icon}</span>
                        <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-lg font-bold text-blue-400">{item.price}</p>
                        <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-50">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Co je součástí každého webu */}
        <section className="bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.01)_64px,rgba(255,255,255,0.01)_calc(100%-64px),transparent)]">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Samozřejmostí každého webu</span>
                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Co dostanete s každým webem automaticky</h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="5" y="2" width="14" height="20" rx="2"/><path strokeLinecap="round" d="M12 18h.01"/></svg>, title: "Responzivní design", desc: "Web vypadá skvěle na mobilu, tabletu i počítači." },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, title: "Rychlé načítání", desc: "Optimalizovaný kód zajišťuje, že se stránka načítá okamžitě." },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>, title: "SSL certifikát (https://)", desc: "Zabezpečené připojení splňující základní požadavek Googlu." },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/></svg>, title: "Základní SEO", desc: "Správné meta tagy, nadpisy a struktura pro vyhledávač." },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>, title: "Moderní design na míru", desc: "Žádné šablony, web navrhujeme přesně podle vašich požadavků." },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>, title: "Podpora po spuštění", desc: "Po předání webu jsme stále k dispozici." },
                ].map((item) => (
                  <div key={item.title} data-spotlight className="group relative flex items-start gap-4 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-blue-500/5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition duration-300 group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:scale-110">{item.icon}</span>
                    <div>
                      <p className="text-base font-semibold text-white transition duration-300 group-hover:text-blue-300">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-50 transition duration-300 group-hover:text-white">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="relative overflow-hidden">
          <div className="relative z-[1] mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Kontakt</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-5xl">
                  Napište nám{" "}
                  <span className="text-gradient">ještě dnes</span>
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-white">
                  Představte nám krátce váš projekt nebo nápad. Ozveme se vám do 24 hodin s návrhem řešení.
                </p>
              </div>
            </Reveal>

            {/* Statistiky */}
            <div className="mt-10 grid divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 100}>
                  <div className="group px-6 py-5 text-center transition duration-300 hover:bg-white/[0.03]">
                    <p className="text-4xl font-bold text-white transition duration-300 group-hover:text-gradient group-hover:scale-110">
                      {stat.label === "spokojenost klientů" && <Counter to={100} suffix=" %" />}
                      {stat.label === "reakce na Vaši zprávu" && <><span className="text-2xl">{"< "}</span><Counter to={24} suffix=" h" /></>}
                      {stat.label === "od nápadu k webu na ostro" && <>1–2<span className="text-2xl"> týdny</span></>}
                    </p>
                    <span className="mx-auto mt-3 block h-0.5 w-10 bg-red-500 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-400" />
                    <p className="mt-2 text-sm text-white">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid gap-10 sm:grid-cols-[0.9fr_1.1fr]">
              <Reveal delay={100}>
                <div className="space-y-4">
                  {[
                    { icon: "☎", label: "Telefon", value: "608 462 557", href: "tel:+420608462557" },
                    { icon: "✉", label: "E-mail", value: "info@webo.cz", href: "mailto:info@webo.cz" },
                    { icon: "▣", label: "Instagram", value: "@webo.cz", href: "https://www.instagram.com/webo.cz" },
                    { icon: "⚲", label: "Působiště", value: "Hlinsko,Pardubice", href: undefined },
                    { icon: "◷", label: "Dostupnost", value: "Po–Pá, 07:00 - 16:00", href: undefined },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/[0.05]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-blue-400 transition group-hover:border-blue-400/40 group-hover:bg-blue-500/10 group-hover:text-blue-300">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-neutral-200">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="font-medium text-white hover:text-blue-400 hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={200}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
