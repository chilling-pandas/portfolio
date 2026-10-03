import CertificateList from "@/components/CertificateList";

export const metadata = { title: "Certificates & Achievements" };

export default function CertificatesPage() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-accent">Certificates &amp; Achievements</p>
      <h1 className="mt-2 mb-8 text-3xl font-bold tracking-tight">Proof of learning</h1>
      <CertificateList />
    </div>
  );
}