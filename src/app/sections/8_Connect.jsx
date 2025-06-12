import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import heroImage from "../../assets/menahi-shayan-2.jpg";

export default function Connect() {
  return (
    <section className="bg-blue-100 dark:bg-blue-950 section-connect py-16 flex flex-col items-center" id="connect">
      <h1 className="text-4xl font-bold mb-8 text-blue-900 dark:text-blue-100">Let's Connect</h1>
      <div className="flex flex-col items-center bg-white dark:bg-blue-900 rounded-2xl shadow-xl p-8 max-w-lg w-full">
        <Image
          src={heroImage}
          width={200}
          height={200}
          alt="It's a me M...Menahi!"
          className="mx-auto rounded-full border-4 border-blue-400 dark:border-blue-700"
        />
        <h2 className="text-2xl font-semibold mb-2 text-blue-800 dark:text-blue-200">Menahi Shayan</h2>
        <p className="mb-6 text-center text-blue-700 dark:text-blue-300">
          Founding Engineer, Zenduty
          <br />
          Boston, MA
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="mailto:menahi.shayan@gmail.com" target="_blank" rel="noopener" className="flex flex-col items-center group">
            <IconMail className="w-10 h-10 mb-1 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-blue-700 dark:text-blue-200 text-sm">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/menahi-shayan/" target="_blank" rel="noopener" className="flex flex-col items-center group">
            <IconBrandLinkedin className="w-10 h-10 mb-1 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-blue-700 dark:text-blue-200 text-sm">LinkedIn</span>
          </a>
          <a href="https://twitter.com/MenahiShayan" target="_blank" rel="noopener" className="flex flex-col items-center group">
            <IconBrandTwitter className="w-10 h-10 mb-1 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-blue-700 dark:text-blue-200 text-sm">Twitter</span>
          </a>
          <a href="https://github.com/menahishayan" target="_blank" rel="noopener" className="flex flex-col items-center group">
            <IconBrandGithub className="w-10 h-10 mb-1 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-blue-700 dark:text-blue-200 text-sm">GitHub</span>
          </a>
          <a href="https://menahishayan.github.io" target="_blank" rel="noopener" className="flex flex-col items-center group">
            <IconUser className="w-10 h-10 mb-1 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-blue-700 dark:text-blue-200 text-sm">Portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
}
