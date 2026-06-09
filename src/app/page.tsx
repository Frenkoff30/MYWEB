import Image from "next/image";
import Reveal from "./components/Reveal";
import ScrollProgress from "./components/ScrollProgress";
import Counter from "./components/Counter";
import TypingText from "./components/TypingText";
import ParallaxLogo from "./components/ParallaxLogo";
import TiltCard from "./components/TiltCard";
import ContactForm from "./components/ContactForm";

const stats = [
  { value: "100 %", label: "spokojenost klientů" },
  { value: "< 24 h", label: "reakce na Vaši zprávu" },
  { value: "1–2 týdny", label: "od nápadu k webu na ostro" },
];

const process = [
  {
    step: "01",
    title: "Nejdřív si promluvíme",
    description:
      "Nejprve si nezávazně promluvíme o tom, co potřebujete, a ZDARMA vám připravíme návrh řešení na míru.",
  },
  {
    step: "02",
    title: "Doladíme detaily a domluvíme cenu",
    description:
      "Návrh si společně projdeme a zapracujeme do něj vaše připomínky. Teprve potom, když budete spokojení, se domluvíme na konečné ceně.",
  },
  {
    step: "03",
    title: "Web dokončím a spustím",
    description:
      "Vše dotáhneme k dokonalosti, nasadíme web naživo a postaráme se, aby od prvního dne fungoval tak, jak má.",
  },
];

