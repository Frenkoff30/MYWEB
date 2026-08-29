"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Odkaz v navigaci. Když už na dané stránce jsme, kliknutí vyroluje nahoru –
 *  jinak by se nestalo nic, protože není kam navigovat. */
export default function NavLink({
  href,
  children,
  className = "",
  activeClassName = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  ariaLabel?: string;
}) {
  const pathname = usePathname();
  const isActive = !href.includes("#") && href === pathname;

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      aria-current={isActive ? "page" : undefined}
      className={`${className} ${isActive ? activeClassName : ""}`}
      onClick={(e) => {
        if (!isActive) return;
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
      }}
    >
      {children}
    </Link>
  );
}
