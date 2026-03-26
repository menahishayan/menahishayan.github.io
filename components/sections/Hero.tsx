"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUpVariant } from "@/lib/variants";

const roleTags = [
  "AI Product Manager",
  "International Speaker",
  "Open Source Builder",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]">
      {/* Gradient blob — magenta, top-left */}
      <div
        className="absolute pointer-events-none animate-float"
        style={{
          top: "-10%",
          left: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(233,30,140,0.22) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Gradient blob — electric blue, bottom-right */}
      <div
        className="absolute pointer-events-none animate-float-delayed"
        style={{
          bottom: "-5%",
          right: "-8%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,168,255,0.18) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 pt-36 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Section label */}
          <motion.p
            variants={fadeUpVariant}
            className="text-[#e91e8c] font-display text-sm tracking-[0.4em] uppercase mb-10"
          >
            01 / Portfolio
          </motion.p>

          {/* Name — the hero */}
          <div className="mb-8">
            <motion.div
              variants={fadeUpVariant}
              className="overflow-hidden"
            >
              <h1
                className="font-display font-bold leading-[0.88] tracking-[-0.04em] text-white"
                style={{ fontSize: "clamp(4rem, 13vw, 14rem)" }}
              >
                SHAYAN
              </h1>
            </motion.div>
            <motion.div
              variants={fadeUpVariant}
              className="overflow-hidden"
            >
              <h1
                className="font-display font-bold leading-[0.88] tracking-[-0.04em] text-gradient"
                style={{ fontSize: "clamp(4rem, 13vw, 14rem)" }}
              >
                MENAHI
              </h1>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariant}
            className="text-[#a0a0a0] text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl font-body leading-relaxed"
          >
            Shipping AI to millions.{" "}
            <span className="text-white font-medium">Speaking to thousands.</span>
          </motion.p>

          {/* Role tags */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap gap-3"
          >
            {roleTags.map((tag) => (
              <motion.span
                key={tag}
                variants={fadeUpVariant}
                className="border border-[#e91e8c]/40 text-[#e91e8c] text-sm px-4 py-2 rounded-full font-display font-medium hover:bg-[#e91e8c]/10 transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap gap-4 mt-12"
          >
            <a
              href="#speaking"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-sm bg-gradient-to-r from-[#e91e8c] to-[#00a8ff] text-white hover:opacity-90 transition-opacity"
            >
              View My Talks →
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-sm glass border border-white/10 text-white hover:bg-white/[0.06] transition-colors"
            >
              About Me
            </a>
          </motion.div>

          {/* Film portfolio nudge */}
          <motion.a
            variants={fadeUpVariant}
            href="https://film.menahishayan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-[#444] font-body text-xs italic hover:text-[#888] transition-colors duration-300"
          >
            pssst... i also make films ↗
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555555]"
      >
        <span className="text-[10px] font-display tracking-[0.4em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
