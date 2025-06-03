import Image from "next/image";
import heroImage from "../../assets/hero-avatar.png";

export default function Hero() {
  return (
    <section className="section-hero" id="hero">
      <div>
        <p className="font-bold text-lg">Hi, I'm</p>
        <h1 className="main-title">Menahi Shayan</h1>
        <p className="subtitle">
          the Founding Engineer at Zenduty, and Ex-CTO and Cofounder of Next Up. I've led engineering teams to scale SaaS products and have spoken
          internationally on what I've learnt from it.
        </p>
        <button className="btn col-span-2">Check out my works</button>
      </div>
      <Image src={heroImage} width={350} height={350} alt="It's a me M...Menahi!" className="mx-auto" />
    </section>
  );
}
