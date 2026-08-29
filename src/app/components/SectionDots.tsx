"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** Sekce úvodní stránky. Podstránky (O nás, Portfolio, Recenze, FAQ) mají
 *  jen jednu sekci, takže se boční navigace nezobrazuje vůbec. */
const HOME_SECTIONS = [
  { id: "hero", label: "Úvod" },
  { id: "problem", label: "Proč web" },
  { id: "proces", label: "Jak pracujeme" },
  { id: "sluzby", label: "Služby" },
  { id: "kontakt", label: "Kontakt" },
];

export default function SectionDots() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    HOME_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  if (!isHome) return null;

  return (
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 sm:flex">
      {HOME_SECTIONS.map(({ id, label }) => (
        <a key={id} href={`#${id}`} title={label} className="group flex items-center justify-end gap-2">
          <span
            className={`text-xs transition-all duration-200 ${
              active === id ? "text-white opacity-100" : "text-neutral-500 opacity-0 group-hover:opacity-100"
            }`}
          >
            {label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? "h-3 w-3 bg-blue-400 shadow-md shadow-blue-500/60"
                : "h-1.5 w-1.5 bg-white/25 group-hover:bg-white/60"
            }`}
          />
        </a>
      ))}
    </div>
  );
}
