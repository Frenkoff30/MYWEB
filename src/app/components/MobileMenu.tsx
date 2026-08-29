"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import NavLink from "./NavLink";

type NavItem = { href: string; label: string };

/** Rozbalovací menu pro telefon – na desktopu se odkazy zobrazují napřímo,
 *  pod breakpointem md je nahrazuje toto tlačítko s celoobrazovkovým panelem.
 *
 *  Panel se vykresluje portálem do <body>: hlavička má kvůli animaci při
 *  scrollu CSS transform a ten by u potomka rušil position: fixed. */
export default function MobileMenu({ links }: { links: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Portál smí vzniknout až po připojení v prohlížeči – na serveru document
  // neexistuje a vykreslení napřímo by rozbilo hydrataci.
  // eslint-disable-next-line react-hooks/set-state-in-effect -- standardní vzor pro portál v SSR
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  const panel = (
    <div
      id="mobilni-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Hlavní menu"
      className={`fixed inset-0 z-[60] flex flex-col bg-neutral-950/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex shrink-0 items-center justify-between px-6 py-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Menu</span>
        <button
          type="button"
          onClick={close}
          aria-label="Zavřít menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-red-400/50 hover:bg-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 pb-8 pt-2">
        {links.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            onNavigate={close}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-lg font-semibold text-white transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.06]"
            activeClassName="!border-blue-400/40 !bg-blue-500/10 !text-blue-300"
          >
            {link.label}
            <span aria-hidden className="text-blue-400">→</span>
          </NavLink>
        ))}

        <NavLink
          href="/#kontakt"
          onNavigate={close}
          className="btn-glow mt-4 rounded-full bg-blue-500 px-6 py-4 text-center text-lg font-semibold text-white transition hover:bg-blue-400"
        >
          Domluvit konzultaci
        </NavLink>

        <div className="mt-auto flex flex-col gap-1 pt-10 text-sm text-neutral-400">
          <a href="tel:+420608462557" className="transition hover:text-blue-300">
            ☎ 608 462 557
          </a>
          <a href="mailto:info@webo.cz" className="transition hover:text-blue-300">
            ✉ info@webo.cz
          </a>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Otevřít menu"
        aria-expanded={open}
        aria-controls="mobilni-menu"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-blue-400/50 hover:bg-white/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
          <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {mounted && createPortal(panel, document.body)}
    </div>
  );
}
