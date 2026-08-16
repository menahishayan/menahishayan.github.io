import type { MetadataRoute } from "next";
import { commencementPhotos } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tech.menahishayan.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      images: commencementPhotos.map(
        (photo) => `https://tech.menahishayan.com${photo.src}`,
      ),
    },
  ];
}
