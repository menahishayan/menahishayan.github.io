import { slugify } from "@/app/utils";
import openSourceArticles from "@/cms/open_source.json";
import Modal from "@/components/Modal";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const article = openSourceArticles.find((a) => slugify(a.title) === slug);
  if (!article) {
    return {
      title: "Article not found | Menahi Shayan",
      description: "This open source article could not be found.",
    };
  }
  return {
    title: `${article.title} | Menahi Shayan`,
    description: article.content,
    openGraph: {
      title: `${article.title} | Menahi Shayan`,
      description: article.content,
      url: article.url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Menahi Shayan`,
      description: article.content,
    },
  };
}

export default async function OpenSourceModalPage(props) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const slug = params.slug;
  const article = openSourceArticles.find((a) => slugify(a.title) === slug);
  const isModal = searchParams?.modal === "true";

  if (!article) return <div>Article not found</div>;

  const content = (
    <article>
      {article.image && (
        <Image src={article.image} alt={article.title} className="w-32 h-32 object-contain mx-auto mb-4 rounded-lg shadow" height={300} width={300} />
      )}
      <h2 className="text-xl font-bold mb-2 text-center">{article.title}</h2>
      <p className="whitespace-pre-line mb-4 text-gray-700 dark:text-gray-300">{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener" className="text-blue-600 underline block text-center">
        View on GitHub
      </a>
    </article>
  );

  if (isModal) {
    return <Modal>{content}</Modal>;
  }

  // Full page SSR fallback
  return <section className="bg-teal-100 dark:bg-teal-950 min-h-screen flex items-center justify-center">{content}</section>;
}

export function generateStaticParams() {
  return openSourceArticles.map((article) => {
    const slug = slugify(article.title);
    return { slug };
  });
}