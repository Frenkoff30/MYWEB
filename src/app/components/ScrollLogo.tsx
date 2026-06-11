"use client";
import { useEffect, useRef, ReactNode } from "react";

export default function ScrollLogo({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const progress = Math.min(window.scrollY / 200, 1);
      const scale = 1 - progress * 0.2;
      const opacity = 1 - progress * 0.3;
      el.style.transform = `scale(${scale})`;
      el.style.opacity = `${opacity}`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} style={{ transformOrigin: "left center", transition: "transform 0.2s ease-out, opacity 0.2s ease-out" }}>
      {children}
    </div>
  );
}
