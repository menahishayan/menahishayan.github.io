"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { OpenSourceProject } from "@/lib/data";
import { Markdown } from "@/components/ui/Markdown";

interface OpenSourceModalProps {
  project: OpenSourceProject;
  onClose: () => void;
}

export function OpenSourceModal({ project, onClose }: OpenSourceModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
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

      <motion.div
        key="modal"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={project.repo_name}
        className="fixed inset-4 md:inset-8 lg:inset-12 xl:inset-16 z-[61] flex flex-col bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-y-auto flex-1">
          <div className="h-2 w-full bg-gradient-to-r from-[#e91e8c] to-[#00a8ff]" />

          <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Sidebar: meta + CTAs */}
            <aside className="md:w-64 flex-shrink-0 md:sticky md:top-0 md:self-start space-y-5">
              <div className="flex items-center gap-3">
                {project.image && (
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-[#1a1a1a] border border-white/10">
                    <Image
                      src={project.image}
                      alt={`${project.org} avatar`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <p className="text-[#e91e8c] text-xs font-display tracking-[0.25em] uppercase">
                  {project.org}
                </p>
              </div>

              <h2
                className="font-display font-bold text-white leading-tight"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
              >
                {project.repo_name}
              </h2>

              <div className="flex flex-wrap items-center gap-4">
                {project.stars > 0 && (
                  <span className="flex items-center gap-1.5 text-sm font-display font-semibold text-[#e91e8c]">
                    ★ {project.stars.toLocaleString()}
                  </span>
                )}
                {project.forks > 0 && (
                  <span className="flex items-center gap-1.5 text-sm font-display text-[#a0a0a0]">
                    ⑃ {project.forks.toLocaleString()}
                  </span>
                )}
              </div>

              <span className="inline-block text-xs font-display font-bold px-2.5 py-1 rounded-full border text-[#00a8ff] border-[#00a8ff]/30 bg-[#00a8ff]/5">
                {project.role}
              </span>

              <div className="flex flex-wrap gap-1.5">
                {project.tech_stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-display px-2 py-1 rounded-md bg-white/[0.04] text-[#a0a0a0] border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-display font-bold text-sm bg-gradient-to-r from-[#e91e8c] to-[#00a8ff] text-white hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  View on GitHub →
                </a>
                <Link
                  href={`/open-source/${project.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-display font-semibold text-sm glass border border-white/10 text-[#a0a0a0] hover:text-white transition-colors whitespace-nowrap"
                >
                  Full page →
                </Link>
              </div>
            </aside>

            {/* README */}
            <div className="flex-1 min-w-0">
              {project.readme || project.content ? (
                <Markdown>{project.readme ?? project.content ?? ""}</Markdown>
              ) : (
                <p className="text-[#555555] font-body text-sm">
                  No description available yet.
                </p>
              )}
            </div>
          </div>
        </div>

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
