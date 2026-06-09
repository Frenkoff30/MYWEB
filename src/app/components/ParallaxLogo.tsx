"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParallaxLogo({ speed = 0.3, className }: { speed?: number; className: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (window.innerHeight / 2 - center) * speed;
      el.style.transform = `translateY(calc(-50% + ${offset}px))`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ transform: "translateY(-50%)" }}>
      <Image src="/images/logo/logo.png" alt="" width={520} height={520} className="h-full w-full" />
    </div>
  );
}
