import TechStack from "@/components/TechStack";

export const metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-accent">Skills</p>
      <h1 className="mt-2 mb-8 text-3xl font-bold tracking-tight">What I work with</h1>
      <TechStack />
    </div>
  );
}