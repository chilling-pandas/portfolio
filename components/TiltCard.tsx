"use client";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
  max?: number; // max tilt in degrees
};

export default function TiltCard({ children, className = "", as = "div", max = 6 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as as React.ElementType;

  const active = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function onMove(e: React.PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el || !active()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <Tag ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className={`tilt ${className}`}>
      {children}
      <span className="tilt-glare" aria-hidden />
    </Tag>
  );
}