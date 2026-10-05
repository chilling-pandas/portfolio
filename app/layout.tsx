import type { Metadata } from "next";
import "./globals.css";
import Shell from "@/components/Shell";
import CursorGlow from "@/components/CursorGlow";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  // Home page shows `title.default`; other pages show "Projects | Sourav Manna" etc.
  title: { default: title, template: `%s | ${site.name}` },
  description: site.intro,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.siteUrl }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: `${site.name} Portfolio`,
    title,
    description: site.intro,
    images: site.photo ? [site.photo] : undefined,
  },
  twitter: { card: "summary", title, description: site.intro },
  // Filled in from data/site.ts once Google Search Console gives you the code.
  verification: site.googleVerification ? { google: site.googleVerification } : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        <CursorGlow />
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}