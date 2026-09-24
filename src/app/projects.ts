/** Hotové realizace. Jeden zdroj pravdy – používá je hero na úvodu
 *  i kolotoč na stránce /portfolio. */
export type Project = {
  name: string;
  href: string;
  shot: string;
  logo?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "FC Hlinsko",
    href: "https://fchlinsko.cz/",
    logo: "/images/others/znak-fchlinsko.png",
    shot: "/images/others/hlinskoportfolio.png",
  },
  {
    name: "GRAVIX",
    href: "https://www.gravixstore.cz/",
    logo: "/images/others/gravix-logo2.webp",
    shot: "/images/others/gravixukazka.png",
  },
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
    name: "RACCOONS Hlinsko",
    href: "https://raccoonweb.vercel.app/",
    logo: "/images/others/raccoon-full.png",
    shot: "/images/others/raccoonportfolio.png",
  },
  {
    name: "Lom Srní",
    href: "https://lomweb.vercel.app/",
    shot: "/images/others/lomportfolio.png",
  },
];
