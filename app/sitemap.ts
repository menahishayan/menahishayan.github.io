import type { MetadataRoute } from "next";
import {
  commencementPhotos,
  reactIndiaPhotos,
  talks,
  getTalkSlug,
  openSourceProjects,
} from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; images?: string[] }[] = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/experience", priority: 0.8 },
    {
      path: "/speaking",
      priority: 0.8,
      images: reactIndiaPhotos.map((photo) => photo.src),
    },
    { path: "/open-source", priority: 0.8 },
    { path: "/press", priority: 0.8 },
    {
      path: "/press/commencement",
      priority: 0.7,
      images: commencementPhotos.map((photo) => photo.src),
    },
    ...talks.map((talk) => ({
      path: `/speaking/${getTalkSlug(talk)}`,
      priority: 0.6,
    })),
    ...openSourceProjects.map((project) => ({
      path: `/open-source/${project.slug}`,
      priority: 0.6,
    })),
  ];

  return routes.map(({ path, priority, images }) => ({
    url: `https://tech.menahishayan.com${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
    ...(images && {
      images: images.map((src) => `https://tech.menahishayan.com${src}`),
    }),
  }));
}
