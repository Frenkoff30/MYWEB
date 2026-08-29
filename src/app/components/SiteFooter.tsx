import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { NAV_LINKS } from "./SiteHeader";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <Image
          src="/images/logo/logo.png"
          alt="Webo logo"
          width={600}
          height={200}
          className="w-full max-w-[220px] h-auto"
        />

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-white">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className="transition hover:text-blue-300 hover:underline"
              activeClassName="!text-blue-400"
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink href="/#kontakt" className="transition hover:text-blue-300 hover:underline">
            Kontakt
          </NavLink>
        </div>

        <p className="text-sm text-white">© {new Date().getFullYear()} Webo Studio</p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-400">
          <Link href="/obchodni-podminky" className="transition hover:text-blue-300 hover:underline">
            Obchodní podmínky
          </Link>
          <Link href="/ochrana-udaju" className="transition hover:text-blue-300 hover:underline">
            Ochrana osobních údajů
          </Link>
        </div>
      </div>
    </footer>
  );
}
