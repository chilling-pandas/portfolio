"use client";
import { useEffect, useState } from "react";

const FULL = "Hi, I'm Sourav";
const NAME_AT = 8; // where "Sourav" starts
const PAUSES = new Set([2, 7]); // hold after "Hi" and after "Hi, I'm"

export default function HiTyping() {
  const [n, setN] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(FULL.length);
      return;
    }
    let delay: number;
    let next: () => void;
    if (!deleting) {
      if (n >= FULL.length) {
        delay = 2500; // hold the full line
        next = () => setDeleting(true);
      } else {
        delay = n === 0 ? 400 : PAUSES.has(n) ? 800 : 110;
        next = () => setN(n + 1);
      }
    } else if (n <= 0) {
      delay = 300;
      next = () => setDeleting(false);
    } else {
      delay = 45; // delete quickly
      next = () => setN(n - 1);
    }
    const t = setTimeout(next, delay);
    return () => clearTimeout(t);
  }, [n, deleting]);

  return (
    <p className="mb-5 min-h-[3rem] text-3xl text-muted sm:text-4xl">
      <span className="sr-only">{FULL}</span>
      <span aria-hidden>
        {FULL.slice(0, Math.min(n, NAME_AT))}
        <span className="font-semibold text-accent">{FULL.slice(NAME_AT, n)}</span>
        <span className="caret" />
      </span>
    </p>
  );
}