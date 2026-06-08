import Image from "next/image";
import Reveal from "./components/Reveal";
import ScrollProgress from "./components/ScrollProgress";

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
      "Nejprve si nezávazně promluvíme o tom, co potřebujete, a ZDARMA vám připravím návrh řešení na míru.",
  },
  {
    step: "02",
    title: "Doladíme detaily a domluvíme cenu",
    description:
      "Návrh si společně projdeme a zapracuji do něj vaše připomínky. Teprve potom, když budete spokojení, se domluvíme na konečné ceně.",
  },
  {
    step: "03",
    title: "Web dokončím a spustím",
    description:
      "Vše dotáhnu k dokonalosti, nasadím web naživo a postarám se, aby od prvního dne fungoval tak, jak má.",
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
      <header className="sticky top-0 z-10 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="group flex items-center gap-3">
            <Image src="/images/logo/logo.png" alt="BrandWeb logo" width={36} height={36} className="h-9 w-9 transition duration-300 group-hover:scale-105" />

            <span className="text-lg font-semibold tracking-tight text-white">
              Brand<span className="text-blue-500">Web</span>
            </span>
          </a>
          <div className="hidden gap-8 text-sm font-medium text-neutral-200 sm:flex">
            <a href="#o-mne" className="transition hover:text-white">O mně</a>
            <a href="#proces" className="transition hover:text-white">Jak pracuji</a>
            <a href="#sluzby" className="transition hover:text-white">Služby</a>
            <a href="#reference" className="transition hover:text-white">Recenze</a>
            <a href="#faq" className="transition hover:text-white">Často kladené otázky</a>
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
                  <span className="text-gradient">prodávají</span>.<br className="hidden sm:block" />{" "}
                  Ne jen visí na internetu.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mx-auto mt-8 max-w-xl text-xl leading-relaxed text-white sm:mx-0">
                  Pomáhám živnostníkům a malým firmám získat nebo upravit jejich stávající web tak, aby{" "}
                  <span className="text-white">prodávali</span>.{" "}
                  Srozumitelný obsah, rychlé načítání, moderní vzhled a tlačítko, na které lidé skutečně kliknou.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                  <a
                    href="#kontakt"
                    className="rounded-full bg-white px-8 py-4 text-base font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white"
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
              <div className="relative mx-auto w-full max-w-md float-slow">
                <span className="bg-blob bg-blob-blue -right-12 -top-12 h-56 w-56 opacity-50" />
                <span className="bg-blob bg-blob-red -left-12 -bottom-12 h-56 w-56 opacity-40" />
                <div className="group relative z-[1] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-blue-500/10">
                  <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-400/70" />
                    <span className="ml-3 h-5 flex-1 max-w-[60%] rounded-full bg-white/5" />
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
              </div>
            </Reveal>
          </div>
        </section>

        {/* O mně */}
        <section id="o-mne" className="relative overflow-hidden border-b border-white/10">
          <span className="bg-blob bg-blob-blue -left-32 top-1/3 h-80 w-80" />
          <Image
            src="/images/logo/logo.png"
            alt=""
            width={520}
            height={520}
            className="pointer-events-none absolute -right-32 top-1/2 z-0 hidden -translate-y-1/2 opacity-[0.12] blur-[2px] sm:block"
          />
          <div className="relative z-[1] mx-auto max-w-3xl px-6 py-20 text-center">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Kdo jsem ?</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Ahoj, jmenuji se Jirka
                </h2>
                <p className="mt-4 text-neutral-200">
                  Navrhuji a vytvářím weby pro živnostníky, řemeslníky a malé
                  provozovny. Nejčastěji pomáhám lidem, kteří ještě žádný web
                  nemají, nebo jim ten současný už neslouží tak, jak by měl.
                </p>
                <p className="mt-4 text-neutral-200">
                  Cíl je vždy stejný a to udělat jednoduchý, přehledný a moderní web, který
                  návštěvníky zaujme a přivede Vám nové zákazníky.
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
                  Bez dobrého webu jste pro spoustu lidí prakticky neviditelní
                </h2>
                <p className="mt-4 text-neutral-200">
                  Bez kvalitní prezentace na internetu vám dnes lidé jednoduše nevěří,
                  že existujete, a tak raději zamíří ke konkurenci, která web má.
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
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-red-500/[0.06] hover:shadow-lg hover:shadow-red-500/10">
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
                Pojďme to změnit. Postavíme web, který bude vypadat skvěle a začne pro vás reálně pracovat.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Statistiky */}
        <section className="relative overflow-hidden bg-neutral-950">
          <span className="bg-grid" />
          <span className="bg-blob bg-blob-blue left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 opacity-20" />
          <div className="relative z-[1] mx-auto grid max-w-6xl divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="group px-6 py-10 text-center transition duration-300 hover:bg-white/[0.03]">
                  <p className="text-4xl font-bold text-white transition duration-300 group-hover:text-gradient group-hover:scale-110">{stat.value}</p>
                  <span className="mx-auto mt-3 block h-0.5 w-10 bg-red-500 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-400" />
                  <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
                </div>
              </Reveal>
            ))}
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
                  Žádné kouzlení, jen jasný a klidný postup
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-neutral-400">
                  Tři jednoduché kroky od prvního nápadu k webu, který vám bude sloužit roky.
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
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Co nabízím</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Vyberte si, co přesně potřebuje</h2>
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
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">Ukázky prací</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Pár ukázek, jak to u mě vypadá v praxi
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
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white">
                      Hotová realizace
                    </span>
                    <div>
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
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Tohle nejsou jen moje slova</h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  quote:
                    "Konečně web, na který se nestydím poslat odkaz. Poptávek nám výrazně přibylo a celá spolupráce byla bez stresu.",
                  name: "Petra N.",
                  role: "majitelka kadeřnictví",
                },
                {
                  quote:
                    "Měl jsem starý web ještě z roku 2015. Jiří mi ho kompletně předělal a vysvětlil úplně všechno srozumitelně, bez odborného žargonu.",
                  name: "Tomáš K.",
                  role: "OSVČ, truhlářství",
                },
                {
                  quote:
                    "Rychlá komunikace, dodrženy termíny a výsledek přesně podle představ. Můžu jen doporučit.",
                  name: "Markéta S.",
                  role: "majitelka kavárny",
                },
              ].map((t, i) => (
                <Reveal key={t.name} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <span className="text-2xl font-bold text-blue-400">”</span>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-300">{t.quote}</p>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-semibold text-white">
                        {t.name.split(" ").map((p) => p[0]).join("")}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-neutral-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="relative overflow-hidden border-b border-white/10 bg-white/[0.02]">
          <span className="bg-blob bg-blob-red left-1/2 -bottom-40 h-72 w-72 -translate-x-1/2 opacity-20" />
          <div className="relative z-[1] mx-auto max-w-3xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 before:inline-block before:h-px before:w-6 before:bg-gradient-to-r before:from-blue-500 before:to-red-500">FAQ</span>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Možná tu odpověď už je</h2>
              </div>
            </Reveal>
            <div className="mt-10 space-y-4">
              {[
                {
                  q: "Jak dlouho trvá vytvoření webu?",
                  a: "U jednodušší prezentace obvykle 1–3 týdny od schválení návrhu, u rozsáhlejších projektů domluvíme termín individuálně.",
                },
                {
                  q: "Kolik bude stát web pro mě?",
                  a: "Cena se vždy odvíjí od rozsahu, orientační ceny najdete výše v sekci Služby. Finální nabídku ale rád připravím na míru po krátkém rozhovoru.",
                },
                {
                  q: "Bude web fungovat i na mobilu?",
                  a: "Ano, každý web stavím tak, aby skvěle vypadal a fungoval na mobilu, tabletu i počítači.",
                },
                {
                  q: "Pomůžete mi i s texty a obsahem?",
                  a: "Rád poradím se strukturou a finálním zněním textů tak, aby web dobře komunikoval to, co potřebujete sdělit.",
                },
                {
                  q: "Co když budu chtít web později upravit?",
                  a: "Žádný problém, nabízím i následnou údržbu a drobné úpravy, případně vás naučím spravovat si obsah sami.",
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
                  Kontaktujte mě{" "}
                  <span className="text-gradient">ještě dnes</span>
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-neutral-400">
                  Popište mi krátce váš projekt nebo nápad. Ozvu se Vám do 48 hodin s návrhem řešení.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:grid-cols-[0.9fr_1.1fr]">
              <Reveal delay={100}>
                <div className="space-y-4">
                  {[
                    { icon: "☎", label: "Telefon", value: "+420 608 462 557", href: "tel:+420000000000" },
                    { icon: "✉", label: "E-mail", value: "info@brandweb.cz", href: "mailto:info@brandweb.cz" },
                    { icon: "▣", label: "Instagram", value: "@brandweb.cz", href: "#" },
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
                <form className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10 sm:p-8">
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-white to-red-500" />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Jméno a příjmení *</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Jan Novák"
                        className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Telefon *</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+420 777 000 000"
                        className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">E-mail</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="vas@email.cz"
                        className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Typ projektu</span>
                      <select
                        name="type"
                        defaultValue=""
                        className="mt-2 w-full appearance-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-neutral-400 outline-none transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
                      >
                        <option value="" disabled>Vyberte…</option>
                        <option value="novy-web">Nový web na míru</option>
                        <option value="redesign">Redesign stávajícího webu</option>
                        <option value="udrzba">Údržba a úpravy</option>
                        <option value="jine">Jiné / nevím přesně</option>
                      </select>
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Popište, co přesně potřebujete</span>
                      <textarea
                        name="message"
                        placeholder="Pár vět o vašem podnikání a o tom, co byste od webu očekávali…"
                        rows={5}
                        className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-widest text-neutral-950 transition hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white"
                  >
                    Nezávazně odeslat <span aria-hidden>→</span>
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <Image src="/images/logo/logo.png" alt="BrandWeb logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-sm font-semibold tracking-tight text-white">
              Brand<span className="text-blue-500">Web</span>
            </span>
          </div>
          <p className="text-sm text-neutral-200">
            © {new Date().getFullYear()} BrandWeb, Jiří Švec. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </>
  );
}
