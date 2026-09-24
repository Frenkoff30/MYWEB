"use client";
import Image from "next/image";
import { PROJECTS } from "../projects";

/** Jak dlouho trvá jedno kolo pásu. Delší = klidnější pohyb. */
const DURATION = "58s";

/** Rámeček prohlížeče s ukázkou. Záměrně bez popisků – mluví obrázek. */
function Shot({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Otevřít web ${project.name}`}
      className="shot group block w-[270px] shrink-0 px-3 sm:w-[400px] lg:w-[460px]"
    >
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/60 transition duration-500 group-hover:border-blue-400/40 group-hover:shadow-blue-500/20">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.05] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="ml-2 h-3 flex-1 rounded-full bg-white/[0.07]" />
        </div>
        <div className="relative aspect-[209/100]">
          <Image
            src={project.shot}
            alt={`Web ${project.name} od Webo Studio`}
            fill
            sizes="(max-width: 640px) 270px, (max-width: 1024px) 400px, 460px"
            className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
          />
        </div>
        {/* jemný přejezd světla při najetí */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full"
        />
      </div>
    </a>
  );
}

/**
 * Nekonečná rampa hotových realizací. Seznam je vykreslený dvakrát za sebou
 * a animace posune stopu přesně o polovinu – napojení je proto neznatelné.
 * Mírné naklonění v perspektivě dává pásu hloubku.
 */
export default function ProjectsMarquee() {
  return (
    <div className="[perspective:1600px]">
      <div className="marquee-mask rail group relative overflow-hidden py-6 [transform:rotateX(7deg)]">
        <div
          className="marquee-track items-center group-hover:[animation-play-state:paused]"
          style={{ animationDuration: DURATION }}
        >
          {[...PROJECTS, ...PROJECTS].map((project, i) => (
            <Shot key={`${project.name}-${i}`} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
