import { experience } from "@/data/experience";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-accent">Experience</p>
      <h1 className="mt-2 mb-8 text-3xl font-bold tracking-tight">Where I&apos;ve worked</h1>
      <ol className="relative flex flex-col gap-5 border-l border-line pl-6">
        {experience.map((r) => (
          <li key={r.company + r.start} className="relative rounded-xl border border-line bg-panel p-6">
            <span className="absolute -left-[31px] top-8 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
            <p className="font-mono text-xs text-accent">
              {r.start} – {r.end}
              {r.location && <span className="text-muted"> · {r.location}</span>}
            </p>
            <h2 className="mt-1 text-lg font-semibold">{r.role}</h2>
            <p className="text-muted">{r.company}</p>
            {r.points.length > 0 && (
              <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm text-muted marker:text-accent">
                {r.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            )}
            {r.tech.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {r.tech.map((t) => (
                  <li key={t} className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted">{t}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}