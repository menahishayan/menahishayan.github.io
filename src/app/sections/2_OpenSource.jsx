import openSourceArticles from "@/cms/open_source.json";
import dynamic from "next/dynamic";

const OpenSourceClient = dynamic(() => import("./OpenSourceClient"), { ssr: true });

export default function OpenSource() {
  return (
    <section className="bg-teal-100">
      <h1>
        My <span className="emoji">{" ♥️"}</span> for the Open Source Community
      </h1>
      <OpenSourceClient articles={openSourceArticles} />
    </section>
  );
}
