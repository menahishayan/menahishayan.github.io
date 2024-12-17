import Image from "next/image";
import React from "react";
import heroImage from "../../assets/hero-avatar.png";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 px-32 gap-4">
      <div>
        <p className="font-bold">Hi, I'm</p>
        <h1 className="main-title">Menahi Shayan</h1>
        <p className="subtitle">the Founding Engineer at Zenduty, and CTO and Cofounder of Next Up.</p>
      </div>
      <Image src={heroImage} width={350} height={350} alt="It's a me M...Menahi!" />
    </section>
  );
}
