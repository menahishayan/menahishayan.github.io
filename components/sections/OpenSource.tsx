"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { openSourceProjects, OpenSourceProject } from "@/lib/data";
import { fadeUpVariant, staggerContainer, staggerContainerFast } from "@/lib/variants";

function formatStars(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toString();
}

function getDisplayTags(stack: string[]): string[] {
  const priority = ["TypeScript", "Python", "JavaScript", "MDX", "CSS"];
  const found: string[] = [];

  // Add priority tags first
  for (const p of priority) {
    if (stack.includes(p) && !found.includes(p)) {
      found.push(p);
    }
  }

  // Add short, readable tags
  for (const t of stack) {
    if (
      found.length >= 4 ||
      found.map((f) => f.toLowerCase()).includes(t.toLowerCase())
    ) break;
    if (t.length <= 14 && /^[a-zA-Z]/.test(t) && !found.includes(t)) {
      found.push(t);
    }
  }

  return found.slice(0, 3);
}

function ProjectCard({
  project,
  featured,
}: {
  project: OpenSourceProject;
  featured?: boolean;
}) {
  const tags = getDisplayTags(project.tech_stack);
  const isCreator = project.role === "Creator";
  const hasStars = project.stars > 0;

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUpVariant}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`glass rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/[0.05] transition-all duration-300 group cursor-pointer ${
        featured ? "border-l-2 border-[#00a8ff]/50" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        {project.image && (
          <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-[#1a1a1a] border border-white/10">
            <Image
              src={project.image}
              alt={`${project.org} avatar`}
              width={40}
              height={40}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-white text-base md:text-lg leading-snug group-hover:text-gradient transition-all truncate">
            {project.repo_name}
          </h3>
          <p className="text-[#555555] text-xs font-body mt-0.5">{project.org}</p>
        </div>
      </div>

      {/* Stars & Forks */}
      {hasStars && (
        <div className="flex items-center gap-5">
          <span
            className={`flex items-center gap-1.5 text-sm font-display font-semibold ${
              project.stars > 100 ? "text-[#e91e8c]" : "text-[#a0a0a0]"
            }`}
          >
            ★ {formatStars(project.stars)}
          </span>
          <span className="flex items-center gap-1.5 text-sm font-display text-[#555555]">
            ⑃ {formatStars(project.forks)}
          </span>
        </div>
      )}

      {/* Description */}
      {project.content && (
        <p className="text-[#a0a0a0] text-sm font-body leading-relaxed line-clamp-3 flex-1">
          {project.content.split("\n")[0].replace(/^#+\s*/, "")}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2 gap-2 flex-wrap">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-display px-2 py-1 rounded-md bg-white/[0.04] text-[#555555] border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className={`text-[11px] font-display font-bold px-2.5 py-1 rounded-full border flex-shrink-0 ${
            isCreator
              ? "text-[#e91e8c] border-[#e91e8c]/30 bg-[#e91e8c]/5"
              : "text-[#00a8ff] border-[#00a8ff]/30 bg-[#00a8ff]/5"
          }`}
        >
          {project.role}
        </span>
      </div>
    </motion.a>
  );
}

export default function OpenSource() {
  const [featured, ...rest] = openSourceProjects;

  return (
    <section id="open-source" className="py-32 bg-[#060606]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUpVariant}>
            <SectionHeader
              number="05"
              title="Open Source"
              subtitle="Building in public. 700+ stars and counting."
            />
          </motion.div>

          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {/* Featured project spans full 2 columns on md */}
            <div className="md:col-span-2">
              <ProjectCard project={featured} featured />
            </div>

            {/* Rest of projects */}
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
