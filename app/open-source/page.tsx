import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import OpenSource from "@/components/sections/OpenSource";
import Contact from "@/components/sections/Contact";
import { PageCrossLinks } from "@/components/ui/PageCrossLinks";

export const metadata: Metadata = {
  title: "Open Source — Shayan Menahi | Projects & Contributions",
  description:
    "Open source projects built and maintained by Shayan Menahi, spanning TypeScript, Python, and JavaScript tooling used by developers worldwide.",
  alternates: {
    canonical: "/open-source",
  },
  openGraph: {
    title: "Open Source — Shayan Menahi",
    description: "Open source projects and contributions by Shayan Menahi.",
    type: "profile",
    url: "https://tech.menahishayan.com/open-source",
  },
};

export default function OpenSourcePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <div className="pt-24">
        <OpenSource />
      </div>
      <PageCrossLinks current="/open-source" />
      <Contact showNumber={false} />
    </main>
  );
}
