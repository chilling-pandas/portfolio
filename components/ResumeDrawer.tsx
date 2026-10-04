"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

export default function ResumeDrawer() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false); // the PDF loads only after the first open
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  // Any <ResumeButton /> on the site opens the drawer.
  useEffect(() => {
    const onOpen = () => {
      returnFocus.current = document.activeElement as HTMLElement | null;
      setLoaded(true);
      setOpen(true);
    };
    window.addEventListener("open-resume", onOpen);
    return () => window.removeEventListener("open-resume", onOpen);
  }, []);

  // While open: Esc closes, page scroll is locked, focus moves in and returns after.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      returnFocus.current?.focus();
    };
  }, [open]);

  if (!site.resumeUrl) return null;

  return (
    <>
      {/* Dim backdrop: click to close */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] transition-[opacity,visibility] duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* The drawer: slides in from the right edge */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Resume"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-full flex-col border-l border-line bg-bg shadow-2xl shadow-black/50 transition-[transform,visibility] duration-300 ease-out sm:w-[44rem] ${
          open ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        <div className="flex h-12 shrink-0 items-center gap-4 border-b border-line pl-4 pr-16 text-sm">
          <span className="font-mono text-xs text-accent">Resume</span>
          <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">
            Open in new tab
          </a>
          <a href={site.resumeUrl} download className="text-muted hover:text-accent">
            Download
          </a>
        </div>
        {loaded && (
          <iframe
            src={`${site.resumeUrl}#view=FitH`}
            title={`${site.name} resume`}
            className="min-h-0 w-full flex-1 bg-white"
          />
        )}
      </aside>

      {/* Floating close button: exists only while the drawer is open */}
      {open && (
        <button
          ref={closeRef}
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close resume"
          className="fixed right-3 top-1.5 z-[60] flex h-9 w-9 items-center justify-center rounded-full bg-accent text-bg shadow-lg shadow-accent/30 hover:opacity-90"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      )}
    </>
  );
}