import { slugify } from "@/app/utils";
import openSourceArticles from "@/cms/open_source.json";
import { Card, CardWrapper } from "@/components/Card";

export default function OpenSource() {
  return (
    <section className="bg-teal-100 dark:bg-teal-950 section-open-source" id="open-source">
      <h1>
        My <span className="emoji">{" ♥️"}</span> for the Open Source Community
      </h1>
      <CardWrapper>
        {openSourceArticles.map((article) => {
          const slug = slugify(article.title);
          return (
            <Card
              key={slug}
              title={article.title}
              className="flex flex-col justify-end p-0 overflow-hidden h-48 w-48 relative cursor-pointer"
              link={`/open-source/${slug}?modal=true`}
            >
              {article.image && (
                <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" />
              )}
              <div className="relative mt-auto w-full text-black p-3 text-center font-semibold" style={{ minHeight: "3em" }}>
                {article.title}
              </div>
            </Card>
          );
        })}
      </CardWrapper>
    </section>
  );
}
