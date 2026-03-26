import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import StatsBanner from "@/components/sections/StatsBanner";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Speaking from "@/components/sections/Speaking";
import PhotoGallery from "@/components/sections/PhotoGallery";
import OpenSource from "@/components/sections/OpenSource";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <StatsBanner />
      <About />
      <Experience />
      <Speaking />
      <PhotoGallery />
      <OpenSource />
      <Testimonials />
      <Contact />
    </main>
  );
}
