import { Scene } from "react-scrollmagic";
import { Tween, SplitChars, ScrollTrigger } from "react-gsap";
import "./App.css";
import "./index.css";

const Scene1 = () => (
  <Scene pin>
    <section className="slide-1">
      <ScrollTrigger start="80vh center" end="900vh center" scrub={0.5}>
        <Tween from={{ opacity: 0 }}>
          <h1 className="main-title">Menahi Shayan</h1>
        </Tween>
      </ScrollTrigger>

      <ScrollTrigger start="80vh center" end="900vh center" scrub={0.5}>
        <Tween from={{ opacity: 0 }} stagger={0.1}>
          <SplitChars wrapper={<div className="subtitle" />}>Web & Mobile Engineering, UX Design, Software Architecture</SplitChars>
        </Tween>
      </ScrollTrigger>
    </section>
  </Scene>
);

export default Scene1;
