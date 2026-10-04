"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/data/site";
import ResumeButton from "@/components/ResumeButton";
import ResumeDrawer from "@/components/ResumeDrawer";

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const path = usePathname();
  return (
    <nav aria-label="Main" className="flex flex-col gap-1">
      {nav.map((item) => {
        const active = item.href === "/" ? path === "/" : path.startsWith(item.href);
        const base = "rounded px-3 py-2 text-sm";
        if (!item.ready)
          return (
            <span key={item.href} className={`${base} cursor-not-allowed text-muted/50`} title="Coming soon">
              {item.label}
            </span>
          );
        return (
          <Link key={item.href} href={item.href} onClick={onNavigate} aria-current={active ? "page" : undefined}
            className={`${base} ${active ? "bg-panel text-accent" : "text-muted hover:text-text"}`}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function TopLinks() {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {site.links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
          className="rounded-md px-3 py-1.5 text-sm text-muted hover:text-accent">
          {l.label}
        </a>
      ))}
      {site.resumeUrl && (
        <ResumeButton className="ml-2 rounded-lg bg-accent px-4 py-1.5 text-sm font-semibold text-bg hover:opacity-90" />
      )}
    </div>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[240px_1fr]">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen flex-col gap-6 border-r border-line p-5 lg:flex">
        <Link href="/" className="font-mono text-sm text-text">{site.initials} / {site.name}</Link>
        <NavList />
      </aside>

      {/* Mobile top bar + drawer */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-line bg-bg/90 px-4 py-3 backdrop-blur lg:hidden">
        <Link href="/" className="font-mono text-sm">{site.initials}</Link>
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu"
          className="rounded border border-line px-3 py-1 text-sm text-muted">
          {open ? "Close" : "Menu"}
        </button>
      </header>
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-[53px] z-10 flex flex-col gap-4 border-b border-line bg-bg p-4 lg:hidden">
          <NavList onNavigate={() => setOpen(false)} />
          <div className="border-t border-line pt-4"><TopLinks /></div>
        </div>
      )}

      {/* Right column: top-right links bar (desktop) + page content */}
      <div className="min-w-0">
        <div className="sticky top-0 z-10 hidden justify-end bg-bg/80 px-8 py-4 backdrop-blur lg:flex">
          <TopLinks />
        </div>
        <main className="mx-auto w-full min-w-0 max-w-6xl px-4 py-10 sm:px-8 lg:py-8">{children}</main>
      </div>
      <ResumeDrawer />
    </div>
  );
}