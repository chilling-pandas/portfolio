"use client";
import { useEffect, useState } from "react";

const FULL = "Hi, I'm Sourav";
const NAME_AT = 8; // where "Sourav" starts
const PAUSES = new Set([2, 7]); // hold after "Hi" and after "Hi, I'm"

export default function HiTyping() {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(FULL.length);
      return;
    }
    if (n >= FULL.length) return;
    const t = setTimeout(() => setN(n + 1), n === 0 ? 500 : PAUSES.has(n) ? 800 : 110);
    return () => clearTimeout(t);
  }, [n]);

  return (
    <p className="mb-5 min-h-[2.5rem] text-2xl text-muted sm:text-3xl">
      <span className="sr-only">{FULL}</span>
      <span aria-hidden>
        {FULL.slice(0, Math.min(n, NAME_AT))}
        <span className="font-semibold text-accent">{FULL.slice(NAME_AT, n)}</span>
        <span className="caret" />
      </span>
    </p>
  );
}