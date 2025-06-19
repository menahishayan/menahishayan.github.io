import { slugify } from "@/app/utils";
import openSourceArticles from "@/cms/open_source.json";
import { Card, CardWrapper } from "@/components/Card";
import GlassCard from "@/components/GlassCard";

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
            <Card key={slug} title={article.title} link={`/open-source/${slug}?modal=true`} className="glass-card-wrapper">
              <GlassCard {...article} />
            </Card>
          );
        })}
      </CardWrapper>
    </section>
  );
}
