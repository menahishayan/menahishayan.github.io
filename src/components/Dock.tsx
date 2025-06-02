"use client";
export default function Dock({ cards }: { cards: { color: string }[]; images: string[] }) {
  return (
    <div className="absolute bottom-0 left-[50%] translate-x-[-50%] px-6 bg-black/40 backdrop:filter:blur-md rounded-2xl border-white/20 border-b-0 border flex items-center justify-center gap-3">
      {cards.map((card, index) => (
        <div
          key={index}
          className="h-8 w-8 my-3 rounded-full hover:scale-150 origin-bottom transition-all cursor-pointer shadow-lg border-white/20 border"
          style={{ background: card.color, backdropFilter: "blur(10px)" }}
          onClick={() => {
            const cardElement = document.getElementById(`work-exp-card-${index}`);
            if (cardElement) {
              cardElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            }
          }}
        />
      ))}
    </div>
  );
}
