"use client";
import { slugify } from "@/app/utils";
import openSourceArticles from "@/cms/open_source.json";
import { Card, CardWrapper } from "@/components/Card";
import GlassCard from "@/components/GlassCard";
import clsx from "clsx";
import { useState } from "react";

const PERSPECTIVE = 1024;
const STACK_OFFSET = 80; // percent per card, tweak for overlap
const Z_ROTATION = 35; // degrees for rotation, tweak for perspective effect

export default function OpenSource() {
  const [focusedIdx, setFocusedIdx] = useState(0);
  const total = openSourceArticles.length;

  const handleLeft = () => setFocusedIdx((prev) => (prev - 1 + total) % total);
  const handleRight = () => setFocusedIdx((prev) => (prev + 1) % total);

  return (
    <section className="bg-teal-100 dark:bg-teal-950 section-open-source overflow-x-hidden" id="open-source">
      <h1>
        My <span className="emoji">{" ♥️"}</span> for the Open Source Community
      </h1>
      <CardWrapper className="relative" style={{ perspective: PERSPECTIVE + "px" }}>
        {openSourceArticles.map((article, idx, arr) => {
          const slug = slugify(article.title);
          const diff = idx - focusedIdx;
          let rotate = "0deg";
          let translate = "0px";
          let translateZ = "0";

          if (diff < 0) {
            rotate = Z_ROTATION + "deg";
            translate = `${-idx * STACK_OFFSET + 50}%`;
            translateZ = -(idx * STACK_OFFSET) * 1 - PERSPECTIVE / 3;
          } else if (diff > 0) {
            rotate = `-${Z_ROTATION}deg`;
            translate = `${(arr.length - idx) * STACK_OFFSET + 50}% - ${PERSPECTIVE * 2}px + 90vw`;
            translateZ = -(idx * STACK_OFFSET) * 1 - 300;
          } else {
            translate = Math.round(arr.length / 2 - idx - 2) * 100 + 33 + "%"; // center focused card
          }
          // zIndex: higher for cards closer to focusedIdx
          const zIndex = arr.length - Math.abs(diff);
          return (
            <Card
              key={slug}
              title={article.title}
              link={`/open-source/${slug}?modal=true`}
              className={clsx("glass-card-wrapper transform transition-transform hover:scale-105 duration-300")}
              style={{
                transform: `rotate3d(0,1,0,${rotate}) translateX(calc(${translate})) translateZ(${translateZ}px)`,
                zIndex,
              }}
            >
              <GlassCard {...article} />
            </Card>
          );
        })}
      </CardWrapper>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handleLeft}
          className="bg-white/20 dark:bg-slate-800 rounded-full px-4 py-2 text-lg font-bold text-teal-900 dark:text-white shadow hover:bg-white/40 dark:hover:bg-slate-700 transition"
          aria-label="Previous Card"
        >
          ←
        </button>
        <button
          onClick={handleRight}
          className="bg-white/20 dark:bg-slate-800 rounded-full px-4 py-2 text-lg font-bold text-teal-900 dark:text-white shadow hover:bg-white/40 dark:hover:bg-slate-700 transition"
          aria-label="Next Card"
        >
          →
        </button>
      </div>
    </section>
  );
}
