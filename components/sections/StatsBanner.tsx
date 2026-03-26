import { marqueeItems } from "@/lib/data";

export default function StatsBanner() {
  // Duplicate for seamless loop
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden bg-[#0a0a0a] py-4">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#e91e8c] via-[#7b61ff] to-[#00a8ff]" />
      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#00a8ff] via-[#7b61ff] to-[#e91e8c]" />

      {/* Marquee */}
      <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3 mx-3">
            <span
              className={`text-sm font-display font-semibold tracking-wide ${
                item.isStat ? "text-white" : "text-[#555555]"
              }`}
            >
              {item.text}
            </span>
            <span className="text-[#e91e8c] text-[10px] opacity-60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
