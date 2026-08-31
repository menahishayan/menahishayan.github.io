import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Contact from "@/components/sections/Contact";
import { talks, getTalkSlug, getTalkBySlug, talkDetailsMap } from "@/lib/data";

export function generateStaticParams() {
  return talks.map((talk) => ({ slug: getTalkSlug(talk) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const talk = getTalkBySlug(slug);
  if (!talk) return {};

  const details = talkDetailsMap[talk.title];
  const title = `${details?.talkTitle ?? talk.title} — Shayan Menahi`;
  const description = details?.synopsis ?? talk.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/speaking/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://tech.menahishayan.com/speaking/${slug}`,
    },
  };
}

function getVideoId(embedUrl: string): string {
  const match = embedUrl.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
}

export default async function TalkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const talk = getTalkBySlug(slug);
  if (!talk) notFound();

  const details = talkDetailsMap[talk.title];
  const videoId = talk.embed ? getVideoId(talk.embed) : null;
  const isGitNation = talk.video?.includes("gitnation.com");

  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <article className="pt-32 pb-20 bg-[#080808]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Link
            href="/#speaking"
            className="text-[#a0a0a0] hover:text-white text-sm font-body transition-colors"
          >
            ← All talks
          </Link>

          {videoId && (
            <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden my-8">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={talk.title}
              />
            </div>
          )}

          <p className="text-[#e91e8c] text-xs font-display tracking-[0.25em] uppercase mb-3 mt-8">
            {talk.date} · {talk.location}
          </p>

          <h1
            className="font-display font-bold text-white mb-2 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}
          >
            {details?.talkTitle ?? talk.title}
          </h1>

          <p className="text-[#a0a0a0] font-display text-base mb-8">
            {talk.title}
          </p>

          <p className="text-[#c0c0c0] font-body text-base md:text-lg leading-relaxed mb-10 border-l-2 border-[#e91e8c]/40 pl-4">
            {details?.synopsis ?? talk.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {details?.topics && details.topics.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-white text-sm uppercase tracking-[0.2em] mb-4 text-[#e91e8c]">
                  Topics Covered
                </h2>
                <ul className="space-y-2.5">
                  {details.topics.map((topic, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[#a0a0a0] font-body text-sm leading-relaxed"
                    >
                      <span className="text-[#e91e8c] flex-shrink-0 mt-0.5">→</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {details?.keyPoints && details.keyPoints.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-white text-sm uppercase tracking-[0.2em] mb-4 text-[#00a8ff]">
                  Key Takeaways
                </h2>
                <ul className="space-y-3">
                  {details.keyPoints.map((point, i) => (
                    <li
                      key={i}
                      className="glass rounded-lg px-4 py-3 text-sm text-[#a0a0a0] font-body leading-relaxed border-l-2 border-[#00a8ff]/40"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {details?.projectLink && (
            <div className="glass rounded-xl p-5 mb-10 border border-white/10">
              <h2 className="font-display font-bold text-white text-sm uppercase tracking-[0.2em] mb-3 text-[#00a8ff]">
                Project
              </h2>
              {details.projectInstall && (
                <code className="block font-mono text-sm text-[#e91e8c] bg-black/40 rounded-lg px-4 py-2 mb-3">
                  {details.projectInstall}
                </code>
              )}
              <a
                href={details.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00a8ff] hover:underline text-sm font-display"
              >
                {details.projectLink} ↗
              </a>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {talk.video && (
              <a
                href={talk.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-bold text-sm bg-gradient-to-r from-[#e91e8c] to-[#00a8ff] text-white hover:opacity-90 transition-opacity"
              >
                {isGitNation ? "Watch on GitNation →" : "▶ Watch Talk →"}
              </a>
            )}
            {talk.link && talk.link !== talk.video && (
              <a
                href={talk.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-semibold text-sm glass border border-white/10 text-[#a0a0a0] hover:text-white transition-colors"
              >
                Conference Site ↗
              </a>
            )}
          </div>
        </div>
      </article>
      <Contact showNumber={false} />
    </main>
  );
}
