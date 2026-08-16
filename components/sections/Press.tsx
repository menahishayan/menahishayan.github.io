"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CommencementModal } from "@/components/ui/CommencementModal";
import { featuredPress, pressFeatures, commencementPhotos, PressFeature } from "@/lib/data";
import {
  fadeUpVariant,
  staggerContainer,
  staggerContainerFast,
} from "@/lib/variants";

function getYouTubeId(embedUrl: string): string {
  const match = embedUrl.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
}

function PressCard({ item }: { item: PressFeature }) {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUpVariant}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="glass rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/[0.05] transition-all duration-300 group cursor-pointer"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-[#e91e8c] text-[11px] font-display font-bold tracking-[0.2em] uppercase">
          {item.outlet}
        </span>
        <span className="text-[#555555] text-xs font-display">{item.date}</span>
      </div>

      <h3 className="font-display font-bold text-white text-base md:text-lg leading-snug group-hover:text-gradient transition-all">
        {item.title}
      </h3>

      {item.quote && (
        <blockquote className="text-[#a0a0a0] text-sm font-body italic leading-relaxed border-l-2 border-[#e91e8c]/40 pl-3">
          “{item.quote}”
        </blockquote>
      )}

      <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-display font-semibold text-[#00a8ff] group-hover:text-white transition-colors">
        Read article →
      </span>
    </motion.a>
  );
}

export default function Press() {
  const [playing, setPlaying] = useState(false);
  const [showCommencementModal, setShowCommencementModal] = useState(false);
  const videoId = featuredPress.embed
    ? getYouTubeId(featuredPress.embed)
    : null;
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null;

  return (
    <section id="press" className="py-32 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUpVariant}>
            <SectionHeader
              number="06"
              title="Press"
              subtitle="In the news, on the stage, and on the record."
            />
          </motion.div>

          {/* Featured: commencement speech video */}
          <motion.div variants={fadeUpVariant} className="mb-14">
            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#e91e8c] to-[#00a8ff]">
              <div className="bg-[#0f0f0f] rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto relative bg-[#111] overflow-hidden">
                  {playing && featuredPress.embed ? (
                    <iframe
                      src={`${featuredPress.embed}?autoplay=1`}
                      className="w-full h-full absolute inset-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={featuredPress.title}
                    />
                  ) : thumbnailUrl ? (
                    <button
                      type="button"
                      onClick={() => setPlaying(true)}
                      aria-label={`Play ${featuredPress.title}`}
                      className="relative w-full h-full block group"
                    >
                      <Image
                        src={thumbnailUrl}
                        alt={`${featuredPress.title} thumbnail`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#e91e8c] flex items-center justify-center shadow-xl shadow-[#e91e8c]/30 group-hover:scale-110 transition-transform">
                          <svg
                            className="w-7 h-7 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  ) : null}
                </div>

                <div className="p-8 md:p-10 flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="bg-gradient-to-r from-[#e91e8c] to-[#00a8ff] text-white text-xs font-display font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-[#a0a0a0] text-xs font-display">
                      {featuredPress.outlet} · {featuredPress.date}
                    </span>
                  </div>

                  <h3
                    className="font-display font-bold text-white mb-4 leading-tight"
                    style={{ fontSize: "clamp(1.4rem, 2.6vw, 2rem)" }}
                  >
                    {featuredPress.title}
                  </h3>

                  {featuredPress.quote && (
                    <blockquote className="text-[#a0a0a0] font-body text-base leading-relaxed mb-6 border-l-2 border-[#e91e8c]/40 pl-4">
                      “{featuredPress.quote}”
                    </blockquote>
                  )}

                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a
                      href={featuredPress.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-bold text-sm bg-gradient-to-r from-[#e91e8c] to-[#00a8ff] text-white hover:opacity-90 transition-opacity"
                    >
                      Watch on YouTube →
                    </a>
                    <button
                      type="button"
                      onClick={() => setShowCommencementModal(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-semibold text-sm glass border border-white/10 text-[#a0a0a0] hover:text-white transition-colors"
                    >
                      View Photos & Story →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Press grid */}
          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {pressFeatures.map((item) => (
              <PressCard key={item.url} item={item} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {showCommencementModal && (
        <CommencementModal
          press={featuredPress}
          photos={commencementPhotos}
          onClose={() => setShowCommencementModal(false)}
        />
      )}
    </section>
  );
}
