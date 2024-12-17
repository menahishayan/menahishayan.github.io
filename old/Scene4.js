import { Scene } from "react-scrollmagic";
import { Tween, ScrollTrigger, Timeline } from "react-gsap";
import { Fragment } from "react";
import "./App.css";

import { techBadges } from "../src/app/Components";

const Scene4 = () => (
  <Scene pin>
    <section className="slide-4" style={{ position: "relative", top: "-120vh" }}>
      <ScrollTrigger start="0vh center" end="2200vh center" scrub={0.7}>
        <Timeline
          wrapper={<div style={{ position: "relative", top: "-50vh", left: "-35vw" }} />}
          target={
            <Fragment>
              <img src="./screens/Oven/1.png" alt="history screen" className="oven-screenshot" style={{ left: "-5vw" }} />
              <img src="./screens/Oven/3.png" alt="main screen" className="oven-screenshot" style={{ top: "10vh" }} />
              <br />
              <img src="./screens/Oven/4.png" alt="energy screen" className="oven-screenshot" style={{ top: "-15vh", left: "22vw" }} />
              <img src="./screens/Oven/1.png" alt="history screen" className="oven-screenshot" style={{ top: "-60vh", left: "56vw" }} />
              <br />
              <img src="./screens/Oven/2.png" alt="automation screen" className="oven-screenshot" style={{ top: "-105vh", left: "55vw" }} />
              <br />
              <img src="./screens/Oven/4.png" alt="energy screen" className="oven-screenshot" style={{ top: "-174vh", left: "98vw" }} />
              <br />
              <img src="./screens/Oven/7.png" alt="settings screen" className="oven-screenshot" style={{ top: "-264vh", left: "-14vw" }} />
              <br />
              <div className="slide-4-statement">
                And a beautifully designed
                <br />
                revolutionary mobile app.
              </div>
              <div
                style={{ backgroundColor: "white", height: "100vh", width: "100vw", zIndex: -9, position: "absolute", top: "50vh", left: "35vw" }}
              ></div>
              <div style={{ position: "relative", left: "200vw" }}>
                <div className="slide-3-statement" style={{ textAlign: "left", fontSize: "5vh" }}>
                  Vibrant, yet
                  <br />
                  Elegant Design.
                </div>
                <div className="para" style={{ width: "30vw", fontSize: "2.5vh" }}>
                  <br />
                  <br />
                  The meticulously crafted interface does away with all of the boring knobs and switches and introduces vibrant, familiar UI elements
                  such as the pause and play button, sliders, carousels, rich icons, vibrant colors and exciting animations.
                  <br />
                  <br />
                  All while maintaining the elegance of a standardized interface and consistent design principles.
                </div>
                <br />
                <br />
                <br />
              </div>
              <div style={{ flexDirection: "row", display: "flex", position: "relative", left: "200vw" }}>
                {techBadges(["React Native", "Websockets", { title: "GitHub", url: "https://github.com/menahishayan/Automated-Oven-App" }])}
              </div>
              <div>
                <div className="slide-3-statement" style={{ textAlign: "center", fontSize: "5vh", width: "30vw" }}>
                  Eat, Repeat.
                </div>
                <div className="para" style={{ textAlign: "center", width: "30vw", fontSize: "2.5vh" }}>
                  <br />
                  <br />
                  User-specific and global history tracking, filtering, tweaking, analytics and recommendations right from the same simple colorful
                  interface.
                </div>
                <br />
                <br />
                <br />
              </div>
              <img src="./screens/Oven/1.png" alt="history screen" className="oven-screenshot" style={{ transform: "scale(1.5)", opacity: 0 }} />
              <div style={{ opacity: 0 }}>
                <div className="slide-3-statement" style={{ textAlign: "left", fontSize: "5vh", width: "30vw" }}>
                  With great power, comes little responsibility.
                </div>
                <div className="para" style={{ textAlign: "left", width: "30vw", fontSize: "2.5vh" }}>
                  <br />
                  <br />
                  Get real-time energy analytics and smart energy monitoring. The oven automatically helps you cut down on costs, so you don’t have
                  to.
                </div>
                <br />
                <br />
                <br />
              </div>
              <img src="./screens/Oven/4.png" alt="energy screen" className="oven-screenshot" style={{ transform: "rotate(0deg)" }} />
              <div>
                <div className="slide-3-statement" style={{ textAlign: "center", fontSize: "5vh", width: "30vw" }}>
                  Build your own cookbook.
                </div>
                <div className="para" style={{ textAlign: "center", width: "30vw", fontSize: "2.5vh" }}>
                  <br />
                  <br />
                  Leverage the power of scripting to create series of commands that your oven will follow, automatically, with no intervention.
                </div>
                <br />
                <br />
                <br />
              </div>
              <img src="./screens/Oven/2.png" alt="automation screen 1" className="oven-screenshot" style={{ transform: "scale(1.1)" }} />
              <img src="./screens/Oven/5.png" alt="automation screen 2" className="oven-screenshot" style={{ transform: "scale(1.1)" }} />
            </Fragment>
          }
          labels={Array(20).map((_, a) => {
            return { label: a + "", position: a };
          })}
        >
          <Tween from={{ x: "-105vw", y: "-50vh", opacity: 0 }} target={4} position="0" ease="back.out(0.8)" />
          <Tween from={{ x: "-105vw", y: "-155vh", opacity: 0 }} target={6} position="0" ease="back.out(0.8)" />
          <Tween from={{ x: "135vw", y: "155vh", opacity: 0 }} target={8} position="0" ease="back.out(0.8)" />
          <Tween from={{ x: "145vw", y: "150vh", opacity: 0 }} target={0} position="0" ease="back.out(0.8)" />
          <Tween from={{ x: "135vw", y: "155vh", opacity: 0 }} target={1} position="0" ease="back.out(0.8)" />
          <Tween from={{ x: "140vw", y: "152vh", opacity: 0 }} target={3} position="0" ease="back.out(0.8)" />
          <Tween from={{ x: "-135vw", y: "-105vh", opacity: 0 }} target={10} position="0" ease="back.out(0.8)" />
          <Tween from={{ delay: 0.2, transform: "scale(9)", opacity: 0 }} target={12} position="0" ease="back.out(0.8)" />

          <Tween to={{ transform: "scale(0)", opacity: 0 }} target={12} position="2" />
          <Tween to={{ transform: "scale(0)", opacity: 0 }} target={6} position="2" />
          <Tween to={{ transform: "scale(0)", opacity: 0 }} target={0} position="2" />
          <Tween to={{ transform: "scale(0)", opacity: 0 }} target={4} position="2" />
          <Tween to={{ transform: "scale(0)", opacity: 0 }} target={8} position="2" />
          <Tween to={{ transform: "scale(0)", opacity: 0 }} target={3} position="2" />
          <Tween to={{ transform: "scale(0)", opacity: 0 }} target={10} position="2" />
          <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} target={13} position="3" />
          <Tween to={{ delay: 0.5, transform: "rotate(0deg)", x: "-10vh", y: "25vw" }} target={1} position="2" />

          <Tween from={{ x: "-100vw", y: "-435vh", opacity: 0 }} to={{ delay: 1, x: "-105vw", y: "-435vh", opacity: 1 }} target={14} position="4" />
          <Tween from={{ x: "-105vw", y: "-430vh", opacity: 0 }} to={{ delay: 1, x: "-105vw", y: "-435vh", opacity: 1 }} target={15} position="4" />

          <Tween to={{ delay: 2, x: "-60vw", y: "-435vh", opacity: 0 }} from={{ x: "-55vw", y: "-435vh", opacity: 1 }} target={14} position="6" />
          <Tween to={{ delay: 2, x: "-55vw", y: "-430vh", opacity: 0 }} from={{ x: "-55vw", y: "-435vh", opacity: 1 }} target={15} position="6" />
          <Tween to={{ delay: 2, x: "-15vh", opacity: 0 }} target={1} position="6" />
          {/* <Tween from={{ x: '50vw', y: '-485vh', opacity: 0 }} to={{ delay: 1, x: '45vw', y: '-485vh', opacity: 1 }} target={16} position="8" />
                    <Tween from={{ x: '65vw', y: '-510vh', opacity: 0 }} to={{ delay: 1, x: '60vw', y: '-510vh', opacity: 1 }} target={17} position="8" />

                    <Tween to={{ delay: 2, x: '40vw', y: '-485vh', opacity: 0 }} target={16} position="10" />
                    <Tween to={{ delay: 2, x: '55vw', y: '-510vh', opacity: 0 }} target={17} position="10" /> */}
          <Tween from={{ x: "95vw", y: "-610vh", opacity: 0 }} to={{ delay: 1, x: "90vw", y: "-610vh", opacity: 1 }} target={18} position="8" />
          <Tween from={{ x: "20vw", y: "-675vh", opacity: 0 }} to={{ delay: 1, x: "15vw", y: "-675vh", opacity: 1 }} target={19} position="8" />

          <Tween to={{ delay: 2, x: "85vw", y: "-610vh", opacity: 0 }} target={18} position="10" />
          <Tween to={{ delay: 2, x: "10vw", y: "-675vh", opacity: 0 }} target={19} position="10" />
          <Tween from={{ x: "70vw", y: "-750vh", opacity: 0 }} to={{ delay: 1, x: "70vw", y: "-750vh", opacity: 1 }} target={20} position="12" />
          <Tween from={{ x: "17vw", y: "-780vh", opacity: 0 }} to={{ delay: 1, x: "17vw", y: "-790vh", opacity: 1 }} target={21} position="12" />
          <Tween from={{ x: "53vw", y: "-840vh", opacity: 0 }} to={{ delay: 1, x: "53vw", y: "-830vh", opacity: 1 }} target={22} position="12" />

          <Tween to={{ delay: 5, y: "-750vh", opacity: 0 }} target={20} position="14" />
          <Tween to={{ delay: 7, x: "17vw", y: "-810vh", opacity: 0 }} target={21} position="14" />
          <Tween to={{ delay: 7, x: "53vw", y: "-810vh", opacity: 0 }} target={22} position="14" />
        </Timeline>
      </ScrollTrigger>
    </section>
  </Scene>
);

export default Scene4;
