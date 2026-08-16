"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PressFeature, CommencementPhoto } from "@/lib/data";

interface CommencementModalProps {
  press: PressFeature;
  photos: CommencementPhoto[];
  onClose: () => void;
}

export function CommencementModal({ press, photos, onClose }: CommencementModalProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox !== null) setLightbox(null);
        else onClose();
      } else if (lightbox !== null && e.key === "ArrowRight") {
        setLightbox((i) => (i !== null && i < photos.length - 1 ? i + 1 : i));
      } else if (lightbox !== null && e.key === "ArrowLeft") {
        setLightbox((i) => (i !== null && i > 0 ? i - 1 : i));
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, lightbox, photos.length]);

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
        aria-label={press.title}
        className="fixed inset-4 md:inset-8 lg:inset-12 xl:inset-16 z-[61] flex flex-col bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-y-auto flex-1">
          <div className="h-2 w-full bg-gradient-to-r from-[#e91e8c] to-[#00a8ff]" />

          <div className="p-6 md:p-10">
            <p className="text-[#e91e8c] text-xs font-display tracking-[0.25em] uppercase mb-3">
              {press.outlet} · {press.date}
            </p>

            <h2
              className="font-display font-bold text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.8rem)" }}
            >
              {press.title}
            </h2>

            {press.quote && (
              <blockquote className="text-[#c0c0c0] font-body text-base leading-relaxed mb-4 max-w-3xl border-l-2 border-[#e91e8c]/40 pl-4 italic">
                “{press.quote}”
              </blockquote>
            )}

            <p className="text-[#a0a0a0] font-body text-sm leading-relaxed mb-8 max-w-3xl">
              Shayan was selected to deliver the graduate commencement address at
              Northeastern University&rsquo;s 2026 commencement ceremony, speaking to
              graduates and faculty alongside the university&rsquo;s undergraduate
              honorees.
            </p>

            {press.embed && (
              <div className="aspect-video w-full bg-black rounded-xl overflow-hidden mb-10">
                <iframe
                  src={press.embed}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={press.title}
                />
              </div>
            )}

            <h3 className="font-display font-bold text-white text-sm uppercase tracking-[0.2em] mb-4 text-[#00a8ff]">
              Photos
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {photos.map((photo, i) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="relative rounded-lg overflow-hidden aspect-[3/2] cursor-zoom-in group focus:outline-none focus:ring-2 focus:ring-[#e91e8c]"
                  aria-label={photo.alt}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={press.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-bold text-sm bg-gradient-to-r from-[#e91e8c] to-[#00a8ff] text-white hover:opacity-90 transition-opacity"
              >
                Watch on YouTube →
              </a>
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

      {/* Photo lightbox, layered above the modal */}
      {lightbox !== null && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <motion.figure
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[75vh] rounded-2xl overflow-hidden">
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                width={1600}
                height={1067}
                className="w-full h-auto object-contain max-h-[75vh]"
                priority
              />
            </div>
            <figcaption className="mt-4 text-[#a0a0a0] font-body text-sm text-center max-w-2xl">
              {photos[lightbox].caption}
            </figcaption>
          </motion.figure>

          {lightbox > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              aria-label="Previous photo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {lightbox < photos.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              aria-label="Next photo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-[#a0a0a0] hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close photo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#a0a0a0] font-display text-sm">
            {lightbox + 1} / {photos.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
