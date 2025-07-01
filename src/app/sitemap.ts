import galleryIndex from "@/../public/assets/gallery/index.json";
import openSourceArticles from "@/cms/open_source.json";
import talks from "@/cms/talks/index.json";
import { MetadataRoute } from "next";
import { slugify } from "./utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://menahishayan.com";
  // Section names based on section IDs in the project
  const sectionNames = ["hero", "work-exp", "open-source", "products", "talks", "in-the-spotlight", "photos", "stories", "connect"];
  const staticRoutes = ["", ...sectionNames.map((id) => `/#${id}`), "/schedules"];

  const openSourceRoutes = openSourceArticles.map((article) => `/open-source/${slugify(article.title)}?modal=true`);
  const talkRoutes = talks.filter((talk) => !talk.isHidden).map((talk) => `/talks/${slugify(talk.title)}?modal=true`);

  // Image indexing for /photos section (URLs only, as required by Next.js sitemap)
  const galleryBase = `${baseUrl}/assets/gallery`;
  const galleryImages = galleryIndex
    .map((item) => {
      return Array.from({ length: item.count }, (_, index) => `${galleryBase}/${item.prefix}-${index + 1}.${item.format}`);
    })
    .flat();

  const allRoutes = [...staticRoutes, ...openSourceRoutes, ...talkRoutes];

  return allRoutes.map((route) => {
    const isPhotosSection = route === "/#photos";
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      images: isPhotosSection ? galleryImages : undefined,
    };
  });
}
