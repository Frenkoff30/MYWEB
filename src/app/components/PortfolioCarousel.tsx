"use client";
import { useRef, useState } from "react";
import Image from "next/image";

type Project = {
  name: string;
  href: string;
  shot: string;
  logo?: string;
};

const projects: Project[] = [
  {
    name: "KAMA Střechy",
    href: "https://frenkoff30.github.io/KAMASTRECHYWEB/",
    logo: "/images/others/KAMASTRECHYLOGO.png",
    shot: "/images/others/ukazkakama.png",
  },
  {
    name: "Truhlářství Šustr",
    href: "https://truhlarsvisustrweb.vercel.app",
    logo: "/images/others/logotruhlarstvi.png",
    shot: "/images/others/ukazkatruhlarstvi.png",
  },
  {
    name: "GRAVIX",
    href: "https://www.gravixstore.cz/",
    logo: "/images/others/gravix-logo2.webp",
    shot: "/images/others/gravixukazka.png",
  },
];

/**
 * Geometrie kolotoče. Hodnoty jsou zvolené tak, aby se boční karty
 * vešly celé (nepřekrývá je prostřední karta ani okraj sekce):
 *   posun + polovina zmenšené šířky < 50 % šířky kontejneru
 *   posun − polovina zmenšené šířky > 50 % šířky prostřední karty
 * SIDE_OFFSET je v % šířky karty (translateX se počítá z vlastní šířky prvku).
 */
const SIDE_OFFSET = 80;
const SIDE_SCALE = 0.55;

/** Nejkratší vzdálenost po kruhu: pro 3 položky vrací -1, 0 nebo 1. */
function circularOffset(index: number, active: number, count: number) {
  let d = index - active;
  if (d > count / 2) d -= count;
  if (d < -count / 2) d += count;
  return d;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl bg-white/[0.03] p-5 ring-1 ring-white/10 transition-shadow duration-300">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white">
          Hotová realizace
        </span>
        {project.logo && (
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            width={120}
            height={48}
            className="h-8 w-auto opacity-90"
          />
        )}
      </div>
      {/* Poměr rámečku odpovídá screenshotům (~2,09:1) + object-contain,
          aby byl vždy vidět celý web bez ořezu. */}
      <div className="relative aspect-[209/100] overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] shadow-lg shadow-black/40">
        <Image
          src={project.shot}
          alt={`Web ${project.name}`}
          fill
          sizes="(max-width: 640px) 86vw, 480px"
          className="object-contain"
        />
      </div>
      <p className="text-base font-semibold text-white">{project.name}</p>
    </div>
  );
}

export default function PortfolioCarousel() {
  const count = projects.length;
  const [active, setActive] = useState(0);
  const touchX = useRef<number | null>(null);

  const rotate = (dir: number) => setActive((a) => (a + dir + count) % count);

  return (
    <div>
      <div
        className="relative"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) rotate(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {/* Neviditelná karta drží výšku – ostatní jsou nad ní absolutně.
            relative + overflow-hidden = nic nepřetéká mimo sekci. */}
        <div className="relative flex justify-center overflow-hidden py-3">
          <div className="invisible w-[86%] sm:w-[42%]" aria-hidden>
            <ProjectCard project={projects[0]} />
          </div>

          {projects.map((project, i) => {
            const offset = circularOffset(i, active, count);
            const isActive = offset === 0;
            const isNeighbour = Math.abs(offset) === 1;

            return (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={!isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={(e) => {
                  // boční karta se nejdřív přesune doprostřed, neotevírá odkaz
                  if (!isActive) {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                style={{
                  transform: `translate(-50%, -50%) translateX(${offset * SIDE_OFFSET}%) scale(${
                    isActive ? 1 : SIDE_SCALE
                  })`,
                  zIndex: isActive ? 20 : 10,
                }}
                className={`absolute left-1/2 top-1/2 w-[86%] cursor-pointer transition-all duration-500 ease-out sm:w-[42%] ${
                  isActive
                    ? "opacity-100 hover:-translate-y-1 [&>div]:hover:shadow-xl [&>div]:hover:shadow-blue-500/10 [&>div]:hover:ring-blue-400/30"
                    : isNeighbour
                      ? // na mobilu se sousedi nevejdou celí → schované
                        "pointer-events-none opacity-0 sm:pointer-events-auto sm:opacity-50 sm:hover:opacity-80"
                      : "pointer-events-none opacity-0"
                }`}
              >
                <ProjectCard project={project} />
              </a>
            );
          })}
        </div>

        {/* Šipky */}
        <button
          type="button"
          aria-label="Předchozí ukázka"
          onClick={() => rotate(-1)}
          className="absolute left-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-neutral-950/80 text-white backdrop-blur-sm transition hover:border-blue-400/50 hover:bg-neutral-900 sm:h-12 sm:w-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Další ukázka"
          onClick={() => rotate(1)}
          className="absolute right-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-neutral-950/80 text-white backdrop-blur-sm transition hover:border-blue-400/50 hover:bg-neutral-900 sm:h-12 sm:w-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Tečky */}
      <div className="mt-6 flex justify-center gap-2.5">
        {projects.map((project, i) => (
          <button
            key={project.name}
            type="button"
            aria-label={`Ukázka ${i + 1}: ${project.name}`}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              active === i ? "h-2.5 w-6 bg-blue-400" : "h-2.5 w-2.5 bg-white/25 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
