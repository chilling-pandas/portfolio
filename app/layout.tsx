import type { Metadata } from "next";
import "./globals.css";
import Shell from "@/components/Shell";
import { site } from "@/data/site";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.intro,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><CursorGlow /><Shell>{children}</Shell></body>
    </html>
  );
}
