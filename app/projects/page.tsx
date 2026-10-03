import { projects } from "@/data/projects";
import TiltCard from "@/components/TiltCard";
import TagIcon from "@/components/TagIcon";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-accent">Projects</p>
      <h1 className="mt-2 mb-8 text-3xl font-bold tracking-tight">Things I&apos;ve built</h1>
      <ul className="grid gap-5 lg:grid-cols-2">
        {projects.map((p) => (
          <TiltCard as="li" key={p.slug} max={4} className="flex flex-col rounded-xl border border-line bg-panel p-6">
            <p className="inline-flex items-center gap-1.5 rounded-md border border-line bg-bg px-2 py-1 font-mono text-xs text-accent"><TagIcon name={p.category} />{p.category}</p>
            <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-muted">{p.summary}</p>
            <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm text-muted marker:text-accent">
              {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <li key={t} className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted">{t}</li>
              ))}
            </ul>
            {(p.github || p.demo) && (
              <div className="mt-5 flex gap-4 border-t border-line pt-4 text-sm">
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub →</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Live demo →</a>}
              </div>
            )}
          </TiltCard>
        ))}
      </ul>
    </div>
  );
}