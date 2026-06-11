"use client";
import { useEffect, useRef, ReactNode } from "react";

export default function ScrollHeader({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const progress = Math.min(window.scrollY / 200, 1);
      const padding = 1 - progress * 0.5;
      const scale = 1 - progress * 0.1;
      el.style.paddingTop = `${padding}rem`;
      el.style.paddingBottom = `${padding}rem`;
      el.style.transform = `scale(${scale})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={ref}
      className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      style={{ transition: "padding 0.2s ease-out, transform 0.2s ease-out", transformOrigin: "top center" }}
    >
      {children}
    </nav>
  );
}
