import type { default as Schema } from "@/cms/open_source.json";
import { IconGitFork, IconStar, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

const IMAGE_FALLBACK = "https://avatars.githubusercontent.com/u/8170437?v=4";

export default function GlassCard({
  title,
  image,
  stars,
  role,
  repo_name,
  forks,
  tech_stack,
  ...props
}: (typeof Schema)[number] & React.HTMLAttributes<HTMLDivElement> & { focused?: boolean }) {
  return (
    <div className={`glass-card-glass w-full h-[420px] flex flex-col justify-between cursor-pointer`} title={title} {...props}>
      <div>
        <div className="flex items-center gap-2 glass-card-header">
          <span>Open Source</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full inline-block mx-1" />
          <span className="text-xs font-medium text-white/70 whitespace-nowrap">{role}</span>
        </div>
        <h3 className="glass-card-title line-clamp-2 max-h-[3.2em] overflow-hidden text-ellipsis">{title}</h3>

        <div className="flex justify-center items-center mt-2">
          <Image src={image || IMAGE_FALLBACK} alt={`${title} logo`} className="glass-card-logo" width={96} height={96} priority={false} />
        </div>

        <div className="mt-4 flex justify-center gap-1 glass-card-stars">
          {[...Array(Math.round(Math.min(stars / 30, 5)))].map((_, i) => (
            <IconStarFilled key={i} className="text-yellow-400 w-5 h-5" />
          ))}
          {[...Array(5 - Math.round(Math.min(stars / 30, 5)))].map((_, i) => (
            <IconStar key={i} className="text-yellow-400 w-5 h-5" />
          ))}
        </div>
      </div>

      <div className="glass-card-stats mt-4">
        <div className="flex justify-between text-xs mb-1 text-white/80">
          <span className="text-white/60 truncate max-w-[60%]">{repo_name}</span>
        </div>

        <div className="glass-card-meta mb-3">
          <span>
            <IconStar className="inline h-4 w-4" /> {stars}
          </span>
          <span>
            <IconGitFork className="inline h-4 w-4" /> {forks}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 text-xs text-white/80 max-h-8 overflow-hidden">
          {tech_stack.slice(0, 6).map((tech) => (
            <span key={tech} className="bg-white/10 px-2 py-0.5 rounded">
              {tech}
            </span>
          ))}
          {tech_stack.length > 6 && <span className="bg-white/10 px-2 py-0.5 rounded">+{tech_stack.length - 6}</span>}
        </div>

        <div className="pt-3 text-right text-sm text-white/70 hover:text-white transition-colors">Learn more →</div>
      </div>
    </div>
  );
}
