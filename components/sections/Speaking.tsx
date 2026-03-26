"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TalkModal } from "@/components/ui/TalkModal";
import { featuredTalk, pastTalks, talkDetailsMap, Talk } from "@/lib/data";
import { fadeUpVariant, staggerContainer, staggerContainerFast } from "@/lib/variants";

function getVideoId(embedUrl: string): string {
  const match = embedUrl.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
}

function TalkCard({
  talk,
  onOpenDetails,
}: {
  talk: Talk;
  onOpenDetails: (talk: Talk) => void;
}) {
  const [playing, setPlaying] = useState(false);
  const videoId = talk.embed ? getVideoId(talk.embed) : null;
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null;
  const details = talkDetailsMap[talk.title];

  return (
    <motion.div
      variants={fadeUpVariant}
      className="glass rounded-2xl overflow-hidden group flex flex-col hover:bg-white/[0.05] transition-colors duration-300"
    >
      {/* Video / Thumbnail */}
      <div className="aspect-video relative bg-[#111] overflow-hidden flex-shrink-0">
        {playing && talk.embed ? (
          <iframe
            src={`${talk.embed}&autoplay=1`}
            className="w-full h-full absolute inset-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={talk.title}
          />
        ) : thumbnailUrl ? (
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={() => setPlaying(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setPlaying(true)}
            aria-label={`Play ${talk.title}`}
          >
            <Image
              src={thumbnailUrl}
              alt={`${talk.title} thumbnail`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-[#e91e8c] flex items-center justify-center shadow-xl shadow-[#e91e8c]/30 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#111] to-[#1a1a1a]">
            <div className="text-center p-6">
              <div className="text-5xl mb-3">🎤</div>
              <p className="text-[#555] text-sm font-display tracking-wide">{talk.location}</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[#a0a0a0] text-xs font-display tracking-[0.15em] uppercase mb-2">
          {talk.date} · {talk.location}
        </p>

        <h3 className="font-display font-bold text-white text-base md:text-lg mb-1 leading-snug">
          {details?.talkTitle ?? talk.title}
        </h3>

        <p className="text-[#555555] text-xs font-display mb-3 text-[#777]">
          {talk.title}
        </p>

        {/* SEO: key topics visible in card */}
        {details?.topics && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {details.topics.slice(0, 3).map((topic) => {
              const label = topic.split("—")[0].split(":")[0].trim();
              return (
                <span
                  key={label}
                  className="text-[10px] font-display px-2 py-0.5 rounded-full bg-white/[0.04] text-[#555555] border border-white/[0.06]"
                >
                  {label}
                </span>
              );
            })}
          </div>
        )}

        <p className="text-[#555555] text-sm font-body line-clamp-2 mb-4 leading-relaxed flex-1">
          {talk.description}
        </p>

        <div className="flex items-center gap-2 flex-wrap mt-auto">
          {talk.video && (
            <a
              href={talk.video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-[#00a8ff] border border-[#00a8ff]/30 px-3 py-1.5 rounded-full hover:bg-[#00a8ff]/10 transition-colors"
            >
              ▶ Watch
            </a>
          )}
          {details && (
            <button
              onClick={() => onOpenDetails(talk)}
              className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-[#a0a0a0] border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/[0.06] hover:text-white transition-colors"
            >
              Details
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Speaking() {
  const [selectedTalk, setSelectedTalk] = useState<Talk | null>(null);
  const featuredDetails = talkDetailsMap[featuredTalk.title];

  return (
    <section id="speaking" className="py-32 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUpVariant}>
            <SectionHeader
              number="04"
              title="Speaking"
              subtitle="From Bengaluru to Berlin. From Goa to Amsterdam."
            />
          </motion.div>

          {/* Featured talk — React Summit 2025 */}
          <motion.div variants={fadeUpVariant} className="mb-14">
            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#e91e8c] to-[#00a8ff]">
              <div className="bg-[#0f0f0f] rounded-2xl p-8 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="flex-1 min-w-[240px]">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="bg-gradient-to-r from-[#e91e8c] to-[#00a8ff] text-white text-xs font-display font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                        React Summit 2025
                      </span>
                      <span className="text-[#a0a0a0] text-xs font-display">
                        Amsterdam, The Netherlands
                      </span>
                    </div>

                    <h3
                      className="font-display font-bold text-white mb-3 leading-tight"
                      style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
                    >
                      {featuredDetails?.talkTitle ?? featuredTalk.title}
                    </h3>

                    <p className="text-[#a0a0a0] font-body text-base leading-relaxed mb-5 max-w-2xl">
                      {featuredDetails?.synopsis ?? featuredTalk.description}
                    </p>

                    {/* SEO: Topics visible in hero card */}
                    {featuredDetails?.topics && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {featuredDetails.topics.slice(0, 4).map((topic) => {
                          const label = topic.split("—")[0].split(":")[0].trim();
                          return (
                            <span
                              key={label}
                              className="text-xs font-display px-3 py-1 rounded-full bg-white/[0.05] text-[#777] border border-white/[0.08]"
                            >
                              {label}
                            </span>
                          );
                        })}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4 text-sm font-display text-[#a0a0a0]">
                      <span>📅 {featuredTalk.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 flex-shrink-0">
                    <a
                      href={featuredTalk.video ?? featuredTalk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full font-display font-bold text-sm bg-gradient-to-r from-[#e91e8c] to-[#00a8ff] text-white hover:opacity-90 transition-opacity whitespace-nowrap"
                    >
                      Watch on GitNation →
                    </a>
                    <button
                      onClick={() => setSelectedTalk(featuredTalk)}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-sm glass border border-white/10 text-[#a0a0a0] hover:text-white hover:bg-white/[0.06] transition-colors whitespace-nowrap"
                    >
                      Full Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Past talks grid */}
          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {pastTalks.map((talk) => (
              <TalkCard
                key={talk.title}
                talk={talk}
                onOpenDetails={setSelectedTalk}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Talk detail modal */}
      <AnimatePresence>
        {selectedTalk && (
          <TalkModal
            talk={selectedTalk}
            details={talkDetailsMap[selectedTalk.title] ?? null}
            onClose={() => setSelectedTalk(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
