"use client";
import { useState } from "react";
import { site } from "@/data/site";

const input =
  "w-full rounded-lg border border-line bg-bg px-4 py-2.5 text-sm text-text placeholder:text-muted/60 focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "unset">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!site.formEndpoint) return setStatus("unset");
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-2xl border border-line bg-panel p-6 sm:p-8">
      <h3 className="text-lg font-semibold">Send me a message</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm text-muted">
          Full name *
          <input name="name" required placeholder="Enter your name" className={input} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm text-muted">
          Email address *
          <input name="email" type="email" required placeholder="name@company.com" className={input} />
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-sm text-muted">
        Subject
        <input name="subject" placeholder="Inquiry topic" className={input} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm text-muted">
        Message *
        <textarea name="message" required rows={5} placeholder="How can we collaborate?" className={input} />
      </label>
      {/* spam trap: real people never see or fill this */}
      <input name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <button type="submit" disabled={status === "sending"}
        className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg hover:opacity-90 disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p role="status" className="min-h-5 text-sm text-muted">
        {status === "sent" && "Thanks, your message was sent."}
        {status === "error" && "Something went wrong. Please try again or use the links on the right."}
        {status === "unset" && "The form isn't connected yet. Use the links on the right for now."}
      </p>
    </form>
  );
}