import Link from "next/link";

const pages = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Speaking", href: "/speaking" },
  { label: "Open Source", href: "/open-source" },
  { label: "Press", href: "/press" },
];

export function PageCrossLinks({ current }: { current: string }) {
  const links = pages.filter((p) => p.href !== current);

  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 pb-16">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
      <p className="text-[#555555] font-display text-xs uppercase tracking-[0.2em] mb-4">
        Explore more
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        <Link
          href="/"
          className="text-[#a0a0a0] hover:text-white text-sm font-body transition-colors"
        >
          Full portfolio →
        </Link>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[#a0a0a0] hover:text-white text-sm font-body transition-colors"
          >
            {link.label} →
          </Link>
        ))}
      </div>
    </div>
  );
}
