"use client";

import talks from "@/cms/talks";
import { Card, CardWrapper } from "@/components/Card";
import { useRouter } from "next/navigation";

export default function Talks() {
  const router = useRouter();
  const openModal = (id) => {
    router.push(`/talks/${id}?modal=true`, { scroll: false, shallow: true });
  };
  return (
    <section className="bg-violet-100 dark:bg-violet-950 section-talks" id="talks">
      <h1>I share my ideas at International Tech Conferences</h1>
      <CardWrapper className="grid grid-cols-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {talks.map((talk, i) => (
          <button key={i} onClick={() => openModal(i)} className="block w-full text-left">
            <Card title={talk.title} className="cursor-pointer">
              <div className="font-semibold text-center px-2 line-clamp-2 min-h-[3em]">{talk.title}</div>
            </Card>
          </button>
        ))}
      </CardWrapper>
    </section>
  );
}
