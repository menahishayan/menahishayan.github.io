import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Contact from "@/components/sections/Contact";
import { featuredPress, commencementPhotos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Northeastern Commencement Speech 2026 — Shayan Menahi",
  description:
    "Shayan Menahi delivered the graduate commencement address at Northeastern University's 2026 commencement ceremony. Photos and the full story.",
  alternates: {
    canonical: "/press/commencement",
  },
  openGraph: {
    title: "Northeastern Commencement Speech 2026 — Shayan Menahi",
    description:
      "Shayan Menahi delivered the graduate commencement address at Northeastern University's 2026 commencement ceremony.",
    type: "article",
    url: "https://tech.menahishayan.com/press/commencement",
    images: commencementPhotos.map((photo) => photo.src),
  },
};

export default function CommencementPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <article className="pt-32 pb-20 bg-[#080808]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Link
            href="/#press"
            className="text-[#a0a0a0] hover:text-white text-sm font-body transition-colors"
          >
            ← Press
          </Link>

          <p className="text-[#e91e8c] text-xs font-display tracking-[0.25em] uppercase mb-3 mt-8">
            {featuredPress.outlet} · {featuredPress.date}
          </p>

          <h1
            className="font-display font-bold text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}
          >
            {featuredPress.title}
          </h1>

          {featuredPress.quote && (
            <blockquote className="text-[#c0c0c0] font-body text-base md:text-lg leading-relaxed mb-6 border-l-2 border-[#e91e8c]/40 pl-4 italic">
              “{featuredPress.quote}”
            </blockquote>
          )}

          <p className="text-[#a0a0a0] font-body text-sm leading-relaxed mb-10">
            Shayan was selected to deliver the graduate commencement address at
            Northeastern University&rsquo;s 2026 commencement ceremony, speaking to
            graduates and faculty alongside the university&rsquo;s undergraduate
            honorees.
          </p>

          {featuredPress.embed && (
            <div className="aspect-video w-full bg-black rounded-xl overflow-hidden mb-12">
              <iframe
                src={featuredPress.embed}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={featuredPress.title}
              />
            </div>
          )}

          <h2 className="font-display font-bold text-white text-sm uppercase tracking-[0.2em] mb-6 text-[#00a8ff]">
            Photos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {commencementPhotos.map((photo) => (
              <figure key={photo.src} className="rounded-xl overflow-hidden">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="mt-2 text-[#a0a0a0] font-body text-sm leading-relaxed">
                  {photo.caption}{" "}
                  <span className="text-[#555555]">Photo: {photo.credit}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <a
            href={featuredPress.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-bold text-sm bg-gradient-to-r from-[#e91e8c] to-[#00a8ff] text-white hover:opacity-90 transition-opacity"
          >
            Watch on YouTube →
          </a>
        </div>
      </article>
      <Contact showNumber={false} />
    </main>
  );
}
