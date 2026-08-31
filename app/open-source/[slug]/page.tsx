import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Contact from "@/components/sections/Contact";
import { Markdown } from "@/components/ui/Markdown";
import { openSourceProjects, getProjectBySlug } from "@/lib/data";

export function generateStaticParams() {
  return openSourceProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.repo_name} — Shayan Menahi`;
  const description =
    project.content?.split("\n")[0].replace(/^#+\s*/, "") ??
    `${project.repo_name} — an open source project by Shayan Menahi.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/open-source/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://tech.menahishayan.com/open-source/${slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <article className="pt-32 pb-20 bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Link
            href="/#open-source"
            className="text-[#a0a0a0] hover:text-white text-sm font-body transition-colors"
          >
            ← All projects
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 md:gap-14 mt-8">
            {/* Sidebar: meta + CTA */}
            <aside className="md:sticky md:top-28 md:self-start space-y-5">
              <div className="flex items-center gap-3">
                {project.image && (
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-[#1a1a1a] border border-white/10">
                    <Image
                      src={project.image}
                      alt={`${project.org} avatar`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <p className="text-[#e91e8c] text-xs font-display tracking-[0.25em] uppercase">
                  {project.org}
                </p>
              </div>

              <h1
                className="font-display font-bold text-white leading-tight"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
              >
                {project.repo_name}
              </h1>

              <div className="flex flex-wrap items-center gap-4">
                {project.stars > 0 && (
                  <span className="flex items-center gap-1.5 text-sm font-display font-semibold text-[#e91e8c]">
                    ★ {project.stars.toLocaleString()}
                  </span>
                )}
                {project.forks > 0 && (
                  <span className="flex items-center gap-1.5 text-sm font-display text-[#a0a0a0]">
                    ⑃ {project.forks.toLocaleString()}
                  </span>
                )}
              </div>

              <span className="inline-block text-xs font-display font-bold px-2.5 py-1 rounded-full border text-[#00a8ff] border-[#00a8ff]/30 bg-[#00a8ff]/5">
                {project.role}
              </span>

              <div className="flex flex-wrap gap-1.5">
                {project.tech_stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-display px-2 py-1 rounded-md bg-white/[0.04] text-[#a0a0a0] border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-display font-bold text-sm bg-gradient-to-r from-[#e91e8c] to-[#00a8ff] text-white hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                View on GitHub →
              </a>
            </aside>

            {/* README */}
            <div className="min-w-0">
              {project.readme || project.content ? (
                <Markdown>{project.readme ?? project.content ?? ""}</Markdown>
              ) : (
                <p className="text-[#555555] font-body text-sm">
                  No description available yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </article>
      <Contact showNumber={false} />
    </main>
  );
}
