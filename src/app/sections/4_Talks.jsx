"use client";

import { slugify } from "@/app/utils";
import talks from "@/cms/talks";
import { Card, CardWrapper } from "@/components/Card";

export default function Talks() {
  return (
    <section className="bg-violet-100 dark:bg-violet-950 section-talks" id="talks">
      <h1>I share my ideas at International Tech Conferences</h1>
      <CardWrapper className="grid grid-cols-5 gap-4 w-full">
        {talks.map((talk) => {
          const slug = slugify(talk.title);
          return (
            <Card key={slug} title={talk.title} className="cursor-pointer aspect-video" link={`/talks/${slug}?modal=true`}>
              <div className="font-semibold text-center px-2 line-clamp-2 min-h-[3em]">{talk.title}</div>
            </Card>
          );
        })}
      </CardWrapper>
    </section>
  );
}
