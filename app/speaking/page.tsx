import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Speaking from "@/components/sections/Speaking";
import PhotoGallery from "@/components/sections/PhotoGallery";
import Contact from "@/components/sections/Contact";
import { PageCrossLinks } from "@/components/ui/PageCrossLinks";

export const metadata: Metadata = {
  title: "Speaking — Shayan Menahi | International Tech Speaker",
  description:
    "13+ conference talks across React Summit Amsterdam, React India, FOSS United, and more. Book Shayan Menahi as a speaker on AI products and engineering.",
  alternates: {
    canonical: "/speaking",
  },
  openGraph: {
    title: "Speaking — Shayan Menahi",
    description:
      "International speaker with 13+ conference talks on AI products and engineering.",
    type: "profile",
    url: "https://tech.menahishayan.com/speaking",
  },
};

export default function SpeakingPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <div className="pt-24">
        <Speaking />
      </div>
      <PhotoGallery />
      <PageCrossLinks current="/speaking" />
      <Contact showNumber={false} />
    </main>
  );
}
