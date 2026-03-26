interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="relative mb-16">
      {/* Giant faded background number */}
      <span
        aria-hidden
        className="absolute -top-10 left-0 font-display font-bold leading-none select-none pointer-events-none text-white/[0.04]"
        style={{ fontSize: "clamp(5rem, 14vw, 11rem)" }}
      >
        {number}
      </span>

      {/* Small label */}
      <p className="text-[#e91e8c] font-display text-sm tracking-[0.3em] uppercase mb-3 relative z-10">
        {number} /
      </p>

      {/* Title */}
      <h2
        className="font-display font-bold text-white relative z-10"
        style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="text-[#a0a0a0] mt-3 text-lg max-w-xl relative z-10 font-body">
          {subtitle}
        </p>
      )}
    </div>
  );
}
