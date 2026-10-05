import { site } from "@/data/site";
import TechStack from "@/components/TechStack";
import ContactForm from "@/components/ContactForm";
import NetworkBackground from "@/components/NetworkBackground";
import HiTyping from "@/components/HiTyping";
import ResumeButton from "@/components/ResumeButton";
import FeaturedProject from "@/components/FeaturedProject";

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-widest text-accent">{children}</p>;
}

export default function Overview() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero */}
      <section className="relative isolate grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <NetworkBackground />
        <div>
          <HiTyping />
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 font-mono text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {site.badge}
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl">
            {site.headlineStart} <span className="color-cycle">{site.headlineAccent}</span> {site.headlineEnd}
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted">{site.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/projects" className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg hover:opacity-90">
              View my work
            </a>
            <a href="#contact" className="rounded-lg border border-line px-5 py-3 text-sm font-semibold text-muted hover:text-text">
              Get in touch
            </a>
            {site.resumeUrl && (
              <ResumeButton className="rounded-lg border border-line px-5 py-3 text-sm font-semibold text-muted hover:text-text" />
            )}
          </div>
        </div>

       <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-line bg-panel lg:ml-auto lg:mr-0">
  <div className="relative aspect-[4/5] w-full overflow-hidden">
    {site.photo ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={site.photo}
        alt={site.name}
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
    ) : (
      <div className="flex h-full items-center justify-center font-mono text-6xl text-line">{site.initials}</div>
          )}
          {/* green tint */}
          <div className="absolute inset-0 bg-accent/10 mix-blend-color" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-bg/30" aria-hidden />
          {/* small overlay text */}
          <div className="absolute left-3 top-3 font-mono text-[10px] leading-4 tracking-wider text-accent/80" aria-hidden>
            <p>ROLE: ML_BACKEND</p>
            <p>LOC: {site.location.toUpperCase()}</p>
          </div>
          <p className="absolute right-3 top-3 font-mono text-xs text-accent/80" aria-hidden>{site.initials} // 2026</p>
        </div>
        <div className="absolute inset-x-3 bottom-3 rounded-lg border border-line bg-bg/80 p-3 backdrop-blur">
          <p className="font-semibold">{site.name}</p>
          <p className="font-mono text-sm text-accent">{site.role}</p>
          <p className="mt-1 text-xs text-muted">{site.location}</p>
        </div>
      </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20">
        <Label>About me</Label>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Who I am?</h2>
        <div className="mt-6 flex max-w-prose flex-col gap-4 text-muted">
          {site.about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* Tech stack */}
      <section id="stack" className="scroll-mt-20">
        <Label>Tech stack</Label>
        <h2 className="mt-2 mb-6 text-3xl font-bold tracking-tight">What I work with</h2>
        <TechStack />
      </section>
      {/* Project demo */}
  
      <section id="demo" className="scroll-mt-20">
        <Label>Project demo</Label>
        <h2 className="mt-2 mb-6 text-3xl font-bold tracking-tight">See it in action</h2>
        <FeaturedProject />
      </section>
      
      {/* Contact */}
      <section id="contact" className="scroll-mt-20">
        <Label>Get in touch</Label>
        <h2 className="mt-2 mb-6 text-3xl font-bold tracking-tight">Let&apos;s build something</h2>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <ContactForm />
          <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
  <h3 className="text-lg font-semibold">Direct contact</h3>
  <ul className="mt-5 flex flex-col gap-3 text-sm">
    <li className="flex items-center gap-3 rounded-lg border border-line bg-bg p-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
      </span>
      <div className="min-w-0">
        <span className="block font-mono text-[10px] tracking-wider text-muted">EMAIL ADDRESS</span>
        <a href={`mailto:${site.email}`} className="block break-all text-[13px] font-medium hover:text-accent sm:text-sm">{site.email}</a>
      </div>
    </li>
    <li className="flex items-center gap-3 rounded-lg border border-line bg-bg p-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
      </span>
      <div className="min-w-0">
        <span className="block font-mono text-[10px] tracking-wider text-muted">CONTACT NUMBER</span>
        <a href={`tel:${site.phone}`} className="block font-medium hover:text-accent">{site.phone}</a>
      </div>
    </li>
    <li className="flex items-center gap-3 rounded-lg border border-line bg-bg p-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
      </span>
      <div className="min-w-0">
        <span className="block font-mono text-[10px] tracking-wider text-muted">PRIMARY LOCATION</span>
        <span className="block font-medium">{site.location} ({site.relocation})</span>
      </div>
    </li>
  </ul>
  <ul className="mt-4 flex flex-wrap gap-3 border-t border-line pt-4 text-sm">
    {site.links.map((l) => (
      <li key={l.href}>
        <a href={l.href} target="_blank" rel="noopener noreferrer" className="rounded-md border border-line px-3 py-1.5 text-muted hover:text-accent">
          {l.label}
        </a>
      </li>
    ))}
  </ul>
</div>
        </div>
      </section>
    </div>
  );
}