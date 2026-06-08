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
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0e0e10]/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-lg font-semibold tracking-tight text-white">
            Brand<span className="text-amber-400">Web</span>
          </a>
          <div className="hidden gap-8 text-sm font-medium text-neutral-400 sm:flex">
            <a href="#o-mne" className="transition hover:text-white">O mně</a>
            <a href="#proces" className="transition hover:text-white">Jak pracuji</a>
            <a href="#sluzby" className="transition hover:text-white">Služby</a>
            <a href="#kontakt" className="transition hover:text-white">Kontakt</a>
          </div>
          <a
            href="#kontakt"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Nezávazná poptávka
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section id="hero" className="mx-auto max-w-5xl px-6 pb-20 pt-28 text-center sm:pt-36">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400/90">
            Tvorba webových stránek na míru
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Web, který vypadá tak dobře, jak dobrá je vaše práce
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Pomáhám lidem a malým firmám, kteří web nemají nebo mají zastaralý,
            získat jednoduchou a moderní prezentaci — takovou, na kterou budou
            hrdí a která jim přivede nové zákazníky.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#kontakt"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              Domluvit konzultaci
            </a>
            <a
              href="#proces"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-neutral-300 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
            >
              Jak spolupráce probíhá
            </a>
          </div>
        </section>

        {/* Statistiky */}
        <section className="border-y border-white/10">
          <div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* O mně */}
        <section id="o-mne" className="border-b border-white/10">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 sm:grid-cols-[200px_1fr] sm:items-center">
            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-neutral-900 text-4xl font-semibold text-neutral-300 sm:mx-0">
              JS
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">O mně</h2>
              <p className="mt-4 text-neutral-400">
                Jmenuji se Jiří Švec a tvorbě webů se věnuji naplno. Založil jsem
                si vlastní živnost, abych pomáhal lidem a menším firmám —
                živnostníkům, řemeslníkům, provozovnám — kteří dosud žádný web
                nemají nebo jim ten současný už neslouží tak, jak by měl.
              </p>
              <p className="mt-4 text-neutral-400">
                Cílem je vždy stejný: jednoduchý, přehledný a hezký web, který
                návštěvníky zaujme a přivede vám nové zákazníky — bez zbytečných
                komplikací na vaší straně.
              </p>
            </div>
          </div>
        </section>

        {/* Jak spolupráce probíhá */}
        <section id="proces" className="border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Jak spolupráce probíhá</h2>
              <p className="mx-auto mt-3 max-w-xl text-neutral-400">
                Tři jednoduché kroky od prvního nápadu k webu, který vám bude sloužit roky.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {process.map((item) => (
                <div key={item.step} className="relative pl-12">
                  <span className="absolute left-0 top-0 text-3xl font-bold text-white/15">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ukázky prací</h2>
            <p className="mx-auto mt-3 max-w-xl text-neutral-400">
              Portfolio teprve buduji — první realizace tu brzy přibudou. Ozvěte
              se mi a budete mezi prvními, na kom si vybrousím styl k dokonalosti.
            </p>
          </div>
        </section>

        {/* Služby a ceník */}
        <section id="sluzby" className="border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Služby a ceník</h2>
              <p className="mt-3 text-neutral-400">
                Orientační ceny — finální nabídka se vždy odvíjí od rozsahu a
                potřeb konkrétního projektu.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className={`flex flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${
                    i === 0
                      ? "border-amber-400/30 bg-neutral-900/60"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  {i === 0 && (
                    <span className="mb-3 inline-block w-fit rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400">
                      Nejoblíbenější
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-1 text-xl font-bold text-white">{service.price}</p>
                  <p className="mt-3 flex-1 text-sm text-neutral-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Pojďme to probrat</h2>
              <p className="mt-3 text-neutral-400">
                Napište mi pár slov o vašem nápadu a ozvu se vám zpět s návrhem řešení.
              </p>
            </div>

            <form className="mt-10 grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Jméno"
                className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none transition focus:border-amber-400/40 focus:ring-2 focus:ring-amber-400/10"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none transition focus:border-amber-400/40 focus:ring-2 focus:ring-amber-400/10"
              />
              <textarea
                name="message"
                placeholder="Pár slov o vašem projektu..."
                rows={5}
                className="sm:col-span-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none transition focus:border-amber-400/40 focus:ring-2 focus:ring-amber-400/10"
              />
              <button
                type="submit"
                className="sm:col-span-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-neutral-200"
              >
                Odeslat poptávku
              </button>
            </form>

            <div className="mt-10 flex flex-col items-center gap-1 text-sm text-neutral-400">
              <p>
                E-mail:{" "}
                <a href="mailto:info@brandweb.cz" className="font-medium text-white hover:underline">
                  info@brandweb.cz
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a href="tel:+420000000000" className="font-medium text-white hover:underline">
                  +420 000 000 000
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} BrandWeb — Jiří Švec. Všechna práva vyhrazena.
      </footer>
    </>
  );
}
