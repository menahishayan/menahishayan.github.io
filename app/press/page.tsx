import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Press from "@/components/sections/Press";
import Contact from "@/components/sections/Contact";
import { PageCrossLinks } from "@/components/ui/PageCrossLinks";
import { commencementPhotos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Press — Shayan Menahi | Commencement Speech & Media Coverage",
  description:
    "Press coverage and the Northeastern University 2026 graduate commencement address delivered by Shayan Menahi, with photos and story.",
  alternates: {
    canonical: "/press",
  },
  openGraph: {
    title: "Press — Shayan Menahi",
    description:
      "Northeastern University 2026 graduate commencement address, press coverage, and photos.",
    type: "article",
    url: "https://tech.menahishayan.com/press",
    images: commencementPhotos.map((photo) => photo.src),
  },
};

export default function PressPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <div className="pt-24">
        <Press />
      </div>
      <PageCrossLinks current="/press" />
      <Contact showNumber={false} />
    </main>
  );
}
