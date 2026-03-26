"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tweet } from "react-tweet";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TWEET_IDS } from "@/lib/data";
import { fadeUpVariant, staggerContainer } from "@/lib/variants";

export default function Testimonials() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="testimonials" className="py-32 bg-[#060606]">
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
              title="Community"
              subtitle="What the React & tech community has said."
            />
          </motion.div>

          {/* Default tweets — masonry columns */}
          <motion.div
            variants={fadeUpVariant}
            data-theme="dark"
            className="columns-1 md:columns-2 lg:columns-3 gap-5 [&>*]:break-inside-avoid [&>*]:mb-5"
          >
            {TWEET_IDS.default.map((id) => (
              <div key={id} className="w-full">
                <Tweet id={id} />
              </div>
            ))}

            {/* "More" tweets — revealed on expand */}
            {showMore &&
              TWEET_IDS.more.map((id) => (
                <div key={id} className="w-full">
                  <Tweet id={id} />
                </div>
              ))}
          </motion.div>

          {/* Show more button */}
          {!showMore && (
            <motion.div
              variants={fadeUpVariant}
              className="flex justify-center mt-10"
            >
              <button
                onClick={() => setShowMore(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-sm glass border border-white/10 text-[#a0a0a0] hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                Show more ↓
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
