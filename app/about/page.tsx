import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { PageCrossLinks } from "@/components/ui/PageCrossLinks";

export const metadata: Metadata = {
  title: "About — Shayan Menahi | AI Product Manager & Speaker",
  description:
    "Shayan Menahi ships AI products at scale, speaks on stages across continents, and builds open source tools. AI PM at T-Mobile, MS Engineering Management at Northeastern University.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Shayan Menahi",
    description:
      "AI Product Manager at T-Mobile, international speaker, and open source builder.",
    type: "profile",
    url: "https://tech.menahishayan.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <div className="pt-24">
        <About />
      </div>
      <PageCrossLinks current="/about" />
      <Contact showNumber={false} />
    </main>
  );
}
