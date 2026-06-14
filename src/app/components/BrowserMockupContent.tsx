"use client";
import { useEffect, useState } from "react";

const TABS = ["O nás", "Galerie", "Kontakt"];

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 opacity-50">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 15-5-5L5 21" />
  </svg>
);

const PAGES = [
  // Domů
  <span
    key="domu"
    className="bg-gradient-animate relative flex h-28 w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(120deg,rgba(59,130,246,0.35),rgba(255,255,255,0.05),rgba(239,68,68,0.3),rgba(59,130,246,0.35))] text-center"
  >
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
    <span className="relative z-[1] text-sm font-bold text-white">Vaše služby na prvním místě</span>
    <span className="relative z-[1] rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium text-white">Zobrazit nabídku →</span>
  </span>,
  // O nás
  <div key="o-nas" className="flex h-28 w-full gap-3 rounded-xl bg-white/5 p-3">
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-red-500 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
      VF
    </span>
    <div className="flex flex-1 flex-col gap-2 pt-1">
      <span className="text-[10px] font-semibold text-white">O naší firmě</span>
      <span className="h-2 w-full rounded-full bg-white/10" />
      <span className="h-2 w-4/5 rounded-full bg-white/10" />
      <span className="h-2 w-3/5 rounded-full bg-white/10" />
      <span className="mt-auto h-6 w-24 rounded-full bg-blue-500/30" />
    </div>
  </div>,
  // Galerie
  <div key="galerie" className="grid h-28 w-full grid-cols-3 gap-2">
    <span className="flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/30 to-blue-500/5 text-blue-200"><ImageIcon /></span>
    <span className="flex items-center justify-center rounded-lg bg-gradient-to-br from-white/15 to-white/5 text-white"><ImageIcon /></span>
    <span className="flex items-center justify-center rounded-lg bg-gradient-to-br from-red-500/30 to-red-500/5 text-red-200"><ImageIcon /></span>
    <span className="flex items-center justify-center rounded-lg bg-gradient-to-br from-white/10 to-white/5 text-white"><ImageIcon /></span>
    <span className="flex items-center justify-center rounded-lg bg-gradient-to-br from-red-500/20 to-red-500/5 text-red-200"><ImageIcon /></span>
    <span className="flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 text-blue-200"><ImageIcon /></span>
  </div>,
  // Kontakt
  <div key="kontakt" className="flex h-28 w-full flex-col gap-2 rounded-xl bg-white/5 p-3">
    <span className="text-[10px] font-semibold text-white">Napište nám</span>
    <div className="grid grid-cols-2 gap-2">
      <div className="flex h-7 items-center gap-2 rounded-md bg-white/10 px-2 text-neutral-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3 w-3 shrink-0 opacity-60">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span className="text-[9px]">Jméno</span>
      </div>
      <div className="flex h-7 items-center gap-2 rounded-md bg-white/10 px-2 text-neutral-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3 w-3 shrink-0 opacity-60">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m22 6-10 7L2 6" />
        </svg>
        <span className="text-[9px]">E-mail</span>
      </div>
    </div>
    <div className="flex flex-1 items-start gap-2 rounded-md bg-white/10 px-2 py-2 text-neutral-300">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3 w-3 shrink-0 opacity-60">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <span className="text-[9px]">Vaše zpráva...</span>
    </div>
    <span className="mt-3 flex h-7 w-full items-center justify-center rounded-full bg-blue-500/40 text-[9px] font-semibold text-white">Odeslat →</span>
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
    <div className="flex min-h-[180px] flex-col gap-4">
      <div key={active} className="content-fade">
        {PAGES[active]}
      </div>
      {active === 0 && (
        <div className="content-fade grid grid-cols-3 gap-3">
          {TABS.map((label) => (
            <span
              key={label}
              className="flex h-14 items-center justify-center rounded-lg bg-white/5 text-[10px] font-medium text-neutral-50"
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
