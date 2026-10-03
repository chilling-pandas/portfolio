import { skillGroups, type SkillGroup } from "@/data/skills";
import TiltCard from "@/components/TiltCard";
import TagIcon from "@/components/TagIcon";

function Ticker({ group }: { group: SkillGroup }) {
  // Repeat short lists so the row is always wider than the box and never shows a gap.
  const reps = Math.ceil(16 / group.items.length);
  const row = Array.from({ length: reps }).flatMap((_, r) => group.items.map((t) => ({ t, r })));
  const half = (dup: boolean) => (
    <ul
      className={`flex shrink-0 items-center gap-2 pr-2 ${dup ? "ticker-dup" : ""}`}
      aria-hidden={dup || undefined}
    >
      {row.map(({ t, r }) => (
        <li
          key={`${r}-${t}`}
          aria-hidden={r > 0 || undefined}
          className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md border border-line px-2.5 py-1 text-sm text-muted ${r > 0 ? "ticker-rep" : ""}`}
        >
          <TagIcon name={t} />
          {t}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="ticker mt-3 overflow-hidden">
      <div className="ticker-track" style={{ animationDuration: `${row.length * 2.5}s` }}>
        {half(false)}
        {half(true)}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skillGroups.map((g) => (
        <TiltCard key={g.name} className="min-w-0 rounded-xl border border-line bg-panel p-5">
          <h3 className="font-mono text-xs text-accent">
            <TagIcon name={g.name} className="mr-1.5 inline h-4 w-4 text-accent" />
            {g.name}
          </h3>
          {g.scroll ? (
            <Ticker group={g} />
          ) : (
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1 text-sm text-muted">
                  <TagIcon name={t} />
                  {t}
                </li>
              ))}
            </ul>
          )}
        </TiltCard>
      ))}
    </div>
  );
}