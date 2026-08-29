"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Logo v hlavičce. Na podstránce vede na úvodní stránku, na úvodní stránce
 *  vyroluje nahoru – jinak by kliknutí nedělalo nic, protože se nenaviguje. */
export default function LogoLink({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      aria-label="Webo – zpět na úvod"
      className={className}
      onClick={(e) => {
        if (pathname !== "/") return;
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
