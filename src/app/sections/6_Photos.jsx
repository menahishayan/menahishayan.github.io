import galleryIndex from "@/../public/assets/gallery/index.json";
import "@/app/index.css";
import { Gallery } from "next-gallery";

const BASE_PATH = "/assets/gallery";

/**
 * Array of image objects to be displayed in the Gallery component.
 * Each image object contains the source path and aspect ratio.
 *
 * @type {(import("next-gallery").Image & {caption: string})[]}
 */
export const GALLERY_IMAGES = galleryIndex
  .map((item) => {
    return [...Array(item.count).fill(0)].map((_, index) => ({
      src: `${BASE_PATH}/${item.prefix}-${index + 1}.${item.format}`,
      aspect_ratio: item.aspect_ratio,
      alt: `Menahi Shayan speaking at ${item.title} | Image ${index + 1}`,
      caption: `${item.title} | Image ${index + 1}`,
    }));
  })
  .flat()
  .sort(() => Math.random() - 0.5);

const widths = [500, 1000, 300];
const ratios = [2.2, 4, 6, 8];

export default function Photos() {
  return (
    <section className="bg-violet-100 dark:bg-violet-950 section-photos" id="photos">
      <h1 className="mb-4">Papp'd in the wild</h1>
      <Gallery
        {...{ images: GALLERY_IMAGES, widths, ratios }}
        gap={4}
        overlay={(idx) => <div className="gallery-image-overlay-alt">{GALLERY_IMAGES[idx].caption}</div>}
      />
    </section>
  );
}
