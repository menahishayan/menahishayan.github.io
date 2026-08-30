import type { MetadataRoute } from "next";
import { commencementPhotos } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/experience", priority: 0.8 },
    { path: "/speaking", priority: 0.8 },
    { path: "/open-source", priority: 0.8 },
    { path: "/press", priority: 0.8 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `https://tech.menahishayan.com${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
    ...(path === "/press" && {
      images: commencementPhotos.map(
        (photo) => `https://tech.menahishayan.com${photo.src}`,
      ),
    }),
  }));
}
