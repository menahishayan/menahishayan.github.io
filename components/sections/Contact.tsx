"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { author } from "@/lib/data";
import { fadeUpVariant, staggerContainer } from "@/lib/variants";

const socialLinks = [
  {
    label: "GitHub",
    href: author.github,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: author.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: author.twitter,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: author.instagram,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Sessionize",
    href: author.sessionize,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "GitNation",
    href: author.gitnation,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Film Portfolio",
    href: `https://${author.film}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Section label */}
          <motion.p
            variants={fadeUpVariant}
            className="text-[#e91e8c] font-display text-sm tracking-[0.3em] uppercase mb-6"
          >
            07 /
          </motion.p>

          {/* Big headline */}
          <motion.h2
            variants={fadeUpVariant}
            className="font-display font-bold text-white mb-6 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          >
            Let&apos;s build{" "}
            <GradientText>something</GradientText>
            <br />
            that matters.
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            className="text-[#a0a0a0] text-lg md:text-xl mb-10 max-w-lg mx-auto font-body leading-relaxed"
          >
            Open to AI PM advisory, speaker bookings, and open source
            collaboration.
          </motion.p>

          {/* Context pills */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {["AI PM Advisory", "Speaker Bookings", "OSS Collaboration"].map(
              (pill) => (
                <motion.span
                  key={pill}
                  variants={fadeUpVariant}
                  className="glass border border-white/10 px-4 py-2 rounded-full text-sm font-display text-[#a0a0a0] hover:text-white hover:border-white/20 transition-colors cursor-default"
                >
                  {pill}
                </motion.span>
              )
            )}
          </motion.div>

          {/* Primary CTA — Email */}
          <motion.div variants={fadeUpVariant} className="mb-4">
            <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-[#e91e8c] to-[#00a8ff]">
              <a
                href={`mailto:${author.email}`}
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#080808] font-display font-bold text-white hover:bg-[#111] transition-colors text-base md:text-lg"
              >
                {author.email} →
              </a>
            </div>
          </motion.div>

          {/* Secondary CTA — LinkedIn */}
          <motion.div variants={fadeUpVariant} className="mb-16">
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-display text-[#a0a0a0] hover:text-white transition-colors"
            >
              or connect on LinkedIn ↗
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={staggerContainer}
            className="flex justify-center flex-wrap gap-x-6 gap-y-4 mb-20"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                variants={fadeUpVariant}
                className="flex items-center gap-2 text-[#555555] hover:text-[#e91e8c] font-display text-sm transition-colors duration-200"
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Footer */}
          <motion.p
            variants={fadeUpVariant}
            className="text-[#333333] text-xs font-body tracking-wider"
          >
            Made with Next.js · © 2025 Shayan Menahi
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
