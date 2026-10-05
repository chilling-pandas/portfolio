import Link from "next/link";
import { projects } from "@/data/projects";
import TiltCard from "@/components/TiltCard";

// Home-page project demo card. It reads everything from data/projects.ts,
// so edit the project there (demo link, GitHub link, screenshot) and this updates.
export default function FeaturedProject({ slug = "smartlogix-ai" }: { slug?: string }) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return null;

  return (
    <TiltCard max={3} className="overflow-hidden rounded-2xl border border-line bg-panel">
      <div className={p.image ? "grid lg:grid-cols-[1.1fr_1fr]" : ""}>
        {p.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.image}
            alt={`${p.title} demo screenshot`}
            loading="lazy"
            className="h-full max-h-80 w-full border-b border-line object-cover object-top lg:max-h-none lg:border-b-0 lg:border-r"
          />
        )}
        <div className="p-6 sm:p-8">
          <p className="font-mono text-xs text-accent">{p.category}</p>
          <h3 className="mt-2 text-2xl font-semibold">{p.title}</h3>
          <p className="mt-2 text-muted">{p.summary}</p>
          <ul className="mt-5 flex list-disc flex-col gap-2 pl-5 text-sm text-muted marker:text-accent">
            {p.highlights.slice(0, 2).map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <li key={t} className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent px-4 py-2 font-semibold text-bg hover:opacity-90"
              >
                Live demo →
              </a>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-line px-4 py-2 font-semibold text-muted hover:text-text"
              >
                GitHub →
              </a>
            )}
            <Link href="/projects" className="px-1 py-2 text-muted hover:text-accent">
              All projects →
            </Link>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}