"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { workExperience, WorkExperience } from "@/lib/data";
import { fadeUpVariant, staggerContainer } from "@/lib/variants";

function MetricPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass rounded-xl px-4 py-3 border border-white/10 flex-shrink-0">
      <div className="text-xl md:text-2xl font-display font-bold text-gradient leading-none">
        {value}
      </div>
      <div className="text-xs text-[#a0a0a0] font-body mt-1 leading-tight max-w-[160px]">
        {label}
      </div>
    </div>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: WorkExperience;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative pl-10 md:pl-14"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-7 w-4 h-4 rounded-full z-10 flex-shrink-0"
        style={{
          backgroundColor: exp.color,
          boxShadow: `0 0 20px ${exp.color}50, 0 0 40px ${exp.color}20`,
          border: "2px solid #080808",
        }}
      />

      <div className="glass rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-300 group">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div>
            <h3
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
            >
              {exp.company}
            </h3>
            <p className="text-[#a0a0a0] font-display font-medium mt-1 text-sm md:text-base">
              {exp.role} · {exp.location}
            </p>
          </div>
          <span
            className="text-sm font-display font-medium px-3 py-1 rounded-full border border-white/10 text-[#555555] whitespace-nowrap flex-shrink-0"
          >
            {exp.period}
          </span>
        </div>

        {/* Metrics */}
        {exp.metrics.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6">
            {exp.metrics.map((m, i) => (
              <MetricPill key={i} value={m.value} label={m.label} />
            ))}
          </div>
        )}

        {/* Highlights */}
        <ul className="space-y-2.5">
          {exp.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex gap-3 text-[#a0a0a0] font-body text-sm leading-relaxed"
            >
              <span
                className="mt-0.5 flex-shrink-0 text-xs"
                style={{ color: exp.color }}
              >
                →
              </span>
              {highlight}
            </li>
          ))}
        </ul>

        {/* Link */}
        {exp.link && (
          <a
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-xs font-display text-[#555555] hover:text-white transition-colors"
          >
            Visit {exp.company} ↗
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-[#060606]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUpVariant}>
            <SectionHeader
              number="03"
              title="Experience"
              subtitle="Where I've built things that actually matter."
            />
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-4">
          {/* Vertical gradient line */}
          <div
            className="absolute left-[7px] top-0 bottom-0 w-[2px] opacity-20"
            style={{
              background:
                "linear-gradient(to bottom, #e91e8c 0%, #00a8ff 50%, #7b61ff 100%)",
            }}
          />

          <div className="space-y-8">
            {workExperience.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
