"use client";

import { useRef } from "react";

export default function Spotlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    node.style.setProperty("--spot-x", `${x}%`);
    node.style.setProperty("--spot-y", `${y}%`);
    node.style.setProperty("--spot-opacity", "1");
  };

  const handleLeave = () => {
    ref.current?.style.setProperty("--spot-opacity", "0");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative ${className}`}
      style={
        {
          "--spot-x": "50%",
          "--spot-y": "50%",
          "--spot-opacity": "0",
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden transition-opacity duration-500"
        style={{
          opacity: "var(--spot-opacity)",
          maskImage:
            "radial-gradient(420px circle at var(--spot-x) var(--spot-y), black 0%, black 35%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(420px circle at var(--spot-x) var(--spot-y), black 0%, black 35%, transparent 75%)",
          background:
            "radial-gradient(420px circle at var(--spot-x) var(--spot-y), rgba(96,165,250,0.16), rgba(248,113,113,0.08) 45%, transparent 75%)",
          filter: "blur(36px)",
        }}
      />
      {children}
    </div>
  );
}
