"use client";
import { useEffect, useState } from "react";

export default function TypingText({ text, startDelay = 800 }: { text: string; startDelay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || done) return;
    if (displayed.length >= text.length) { setDone(true); return; }
    const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 75);
    return () => clearTimeout(t);
  }, [started, done, displayed, text]);

  return (
    <span className="font-mono text-xs text-neutral-400">
      {displayed}
      {!done && <span className="animate-pulse text-blue-400">|</span>}
    </span>
  );
}