const services = [
  {
    title: "Nový web na míru",
    price: "od 6 990 Kč",
    description:
      "Kompletní návrh a vytvoření webu od první skici až po jeho nasazení online.",
  },
  {
    title: "Redesign starého webu",
    price: "od 4 990 Kč",
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
      <ScrollProgress />
      <header className="sticky top-0 z-10 bg-neutral-950/60 backdrop-blur-xl" style={{ borderBottom: "1px solid transparent", backgroundImage: "linear-gradient(rgba(10,12,16,0.6), rgba(10,12,16,0.6)), linear-gradient(to right, rgba(96,165,250,0.2), rgba(248,113,113,0.1), rgba(96,165,250,0.05))", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box" }}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="group flex items-center gap-3">
            <Image src="/images/logo/logo.png" alt="Webo logo" width={220} height={72} className="h-20 w-auto transition duration-300 group-hover:scale-105" />
          </a>
          <div className="hidden gap-8 text-sm font-medium text-neutral-200 sm:flex">
            <a href="#o-mne" className="nav-link transition hover:text-white">O mně</a>
            <a href="#proces" className="nav-link transition hover:text-white">Jak pracuji</a>
            <a href="#sluzby" className="nav-link transition hover:text-white">Služby</a>
            <a href="#reference" className="nav-link transition hover:text-white">Recenze</a>
            <a href="#faq" className="nav-link transition hover:text-white">Často kladené otázky</a>
          </div>
          <a
            href="#kontakt"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-blue-500 hover:text-white"
          >
            Kontakt
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section id="hero" className="relative overflow-hidden px-6 pb-24 pt-28 sm:pt-36">
<span className="bg-grid" />
          <span className="bg-blob bg-blob-blue -left-40 -top-40 h-[28rem] w-[28rem]" />
          <span className="bg-blob bg-blob-red -right-32 top-0 h-96 w-96" />
          <span className="bg-blob bg-blob-navy left-1/2 bottom-0 h-80 w-80 -translate-x-1/2" />
          <div className="relative z-[1] mx-auto grid max-w-6xl gap-16 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
            <div className="text-center sm:text-left">
              <Reveal delay={100}>
                <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl">
                  Weby, co{" "}
                  <span className="text-gradient glitch">prodávají</span>.<br className="hidden sm:block" />{" "}
                  Ne jen visí na internetu.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mx-auto mt-8 max-w-xl text-xl leading-relaxed text-neutral-300 sm:mx-0">
                  Pomáháme živnostníkům a malým firmám získat nebo upravit web tak, aby{" "}
                  <span className="text-white font-semibold">skutečně prodával</span>.{" "}
                  Srozumitelný obsah,{" "}
                  <span className="text-blue-400 font-semibold">rychlé načítání</span>,{" "}
                  moderní vzhled a tlačítko, na které lidé{" "}
                  <span className="text-white font-semibold">opravdu kliknou</span>.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                  <a
                    href="#kontakt"
                    className="btn-glow rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-400"
                  >
                    Domluvit konzultaci zdarma
                  </a>
                  <a
                    href="#proces"
                    className="rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-neutral-300 transition hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-white"
                  >
                    Jak spolupráce probíhá
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={250}>
              <TiltCard className="relative mx-auto w-full max-w-md float-slow">
                <span className="bg-blob bg-blob-blue -right-12 -top-12 h-56 w-56 opacity-50" />
                <span className="bg-blob bg-blob-red -left-12 -bottom-12 h-56 w-56 opacity-40" />
                <div className="group relative z-[1] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-blue-500/10">
                  <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-400/70" />
                    <span className="ml-3 flex h-5 flex-1 max-w-[60%] items-center rounded-full bg-white/5 px-3">
                      <TypingText text="webo.cz" startDelay={1200} />
                    </span>
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="flex items-center gap-3">
                      <Image src="/images/logo/logo.png" alt="" width={32} height={32} className="h-8 w-8 rounded-lg" />
                      <div className="space-y-1.5">
                        <span className="block h-2.5 w-28 rounded-full bg-white/20" />
                        <span className="block h-2 w-16 rounded-full bg-white/10" />
                      </div>
                    </div>
                    <span className="relative block h-28 w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/25 via-white/[0.03] to-red-500/20">
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
                    </span>
                    <div className="grid grid-cols-3 gap-3">
                      <span className="h-14 rounded-lg bg-white/5 transition duration-300 group-hover:bg-blue-500/10" />
                      <span className="h-14 rounded-lg bg-white/5 transition delay-75 duration-300 group-hover:bg-white/10" />
                      <span className="h-14 rounded-lg bg-white/5 transition delay-150 duration-300 group-hover:bg-red-500/10" />
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="block h-2 w-24 rounded-full bg-white/10" />
                      <a href="#sluzby" className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-neutral-950 transition hover:-translate-y-0.5 group-hover:bg-blue-500 group-hover:text-white">Koupit →</a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </section>

        {/* O mně */}
        <section id="o-mne" className="relative overflow-hidden border-b border-white/10">
          <span className="bg-blob bg-blob-blue -left-32 top-1/3 h-80 w-80" />
          <ParallaxLogo
            speed={0.25}
            className="pointer-events-none absolute right-0 top-1/2 z-0 hidden h-[480px] w-[480px] opacity-[0.18] blur-[2px] sm:block"
          />
          <div className="relative z-[1] mx-auto max-w-3xl px-6 py-20 text-center">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Kdo jsme ?</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Jsme Webo. Tvoříme weby, které pracují za vás
                </h2>
                <p className="mt-4 text-neutral-300">
                  Navrhujeme a vytváříme weby pro{" "}
                  <span className="text-white font-semibold">živnostníky, řemeslníky a malé provozovny</span>.{" "}
                  Nejčastěji pomáháme lidem, kteří ještě žádný web nemají, nebo jim ten současný{" "}
                  <span className="text-red-400 font-semibold">už neslouží tak, jak by měl</span>.
                </p>
                <p className="mt-4 text-neutral-300">
                  Náš cíl je vždy stejný. Udělat{" "}
                  <span className="text-blue-400 font-semibold">jednoduchý, přehledný a moderní web</span>,{" "}
                  který návštěvníky zaujme a přivede vám nové zákazníky.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Problém */}
        <section className="relative overflow-hidden border-b border-white/10 bg-white/[0.02]">
          <span className="bg-blob bg-blob-red -right-40 -top-24 h-72 w-72 opacity-30" />
          <div className="relative z-[1] mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Poznáváte se?</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Bez dobrého webu jste pro spoustu lidí prakticky <span className="text-red-400">neviditelní</span>
                </h2>
                <p className="mt-4 text-neutral-300">
                  Bez kvalitní prezentace na internetu vám dnes lidé jednoduše{" "}
                  <span className="text-white font-semibold">nevěří, že existujete</span>, a tak raději zamíří ke{" "}
                  <span className="text-red-400 font-semibold">konkurenci, která web má</span>.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Žádný web",
                  text: "Lidé vás nedohledají na Googlu a vaše služby tak míjí ty, kteří by je nejvíc ocenili.",
                },
                {
                  title: "Zastaralý vzhled",
                  text: "Starý nebo nepřehledný web spíš odrazuje, než aby budil důvěru a přiváděl zákazníky.",
                },
                {
                  title: "Nefunguje na mobilu",
                  text: "Většina lidí dnes prochází web z telefonu. Pokud tam nevypadá dobře, ztrácíte je hned na startu.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <div data-spotlight className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-red-500/[0.06] hover:shadow-lg hover:shadow-red-500/10">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 text-sm font-bold text-red-400 transition duration-300 group-hover:bg-red-500/20 group-hover:text-red-300">
                      !
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-white transition duration-300 group-hover:text-red-300">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-200">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <p className="mx-auto mt-10 max-w-xl text-center text-lg font-medium text-neutral-200">
                Pojďme to změnit. Ve Webo stavíme weby, které vypadají skvěle a začnou pro vás reálně pracovat.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Jak spolupráce probíhá */}
        <section id="proces" className="relative overflow-hidden border-b border-white/10 bg-white/[0.02]">
          <span className="bg-blob bg-blob-navy -left-32 -bottom-32 h-80 w-80 opacity-30" />
          <div className="relative z-[1] mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Postup spolupráce</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Žádné kouzlení, jen <span className="text-blue-400">jasný postup</span>
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-neutral-400">
                  Tři jednoduché kroky od prvního nápadu k webu, který vám bude{" "}
                  <span className="text-white font-medium">sloužit roky</span>.
                </p>
              </div>
            </Reveal>
            <div className="relative mt-16 grid gap-10 sm:grid-cols-3">
              <span className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 sm:block" />
              {process.map((item, i) => (
                <Reveal key={item.step} delay={i * 120}>
                  <div className="group relative">
                    <div className="relative z-[1] flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-bold text-neutral-950 ring-4 ring-neutral-950 transition duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      {item.step}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-white transition group-hover:text-blue-400">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-200">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Služby a ceník */}
        <section id="sluzby" className="border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Co nabízíme</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Vyberte si, co přesně potřebujete</h2>
                <p className="mt-3 text-neutral-400">
                  Jde o orientační ceny, finální nabídka se vždy odvíjí od rozsahu a
                  potřeb konkrétního projektu.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={i * 100}>
                  <a
                    href="#kontakt"
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 text-white transition duration-300 hover:-translate-y-1.5 ${
                      i === 0
                        ? "border border-blue-400/30 bg-gradient-to-b from-blue-500/[0.08] to-white/[0.02] shadow-xl shadow-blue-500/10 ring-1 ring-blue-400/20"
                        : "border border-white/10 bg-white/[0.03] hover:border-blue-400/30 hover:bg-white/[0.05]"
                    }`}
                  >
                    {i === 0 && (
                      <span className="bg-blob bg-blob-blue -right-14 -top-14 h-40 w-40 opacity-30" />
                    )}
                    {i === 0 && (
                      <span className="relative z-[1] mb-3 inline-block w-fit rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                        Nejoblíbenější
                      </span>
                    )}
                    <h3 className="relative z-[1] text-lg font-semibold text-white">{service.title}</h3>
                    <p className="relative z-[1] mt-1 text-xl font-bold text-blue-400">{service.price}</p>
                    <p className="relative z-[1] mt-3 flex-1 text-sm text-neutral-200">{service.description}</p>
                    <span className="relative z-[1] mt-4 block h-px w-full bg-white/10" />
                    <span className={`relative z-[1] mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition group-hover:gap-2.5 ${i === 0 ? "text-red-400" : "text-blue-400"}`}>
                      Mám zájem <span>→</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Doplňkové služby */}
            <Reveal delay={100}>
              <div className="mt-10">
                <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-neutral-500">Doplňkové služby</p>
                <div className="grid gap-6 sm:grid-cols-3">
                  {[
                    { icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/></svg>
                      ), title: "SEO optimalizace", desc: "Základní nastavení aby vás Google našel — meta tagy, rychlost, struktura.", price: "od 2 000 Kč" },
                    { icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      ), title: "Registrace domény", desc: "Vyřídím za vás, ať máte vše na jednom místě.", price: "~300 Kč / rok" },
                    { icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      ), title: "Firemní e-mail", desc: "info@vasefirma.cz místo gmailové adresy. Působí profesionálněji.", price: "od 50 Kč / měsíc" },
                  ].map((item) => (
                    <div key={item.title} className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">{item.icon}</span>
                      <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-lg font-bold text-blue-400">{item.price}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Co je součástí každého webu */}
        <section className="border-b border-white/10 bg-white/[0.01]">
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
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, title: "Rychlé načítání", desc: "Optimalizovaný kód — stránka se načte okamžitě." },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>, title: "SSL certifikát (https://)", desc: "Zabezpečené připojení — základní požadavek Googlu." },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="m21 21-4.35-4.35"/></svg>, title: "Základní SEO", desc: "Správné meta tagy, nadpisy a struktura pro Google." },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>, title: "Moderní design na míru", desc: "Žádná šablona — web navrhnu přesně pro vás." },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>, title: "Podpora po spuštění", desc: "Po předání webu jsem stále k dispozici pro dotazy." },
                ].map((item) => (
                  <div key={item.title} data-spotlight className="group relative flex items-start gap-4 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-blue-500/5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition duration-300 group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:scale-110">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-white transition duration-300 group-hover:text-blue-300">{item.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-neutral-400 transition duration-300 group-hover:text-neutral-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Naše práce</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Pár ukázek, jak weby od Webo vypadají v praxi
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10">
                <a
                  href="https://frenkoff30.github.io/KAMASTRECHYWEB/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative mx-auto block max-w-2xl overflow-hidden rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05] sm:min-h-[260px]"
                >
                  <span className="bg-blob bg-blob-blue -right-16 -bottom-16 h-64 w-64 opacity-50" />
                  <div className="relative z-[1] flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white">
                        Hotová realizace
                      </span>
                      <Image src="/images/others/KAMASTRECHYLOGO.png" alt="KAMA Střechy logo" width={120} height={48} className="h-10 w-auto opacity-90 transition duration-300 group-hover:opacity-100" />
                    </div>
                    <div className="mt-6">
                      <p className="text-lg font-semibold text-white">KAMA Střechy</p>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-200">
                        Web pro klempířskou a pokrývačskou firmu, postavený tak,
                        aby na první pohled ukázal zkušenosti a vzbudil důvěru
                        u nových zákazníků.
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition group-hover:text-blue-300">
                        Zobrazit web <span className="transition group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Reference */}
        <section id="reference" className="relative overflow-hidden border-b border-white/10">
          <span className="bg-blob bg-blob-blue -right-40 top-0 h-72 w-72 opacity-25" />
          <div className="relative z-[1] mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Reference</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Recenze od klientů budou brzy tady</h2>
                <p className="mt-3 text-neutral-400">
                  Aktuálně sbírám reference od svých klientů, takže tady už brzy
                  uvidíte jejich reálné zkušenosti.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="relative overflow-hidden border-b border-white/10 bg-white/[0.02]">
          <span className="bg-blob bg-blob-red left-1/2 -bottom-40 h-72 w-72 -translate-x-1/2 opacity-20" />
          <div className="relative z-[1] mx-auto max-w-3xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Často kladené otázky</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Možná tu odpověď už je</h2>
              </div>
            </Reveal>
            <div className="mt-10 space-y-4">
              {[
                {
                  q: "Jak dlouho trvá vytvoření webu?",
                  a: "U jednoduché prezentace obvykle 1–2 týdny od schválení návrhu. U rozsáhlejších projektů termín domluvíme individuálně.",
                },
                {
                  q: "Kolik bude stát web?",
                  a: "Cena se vždy odvíjí od rozsahu projektu. Orientační ceny najdete výše v sekci Služby. Po krátkém rozhovoru vám rádi připravíme konkrétní nabídku na míru, zdarma a nezávazně.",
                },
                {
                  q: "Bude web fungovat i na mobilu?",
                  a: "Ano, každý web stavíme tak, aby skvěle vypadal a fungoval na mobilu, tabletu i počítači. Dnes přichází většina návštěvníků z telefonu, takže to je základ.",
                },
                {
                  q: "Pomůžete mi i s texty a obsahem?",
                  a: "Rádi poradíme se strukturou a zněním textů tak, aby web jasně sděloval to, co potřebujete. Pokud chcete, připravíme texty i kompletně za vás.",
                },
                {
                  q: "Zajistíte mi i doménu a hosting?",
                  a: "Ano, postaráme se o registraci domény i nasazení webu online. Vše zařídíme za vás, ať máte vše na jednom místě.",
                },
                {
                  q: "Co když budu chtít web později upravit?",
                  a: "Žádný problém. Nabízíme průběžnou údržbu a drobné úpravy, nebo vás naučíme spravovat obsah samostatně.",
                },
                {
                  q: "Co když se na webu něco pokazí?",
                  a: "Ozvěte se nám a problém vyřešíme co nejdříve. Protože web známe od základu, oprava je obvykle rychlá.",
                },
              ].map((item) => (
                <Reveal key={item.q}>
                  <details className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 transition duration-300 open:border-blue-400/30 open:bg-white/[0.05] hover:border-white/20">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white transition group-hover:text-blue-300">
                      {item.q}
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm text-neutral-300 transition duration-300 group-open:rotate-45 group-open:border-blue-400/50 group-open:bg-blue-500/10 group-open:text-blue-400">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-white">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="relative overflow-hidden">
          <span className="bg-blob bg-blob-blue -left-32 top-1/4 h-80 w-80" />
          <span className="bg-blob bg-blob-red -right-32 bottom-1/4 h-80 w-80" />
          <Image
            src="/images/logo/logo.png"
            alt=""
            width={520}
            height={520}
            className="pointer-events-none absolute -left-56 top-1/2 z-0 hidden -translate-y-1/2 opacity-[0.55] sm:block"
          />
          <div className="relative z-[1] mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Kontakt</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-5xl">
                  Napište nám{" "}
                  <span className="text-gradient">ještě dnes</span>
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-neutral-400">
                  Popište nám krátce váš projekt nebo nápad. Ozveme se vám do 24 hodin s návrhem řešení.
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
                      {stat.label === "od nápadu k webu na ostro" && stat.value}
                    </p>
                    <span className="mx-auto mt-3 block h-0.5 w-10 bg-red-500 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-400" />
                    <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid gap-10 sm:grid-cols-[0.9fr_1.1fr]">
              <Reveal delay={100}>
                <div className="space-y-4">
                  {[
                    { icon: "☎", label: "Telefon", value: "+420 608 462 557", href: "tel:+420000000000" },
                    { icon: "✉", label: "E-mail", value: "info@webo.cz", href: "mailto:info@webo.cz" },
                    { icon: "▣", label: "Instagram", value: "@webo.cz", href: "#" },
                    { icon: "⚲", label: "Působiště", value: "Pardubice", href: undefined },
                    { icon: "◷", label: "Dostupnost", value: "Po–Pá, dle telefonické domluvy", href: undefined },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/[0.05]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-blue-400 transition group-hover:border-blue-400/40 group-hover:bg-blue-500/10 group-hover:text-blue-300">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-neutral-500">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-medium text-white hover:text-blue-400 hover:underline">
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

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
          <Image src="/images/logo/logo.png" alt="Webo logo" width={600} height={200} className="w-full max-w-lg h-auto" />
          <div className="flex items-center gap-3">
            <p className="text-xs text-neutral-500">Realizováno pro:</p>
            <a href="https://frenkoff30.github.io/KAMASTRECHYWEB/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/others/KAMASTRECHYLOGO.png" alt="KAMA Střechy" width={80} height={32} className="h-7 w-auto opacity-50 transition hover:opacity-80" />
            </a>
          </div>
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Webo Studio
          </p>
        </div>
      </footer>
    </>
  );
}
