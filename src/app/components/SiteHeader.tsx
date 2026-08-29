import Image from "next/image";
import Link from "next/link";
import ScrollLogo from "./ScrollLogo";
import ScrollHeader from "./ScrollHeader";
import ScrollProgress from "./ScrollProgress";
import LogoLink from "./LogoLink";

/** Odkazy sdílené hlavičkou i patičkou – jediné místo, kde se navigace udržuje. */
export const NAV_LINKS = [
  { href: "/o-nas", label: "O nás" },
  { href: "/#proces", label: "Spolupráce" },
  { href: "/#sluzby", label: "Služby" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/recenze", label: "Recenze" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteHeader() {
  return (
    <>
      <ScrollProgress />
      <header
        className="sticky top-0 z-10 bg-neutral-950/60 backdrop-blur-xl"
        style={{
          borderBottom: "1px solid transparent",
          backgroundImage:
            "linear-gradient(rgba(10,12,16,0.6), rgba(10,12,16,0.6)), linear-gradient(to right, rgba(96,165,250,0.2), rgba(248,113,113,0.1), rgba(96,165,250,0.05))",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        <ScrollHeader>
          <LogoLink className="group flex items-center gap-3">
            <ScrollLogo>
              <Image
                src="/images/logo/logoweb.png"
                alt="Webo logo"
                width={220}
                height={72}
                className="glitch-hover h-10 w-auto transition duration-300 group-hover:scale-105 sm:h-12"
              />
            </ScrollLogo>
          </LogoLink>
          <div className="hidden gap-6 text-sm font-medium text-white md:flex lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/#kontakt"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-blue-500 hover:text-white"
          >
            Kontakt
          </Link>
        </ScrollHeader>
      </header>
    </>
  );
}
