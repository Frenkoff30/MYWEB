"use client";
import { useEffect } from "react";

export default function CardSpotlightGlobal() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>("[data-spotlight]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--sx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--sy", `${e.clientY - rect.top}px`);
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return null;
}
