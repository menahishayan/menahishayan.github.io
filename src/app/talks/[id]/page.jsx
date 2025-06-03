import talks from "@/cms/talks";
import Modal from "@/components/Modal";

export async function generateMetadata({ params }) {
  const id = parseInt(params.id, 10);
  const talk = talks[id];
  if (!talk) {
    return {
      title: "Talk not found | Menahi Shayan",
      description: "This talk could not be found.",
    };
  }
  return {
    title: `${talk.title} | Menahi Shayan`,
    description: talk.description,
    openGraph: {
      title: `${talk.title} | Menahi Shayan`,
      description: talk.description,
      url: talk.link,
      type: "video.other",
    },
    twitter: {
      card: "summary_large_image",
      title: `${talk.title} | Menahi Shayan`,
      description: talk.description,
    },
  };
}

export default function TalkModalPage({ params, searchParams }) {
  const id = parseInt(params.id, 10);
  const talk = talks[id];
  const isModal = searchParams?.modal === "true";

  if (!talk) return <div>Talk not found</div>;

  const content = (
    <div className="bg-white max-w-2xl w-full p-6 rounded-xl shadow-xl relative">
      <h2 className="text-xl font-bold mb-2 text-center">{talk.title}</h2>
      <p className="mb-2 text-gray-700 text-center">{talk.description}</p>
      {talk.date && (
        <p className="text-sm text-gray-500 text-center">
          {talk.date}
          {talk.location ? ` · ${talk.location}` : ""}
        </p>
      )}
      {talk.embed && (
        <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden">
          <iframe
            src={talk.embed}
            title={talk.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      )}
      {talk.link && (
        <a href={talk.link} target="_blank" rel="noopener" className="text-blue-600 underline block text-center">
          {talk.video ? "Watch on YouTube" : "Event Link"}
        </a>
      )}
    </div>
  );

  if (isModal) {
    return <Modal>{content}</Modal>;
  }

  // Full page SSR fallback
  return <section className="bg-violet-100 dark:bg-violet-950 min-h-screen flex items-center justify-center">{content}</section>;
}
