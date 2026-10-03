import { education } from "@/data/education";

export const metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-accent">Education</p>
      <h1 className="mt-2 mb-8 text-3xl font-bold tracking-tight">Where I studied</h1>
      <ol className="relative flex flex-col gap-5 border-l border-line pl-6">
        {education.map((e) => (
          <li key={e.degree} className="relative rounded-xl border border-line bg-panel p-6">
            <span className="absolute -left-[31px] top-8 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
            {e.period && <p className="font-mono text-xs text-accent">{e.period}</p>}
            <h2 className="mt-1 text-lg font-semibold">{e.degree}</h2>
            <p className="mt-1 text-muted">{e.school}</p>
            <p className="mt-3 text-sm">
              <span className="font-medium text-accent">{e.score}</span>
              {e.note && <span className="text-muted"> · {e.note}</span>}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}