"use client";
import { useEffect, useState } from "react";

const TABS = ["Domů", "Služby", "Galerie", "Kontakt"];

const services = [
  {
    title: "Montáž na míru",
    desc: "Kuchyně, skříně, interiér",
    price: "od 12 000 Kč",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3 w-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Rekonstrukce",
    desc: "Kompletně a v termínu",
    price: "od 25 000 Kč",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3 w-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4 4 0 0 1-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5l-2.4 2.4-2.1-.6-.6-2.1 2.4-2.4z" />
      </svg>
    ),
  },
  {
    title: "Servis a opravy",
    desc: "Do 48 hodin u vás",
    price: "od 900 Kč",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3 w-3">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

/* Dlaždice galerie – barevné přechody působí jako fotky z realizací. */
const shots = [
  "linear-gradient(150deg,#7c4a17,#c07d33 45%,#241a12)",
  "linear-gradient(160deg,#0c4a6e,#38bdf8 55%,#082f49)",
  "linear-gradient(150deg,#3f3f46,#a1a1aa 50%,#18181b)",
  "linear-gradient(160deg,#1e3a8a,#60a5fa 55%,#0f172a)",
  "linear-gradient(150deg,#7c2d12,#f97316 50%,#1c1917)",
  "linear-gradient(160deg,#334155,#94a3b8 45%,#0f172a)",
];

const PAGES = [
  // Domů
  <div key="domu" className="flex h-[136px] flex-col gap-2">
    <div className="relative flex flex-1 flex-col justify-center overflow-hidden rounded-lg px-3.5 py-3 bg-[linear-gradient(125deg,rgba(37,99,235,0.55),rgba(2,6,23,0.88)_58%,rgba(239,68,68,0.42))]">
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
      <span className="relative z-[1] text-[7.5px] font-semibold uppercase tracking-[0.18em] text-blue-200">
        Řemeslo od roku 2012
      </span>
      <p className="relative z-[1] mt-1.5 text-[13px] font-bold leading-[1.2] text-white">
        Kvalitní práce,
        <br />
        na kterou se spolehnete
      </p>
      <div className="relative z-[1] mt-2.5 flex items-center gap-2.5">
        <span className="rounded-full bg-white px-2.5 py-1 text-[8px] font-bold text-neutral-950">
          Nezávazná poptávka
        </span>
        <span className="text-[8px] font-medium text-white/70">Ceník →</span>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-1.5">
      {[
        { v: "4,9", l: "127 hodnocení", star: true },
        { v: "24 h", l: "reakce na poptávku" },
        { v: "12 let", l: "praxe v oboru" },
      ].map((item) => (
        <div key={item.l} className="rounded-md bg-white/[0.06] px-1.5 py-1.5 text-center">
          <p className="text-[9px] font-bold text-white">
            {item.star && <span className="text-amber-300">★ </span>}
            {item.v}
          </p>
          <p className="mt-0.5 truncate text-[7px] text-neutral-400">{item.l}</p>
        </div>
      ))}
    </div>
  </div>,

  // Služby
  <div key="sluzby" className="flex h-[136px] flex-col gap-1.5">
    {services.map((s) => (
      <div
        key={s.title}
        className="flex flex-1 items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.05] px-2.5"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-500/20 text-blue-300">
          {s.icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[9.5px] font-semibold leading-tight text-white">{s.title}</p>
          <p className="truncate text-[7.5px] leading-tight text-neutral-400">{s.desc}</p>
        </div>
        <span className="shrink-0 text-[9px] font-bold text-blue-300">{s.price}</span>
      </div>
    ))}
  </div>,

  // Galerie
  <div key="galerie" className="grid h-[136px] grid-cols-3 grid-rows-2 gap-1.5">
    {shots.map((bg, i) => (
      <span
        key={bg}
        className="relative overflow-hidden rounded-md"
        style={{ backgroundImage: bg }}
      >
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_60%)]" />
        {i === 0 && (
          <span className="absolute bottom-1 left-1 rounded bg-black/45 px-1 py-[1px] text-[6.5px] font-semibold text-white">
            Naše práce
          </span>
        )}
      </span>
    ))}
  </div>,

  // Kontakt
  <div key="kontakt" className="flex h-[136px] flex-col gap-1.5">
    <div className="grid grid-cols-2 gap-1.5">
      <div className="flex h-[26px] items-center rounded-md border border-white/10 bg-white/[0.06] px-2 text-[8px] text-white">
        Jan Novák
      </div>
      <div className="flex h-[26px] items-center rounded-md border border-white/10 bg-white/[0.06] px-2 text-[8px] text-white">
        jan@email.cz
      </div>
    </div>
    <div className="flex-1 rounded-md border border-blue-400/30 bg-white/[0.06] px-2 py-1.5 text-[8px] leading-relaxed text-neutral-200">
      Dobrý den, měl bych zájem o cenovou nabídku na kuchyni na míru…
      <span className="ml-[1px] inline-block h-[9px] w-[1px] translate-y-[1px] bg-blue-300 align-middle" />
    </div>
    <span className="flex h-[26px] items-center justify-center rounded-md bg-blue-500 text-[8.5px] font-bold text-white shadow-lg shadow-blue-500/20">
      Odeslat poptávku
    </span>
  </div>,
];

export default function BrowserMockupContent() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % PAGES.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-2.5">
      {/* Hlavička ukázkového webu */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-red-500 text-white shadow-lg shadow-blue-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
              <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 14l10 5 10-5-10-5Z" />
            </svg>
          </span>
          <span>
            <span className="block text-[10px] font-semibold leading-tight text-white">Vaše firma</span>
            <span className="block text-[8px] leading-tight text-neutral-400">Web, který zaujme</span>
          </span>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.06] px-2 py-1 text-[7.5px] font-semibold text-white">
          ☎ 777 123 456
        </span>
      </div>

      {/* Navigace ukázkového webu */}
      <div className="flex items-center gap-3.5 border-b border-white/10 pb-1.5">
        {TABS.map((label, i) => (
          <span
            key={label}
            className={`relative text-[8.5px] font-medium transition-colors duration-300 ${
              i === active ? "text-white" : "text-neutral-500"
            }`}
          >
            {label}
            {i === active && (
              <span className="absolute -bottom-[7px] left-0 h-[1.5px] w-full rounded-full bg-blue-400" />
            )}
          </span>
        ))}
      </div>

      <div key={active} className="content-fade">
        {PAGES[active]}
      </div>
    </div>
  );
}
