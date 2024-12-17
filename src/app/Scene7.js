import { Scene } from "react-scrollmagic";
import { Tween, ScrollTrigger, Timeline } from "react-gsap";
import { Fragment } from "react";
import "./App.css";

import { techBadges } from "./Components";

const Scene7 = () => (
  <Scene pin>
    <section className="slide-7" style={{ position: "relative", top: "-120vh", background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
      <ScrollTrigger start="0vh center" end="1300vh center" scrub={0.7}>
        <Timeline
          wrapper={<div style={{ position: "relative", top: "-50vh", left: "-35vw" }} />}
          target={
            <Fragment>
              <img src="./screens/OneEdu/8.png" alt="contact screen" className="oven-screenshot" style={{ left: "-5vw" }} />
              <img src="./screens/OneEdu/4.png" alt="calendar screen" className="oven-screenshot" style={{ top: "10vh" }} />
              <br />
              <img src="./screens/OneEdu/3.png" alt="schedule screen" className="oven-screenshot" style={{ top: "-15vh", left: "22vw" }} />
              <img src="./screens/OneEdu/5.png" alt="courses screen" className="oven-screenshot" style={{ top: "-60vh", left: "56vw" }} />
              <br />
              <img src="./screens/OneEdu/6.png" alt="extra screen" className="oven-screenshot" style={{ top: "-105vh", left: "55vw" }} />
              <br />
              <img src="./screens/OneEdu/7.png" alt="news screen" className="oven-screenshot" style={{ top: "-174vh", left: "98vw" }} />
              <br />
              <img src="./screens/OneEdu/9.png" alt="profile screen" className="oven-screenshot" style={{ top: "-264vh", left: "-14vw" }} />
              <br />
              <div className="slide-6-statement">
                And a groundbreaking
                <br />
                Educational Platform.
              </div>
              <div
                className="para"
                style={{
                  position: "absolute",
                  top: "98vh",
                  left: "35vw",
                  textAlign: "center",
                  width: "56vw",
                  paddingLeft: "22vw",
                  paddingRight: "22vw",
                }}
              >
                A scalable end-to-end cloud solution for educational administration, including full-fledged cross-platform mobile apps for students,
                educators, and institutions.
                <br />
                <br />
                Leveraging the power of edge computing infrastructure, a centralized cloud service, machine learning, and procedural automation, the
                OneEdu Platform is a game-changer in bringing educational administration methods to the 21st century.
              </div>
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  position: "absolute",
                  top: "125vh",
                  left: "35vw",
                  paddingLeft: "44vw",
                  paddingRight: "44vw",
                  width: "12vw",
                }}
              >
                {techBadges(["React Native", "Linux"])}
              </div>
            </Fragment>
          }
          labels={Array(20).map((_, a) => {
            return { label: a + "", position: a };
          })}
        >
          <Tween from={{ x: "-105vw", y: "-50vh", opacity: 0 }} target={4} position="0" ease="back.out(0.8)" />
          <Tween from={{ x: "-103vw", y: "-155vh", opacity: 0 }} target={6} position="0" ease="back.out(0.8)" />
          <Tween from={{ x: "135vw", y: "155vh", opacity: 0 }} target={8} position="0" ease="back.out(0.8)" />
          <Tween from={{ x: "148vw", y: "150vh", opacity: 0 }} target={0} position="0" ease="back.out(0.8)" />
          <Tween from={{ x: "135vw", y: "155vh", opacity: 0 }} target={1} position="0" ease="back.out(0.8)" />
          <Tween from={{ x: "140vw", y: "152vh", opacity: 0 }} target={3} position="0" ease="back.out(0.8)" />
          <Tween from={{ x: "-135vw", y: "-105vh", opacity: 0 }} target={10} position="0" ease="back.out(0.8)" />
          <Tween from={{ delay: 0.2, transform: "scale(9)", opacity: 0 }} target={12} position="0" ease="back.out(0.8)" />

          <Tween to={{ x: "15vw", y: "5vh" }} target={4} position="2" ease="back.out(0.8)" />
          <Tween to={{ x: "20vw", y: "25vh" }} target={6} position="2" ease="back.out(0.8)" />
          <Tween to={{ x: "10vw", y: "10vh" }} target={8} position="2" ease="back.out(0.8)" />
          <Tween to={{ x: "-5vw", y: "-5vh" }} target={0} position="2" ease="back.out(0.8)" />
          <Tween to={{ x: "-10vw", y: "-25vh" }} target={1} position="2" ease="back.out(0.8)" />
          <Tween to={{ x: "10vw", y: "45vh" }} target={3} position="2" ease="back.out(0.8)" />

          <Tween to={{ y: "-18vh", transform: "scale(0.7)" }} target={12} position="2" ease="back.out(0.8)" />
          <Tween from={{ opacity: 0 }} to={{ delay: 0.5, opacity: 1 }} target={13} position="2" />
          <Tween from={{ opacity: 0 }} to={{ delay: 0.8, opacity: 1 }} target={14} position="2" />

          <Tween to={{ transform: "scale(0)", opacity: 0 }} target={6} position="4" />
          <Tween to={{ transform: "scale(0)", opacity: 0 }} target={0} position="4" />
          <Tween to={{ transform: "scale(0)", opacity: 0 }} target={1} position="4" />
          <Tween to={{ transform: "scale(0)", opacity: 0 }} target={4} position="4" />
          <Tween to={{ transform: "scale(0)", opacity: 0 }} target={8} position="4" />
          <Tween to={{ transform: "scale(0)", opacity: 0 }} target={3} position="4" />
          <Tween to={{ transform: "scale(0)", opacity: 0 }} target={10} position="4" />
          <Tween to={{ delay: 0.1, transform: "scale(0.2)", opacity: 0 }} target={12} position="4" />
          <Tween to={{ delay: 0.1, transform: "scale(0.2)", opacity: 0 }} target={13} position="4" />
          <Tween to={{ delay: 0.1, transform: "scale(0.2)", opacity: 0 }} target={14} position="4" />
        </Timeline>
      </ScrollTrigger>
    </section>
  </Scene>
);

export default Scene7;
