import Reveal from "./components/Reveal";

const stats = [
  { value: "100 %", label: "spokojenost klientů" },
  { value: "< 48 h", label: "reakce na poptávku" },
  { value: "1–3 týdny", label: "od nápadu k webu na ostro" },
];

const process = [
  {
    step: "01",
    title: "Probereme váš záměr",
    description:
      "Krátký rozhovor o tom, co potřebujete, komu má web sloužit a co má dokázat.",
  },
  {
    step: "02",
    title: "Navrhnu a vytvořím",
    description:
      "Připravím design a postavím web tak, aby byl rychlý, přehledný a fungoval na mobilu i počítači.",
  },
  {
    step: "03",
    title: "Spustíme a doladíme",
    description:
      "Web nasadím naživo a podle zpětné vazby doladíme poslední detaily k dokonalosti.",
  },
];

const services = [
  {
    title: "Nový web na míru",
    price: "od 6 990 Kč",
    description:
      "Kompletní návrh a vytvoření webu — od první skici po nasazení online.",
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
      <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-lg font-semibold tracking-tight text-neutral-900">
            Brand<span className="text-blue-700">Web</span>
          </a>
          <div className="hidden gap-8 text-sm font-medium text-neutral-500 sm:flex">
            <a href="#o-mne" className="transition hover:text-neutral-900">O mně</a>
            <a href="#proces" className="transition hover:text-neutral-900">Jak pracuji</a>
            <a href="#sluzby" className="transition hover:text-neutral-900">Služby</a>
            <a href="#kontakt" className="transition hover:text-neutral-900">Kontakt</a>
          </div>
          <a
            href="#kontakt"
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800"
          >
            Nezávazná poptávka
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section id="hero" className="relative overflow-hidden px-6 pb-24 pt-28 text-center sm:pt-36">
          <span className="bg-grid" />
          <span className="bg-blob bg-blob-blue -left-40 -top-40 h-[28rem] w-[28rem]" />
          <span className="bg-blob bg-blob-red -right-32 top-0 h-96 w-96" />
          <span className="bg-blob bg-blob-navy left-1/2 bottom-0 h-80 w-80 -translate-x-1/2" />
          <div className="relative z-[1] mx-auto max-w-4xl">
          <Reveal>
            <h1 className="mx-auto text-5xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 sm:text-7xl">
              Web, který vypadá tak dobře,{" "}
              <span className="text-gradient">jak dobrá je vaše práce</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-neutral-500">
              Pomáhám lidem a malým firmám, kteří web nemají nebo mají zastaralý,
              získat jednoduchou a moderní prezentaci — takovou, na kterou budou
              hrdí a která jim přivede nové zákazníky.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#kontakt"
                className="rounded-full bg-neutral-900 px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Domluvit konzultaci
              </a>
              <a
                href="#proces"
                className="rounded-full border border-neutral-300 px-8 py-4 text-base font-semibold text-neutral-700 transition hover:-translate-y-0.5 hover:border-blue-700/40 hover:text-blue-800"
              >
                Jak spolupráce probíhá
              </a>
            </div>
          </Reveal>
          </div>
        </section>

        {/* Statistiky */}
        <section className="bg-neutral-950">
          <div className="mx-auto grid max-w-6xl divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="px-6 py-10 text-center">
                  <p className="text-4xl font-bold text-white">{stat.value}</p>
                  <span className="mx-auto mt-3 block h-0.5 w-10 bg-red-500" />
                  <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* O mně */}
        <section id="o-mne" className="relative overflow-hidden border-b border-neutral-200">
          <span className="bg-blob bg-blob-blue -left-32 top-1/3 h-80 w-80" />
          <div className="relative z-[1] mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-red-600">Kdo za tím stojí</span>
                <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">O mně</h2>
                <p className="mt-4 text-neutral-500">
                  Jmenuji se Jiří Švec a tvorbě webů se věnuji naplno. Založil jsem
                  si vlastní živnost, abych pomáhal lidem a menším firmám —
                  živnostníkům, řemeslníkům, provozovnám — kteří dosud žádný web
                  nemají nebo jim ten současný už neslouží tak, jak by měl.
                </p>
                <p className="mt-4 text-neutral-500">
                  Cílem je vždy stejný: jednoduchý, přehledný a hezký web, který
                  návštěvníky zaujme a přivede vám nové zákazníky — bez zbytečných
                  komplikací na vaší straně.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative overflow-hidden rounded-2xl bg-neutral-950 p-8 text-white">
                <span className="bg-blob bg-blob-red -right-12 -top-12 h-40 w-40 opacity-40 mix-blend-screen" />
                <div className="relative z-[1] flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/5 text-2xl font-bold">
                  JS
                </div>
                <p className="relative z-[1] mt-6 text-lg leading-relaxed text-neutral-200">
                  „Web má jednu práci — udělat na lidi dobrý dojem a přivést vám
                  nové zákazníky. Na tom stavím každý projekt.“
                </p>
                <p className="relative z-[1] mt-4 text-sm text-neutral-400">
                  Jiří Švec <span className="text-red-500">/</span> BrandWeb
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Jak spolupráce probíhá */}
        <section id="proces" className="border-b border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-red-600">Postup spolupráce</span>
                <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">Jak to celé probíhá</h2>
                <p className="mx-auto mt-3 max-w-xl text-neutral-500">
                  Tři jednoduché kroky od prvního nápadu k webu, který vám bude sloužit roky.
                </p>
              </div>
            </Reveal>
            <div className="relative mt-16 grid gap-10 sm:grid-cols-3">
              <span className="absolute left-0 right-0 top-6 hidden h-px bg-neutral-300 sm:block" />
              {process.map((item, i) => (
                <Reveal key={item.step} delay={i * 120}>
                  <div className="relative">
                    <div className="relative z-[1] flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white ring-4 ring-neutral-50">
                      {item.step}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-neutral-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="border-b border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-red-600">Ukázky prací</span>
                <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">Portfolio se právě tvoří</h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="relative overflow-hidden rounded-2xl bg-neutral-950 p-6 sm:col-span-2 sm:row-span-2 sm:min-h-[260px]">
                  <span className="bg-blob bg-blob-blue -right-16 -bottom-16 h-64 w-64 opacity-50 mix-blend-screen" />
                  <div className="relative z-[1] flex h-full flex-col justify-between">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white">
                      Připravuje se
                    </span>
                    <p className="max-w-sm text-lg leading-relaxed text-neutral-200">
                      Portfolio teprve buduji — první realizace tu brzy přibudou.
                      Ozvěte se mi a budete mezi prvními, na kom si vybrousím styl
                      k dokonalosti.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <p className="text-sm font-semibold text-neutral-900">Redesign webu</p>
                  <p className="mt-1 text-sm text-neutral-500">Modernizace zastaralé prezentace.</p>
                  <span className="mt-4 block h-1 w-10 rounded-full bg-blue-700" />
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <p className="text-sm font-semibold text-neutral-900">Web na míru</p>
                  <p className="mt-1 text-sm text-neutral-500">Od skici po nasazení online.</p>
                  <span className="mt-4 block h-1 w-10 rounded-full bg-red-600" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Služby a ceník */}
        <section id="sluzby" className="border-b border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-red-600">Co nabízím</span>
                <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">Služby a ceník</h2>
                <p className="mt-3 text-neutral-500">
                  Orientační ceny — finální nabídka se vždy odvíjí od rozsahu a
                  potřeb konkrétního projektu.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={i * 100}>
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 ${
                      i === 0
                        ? "bg-neutral-950 text-white shadow-xl shadow-neutral-900/20"
                        : "border border-neutral-200 bg-white hover:border-blue-700/30 hover:shadow-lg hover:shadow-blue-900/5"
                    }`}
                  >
                    {i === 0 && (
                      <span className="bg-blob bg-blob-blue -right-14 -top-14 h-40 w-40 opacity-50 mix-blend-screen" />
                    )}
                    {i === 0 && (
                      <span className="relative z-[1] mb-3 inline-block w-fit rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                        Nejoblíbenější
                      </span>
                    )}
                    <h3 className={`relative z-[1] text-lg font-semibold ${i === 0 ? "text-white" : "text-neutral-900"}`}>{service.title}</h3>
                    <p className={`relative z-[1] mt-1 text-xl font-bold ${i === 0 ? "text-white" : "text-blue-800"}`}>{service.price}</p>
                    <p className={`relative z-[1] mt-3 flex-1 text-sm ${i === 0 ? "text-neutral-300" : "text-neutral-500"}`}>{service.description}</p>
                    <span className={`relative z-[1] mt-4 block h-px w-full ${i === 0 ? "bg-white/10" : "bg-neutral-100"}`} />
                    <span className={`relative z-[1] mt-4 text-sm font-medium ${i === 0 ? "text-red-400" : "text-blue-700"}`}>
                      Mám zájem →
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="relative overflow-hidden">
          <span className="bg-blob bg-blob-blue -left-32 top-1/4 h-80 w-80" />
          <span className="bg-blob bg-blob-red -right-32 bottom-1/4 h-80 w-80" />
          <div className="relative z-[1] mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <div className="text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-red-600">Kontakt</span>
                <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">Pojďme to probrat</h2>
                <p className="mx-auto mt-3 max-w-xl text-neutral-500">
                  Napište mi pár slov o vašem nápadu a ozvu se vám zpět s návrhem řešení.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:grid-cols-[1fr_1.3fr]">
              <Reveal delay={100}>
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-neutral-950 p-8 text-white">
                  <span className="bg-blob bg-blob-blue -right-16 -top-16 h-48 w-48 opacity-40 mix-blend-screen" />
                  <span className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-blue-600 to-red-600" />
                  <div className="relative z-[1]">
                    <h3 className="text-lg font-semibold">Spojte se se mnou přímo</h3>
                    <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
                      Raději si zavoláte nebo napíšete e-mail? Klidně — ozvu se
                      zpátky obvykle do dvou pracovních dnů.
                    </p>
                  </div>
                  <div className="relative z-[1] mt-8 space-y-4 text-sm">
                    <div>
                      <p className="text-blue-100/60">E-mail</p>
                      <a href="mailto:info@brandweb.cz" className="font-medium text-white hover:underline">
                        info@brandweb.cz
                      </a>
                    </div>
                    <div>
                      <p className="text-blue-100/60">Telefon</p>
                      <a href="tel:+420000000000" className="font-medium text-white hover:underline">
                        +420 000 000 000
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <form className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Jméno"
                    className="rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-blue-700/50 focus:ring-2 focus:ring-blue-700/10"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-blue-700/50 focus:ring-2 focus:ring-blue-700/10"
                  />
                  <textarea
                    name="message"
                    placeholder="Pár slov o vašem projektu..."
                    rows={5}
                    className="sm:col-span-2 rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-blue-700/50 focus:ring-2 focus:ring-blue-700/10"
                  />
                  <button
                    type="submit"
                    className="sm:col-span-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-800"
                  >
                    Odeslat poptávku
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 py-8 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} BrandWeb — Jiří Švec. Všechna práva vyhrazena.
      </footer>
    </>
  );
}
