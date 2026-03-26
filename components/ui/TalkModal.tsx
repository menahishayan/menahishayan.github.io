"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Talk, TalkDetails } from "@/lib/data";

interface TalkModalProps {
  talk: Talk;
  details: TalkDetails | null;
  onClose: () => void;
}

function getVideoId(embedUrl: string): string {
  const match = embedUrl.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
}

export function TalkModal({ talk, details, onClose }: TalkModalProps) {
  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const videoId = talk.embed ? getVideoId(talk.embed) : null;
  const isGitNation = talk.video?.includes("gitnation.com");

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[60]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <motion.div
        key="modal"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={details?.talkTitle ?? talk.title}
        className="fixed inset-4 md:inset-8 lg:inset-12 xl:inset-16 z-[61] flex flex-col bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1">
          {/* Video / Hero area */}
          {videoId ? (
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={talk.title}
              />
            </div>
          ) : (
            <div className="h-2 w-full bg-gradient-to-r from-[#e91e8c] to-[#00a8ff]" />
          )}

          <div className="p-6 md:p-10">
            {/* Meta */}
            <p className="text-[#e91e8c] text-xs font-display tracking-[0.25em] uppercase mb-3">
              {talk.date} · {talk.location}
            </p>

            {/* Title */}
            <h2
              className="font-display font-bold text-white mb-2 leading-tight"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.8rem)" }}
            >
              {details?.talkTitle ?? talk.title}
            </h2>

            {/* Conference */}
            <p className="text-[#a0a0a0] font-display text-base mb-6">
              {talk.title}
            </p>

            {/* Synopsis */}
            {details?.synopsis && (
              <p className="text-[#c0c0c0] font-body text-base leading-relaxed mb-8 max-w-3xl border-l-2 border-[#e91e8c]/40 pl-4">
                {details.synopsis}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Topics */}
              {details?.topics && details.topics.length > 0 && (
                <div>
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-[0.2em] mb-4 text-[#e91e8c]">
                    Topics Covered
                  </h3>
                  <ul className="space-y-2.5">
                    {details.topics.map((topic, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[#a0a0a0] font-body text-sm leading-relaxed"
                      >
                        <span className="text-[#e91e8c] flex-shrink-0 mt-0.5">→</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Points */}
              {details?.keyPoints && details.keyPoints.length > 0 && (
                <div>
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-[0.2em] mb-4 text-[#00a8ff]">
                    Key Takeaways
                  </h3>
                  <ul className="space-y-3">
                    {details.keyPoints.map((point, i) => (
                      <li
                        key={i}
                        className="glass rounded-lg px-4 py-3 text-sm text-[#a0a0a0] font-body leading-relaxed border-l-2 border-[#00a8ff]/40"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Project info (for FOSS United / HomeScript) */}
            {details?.projectLink && (
              <div className="glass rounded-xl p-5 mb-8 border border-white/10">
                <h3 className="font-display font-bold text-white text-sm uppercase tracking-[0.2em] mb-3 text-[#00a8ff]">
                  Project
                </h3>
                {details.projectInstall && (
                  <code className="block font-mono text-sm text-[#e91e8c] bg-black/40 rounded-lg px-4 py-2 mb-3">
                    {details.projectInstall}
                  </code>
                )}
                <a
                  href={details.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00a8ff] hover:underline text-sm font-display"
                >
                  {details.projectLink} ↗
                </a>
              </div>
            )}

            {/* CTA links */}
            <div className="flex flex-wrap gap-3">
              {talk.video && (
                <a
                  href={talk.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-bold text-sm bg-gradient-to-r from-[#e91e8c] to-[#00a8ff] text-white hover:opacity-90 transition-opacity"
                >
                  {isGitNation ? "Watch on GitNation →" : "▶ Watch Talk →"}
                </a>
              )}
              {talk.link && talk.link !== talk.video && (
                <a
                  href={talk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-semibold text-sm glass border border-white/10 text-[#a0a0a0] hover:text-white transition-colors"
                >
                  Conference Site ↗
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Close button (fixed to modal) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-[#a0a0a0] hover:text-white hover:bg-white/10 transition-all z-10"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
