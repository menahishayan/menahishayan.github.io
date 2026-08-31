import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { PageCrossLinks } from "@/components/ui/PageCrossLinks";

export const metadata: Metadata = {
  title: "Experience — Shayan Menahi | AI Product Manager at T-Mobile",
  description:
    "Shayan Menahi's work experience as an AI Product Manager, leading product strategy for T-Life AI at T-Mobile and driving ARR growth at Zenduty.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Experience — Shayan Menahi",
    description:
      "AI Product Manager at T-Mobile leading T-Life AI product strategy.",
    type: "profile",
    url: "https://tech.menahishayan.com/experience",
  },
};

export default function ExperiencePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <div className="pt-24">
        <Experience />
      </div>
      <PageCrossLinks current="/experience" />
      <Contact showNumber={false} />
    </main>
  );
}
