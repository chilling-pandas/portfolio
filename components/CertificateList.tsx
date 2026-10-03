"use client";
import { useState } from "react";
import { certificates } from "@/data/certificates";
import TiltCard from "@/components/TiltCard";
import TagIcon, { Award, Trophy } from "@/components/TagIcon";

const tabs = [
  { id: "all", label: "All" },
  { id: "certificate", label: "Certificates" },
  { id: "achievement", label: "Achievements" },
] as const;

export default function CertificateList() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("all");
  const items = certificates.filter((c) => tab === "all" || c.type === tab);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            aria-pressed={tab === t.id}
            className={`rounded-lg border px-4 py-1.5 text-sm ${
              tab === t.id ? "border-accent bg-accent/10 text-accent" : "border-line text-muted hover:text-text"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((c) => (
          <TiltCard as="li" key={c.title} className="flex flex-col rounded-xl border border-line bg-panel p-5">
            <p className="inline-flex items-center gap-1.5 rounded-md border border-line bg-bg px-2 py-1 font-mono text-xs text-accent">
              {c.type === "achievement" ? <Trophy className="h-3.5 w-3.5" /> : <Award className="h-3.5 w-3.5" />}
              {c.type === "achievement" ? "Achievement" : "Certificate"} · {c.category}
            </p>
            <h2 className="mt-2 font-medium">{c.title}</h2>
            {(c.issuer || c.year) && (
              <p className="mt-1 text-sm text-muted">{[c.issuer, c.year].filter(Boolean).join(" · ")}</p>
            )}
            {c.description && <p className="mt-3 text-sm text-muted">{c.description}</p>}
            {c.file && (
              <a href={c.file} target="_blank" rel="noopener noreferrer" className="mt-auto pt-4 text-sm text-accent hover:underline">
                View certificate →
              </a>
            )}
          </TiltCard>
        ))}
      </ul>
    </div>
  );
}