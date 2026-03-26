"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GradientText } from "@/components/ui/GradientText";
import { achievements } from "@/lib/data";
import { fadeUpVariant, staggerContainer, slideInLeftVariant } from "@/lib/variants";

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUpVariant}>
            <SectionHeader number="02" title="About" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            {/* Left: Mission + Bio + Education */}
            <motion.div
              variants={staggerContainer}
              className="lg:col-span-3 space-y-8"
            >
              <motion.p
                variants={fadeUpVariant}
                className="font-display font-bold text-white leading-tight"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}
              >
                I ship AI products at scale, speak on stages{" "}
                <GradientText>across continents</GradientText>, and build open
                source tools{" "}
                <GradientText>people actually use</GradientText>.
              </motion.p>

              <motion.p
                variants={fadeUpVariant}
                className="text-[#a0a0a0] text-lg leading-relaxed font-body max-w-xl"
              >
                Currently an AI Product Manager at T-Mobile, where I lead
                product strategy for T-Life AI — powering smarter experiences
                for millions of subscribers. Previously, I served as Founding
                Engineer at Zenduty and co-founded an ed-tech startup as CTO. I
                bridge the gap between deep technical execution and bold product
                vision.
              </motion.p>

              {/* Big stat callout */}
              <motion.div
                variants={fadeUpVariant}
                className="pt-4 border-t border-white/[0.06]"
              >
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "13+", label: "Conferences" },
                    { value: "7", label: "OSS Projects" },
                    { value: "2", label: "Continents" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div
                        className="font-display font-bold text-gradient"
                        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-[#a0a0a0] text-sm font-display mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Achievement cards */}
            <motion.div
              variants={staggerContainer}
              className="lg:col-span-2 space-y-4"
            >
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  variants={slideInLeftVariant}
                  className="glass rounded-xl p-5 border-l-4 border-[#e91e8c] hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <div
                    className="font-display font-bold text-white mb-1 group-hover:text-gradient transition-all"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
                  >
                    {achievement.value}
                  </div>
                  <div className="text-xs font-display font-bold text-[#e91e8c] uppercase tracking-[0.2em] mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-[#a0a0a0] font-body leading-snug">
                    {achievement.sublabel}
                  </div>
                </motion.div>
              ))}

              {/* Extra card: T-Mobile impact */}
              <motion.div
                variants={slideInLeftVariant}
                className="glass rounded-xl p-5 border-l-4 border-[#00a8ff] hover:bg-white/[0.05] transition-all duration-300"
              >
                <div
                  className="font-display font-bold text-white mb-1"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
                >
                  63%
                </div>
                <div className="text-xs font-display font-bold text-[#00a8ff] uppercase tracking-[0.2em] mb-1">
                  Impact at T-Mobile
                </div>
                <div className="text-sm text-[#a0a0a0] font-body leading-snug">
                  Reduction in insurance support escalations QoQ
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
