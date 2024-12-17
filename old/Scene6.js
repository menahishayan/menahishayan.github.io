import { Scene } from "react-scrollmagic";
import { Tween, ScrollTrigger, Timeline } from "react-gsap";
import { Fragment } from "react";
import "./App.css";

import { techBadges } from "../src/app/Components";

const Scene6 = () => (
  <Scene pin>
    <section className="slide-6 router-fg">
      <ScrollTrigger start="450vh center" end="1500vh center" scrub={0.5}>
        <Timeline
          target={
            <Fragment>
              <div className="router-bg" style={{ height: "100vh", position: "absolute", top: "0", right: "0", overflow: "hidden" }}>
                <div style={{ height: "100vh", width: "100vw", position: "absolute", top: "0", right: "0", overflow: "hidden" }}>
                  <div className="slide-3-pretext" style={{ textAlign: "center", color: "#555", marginBottom: "5vh" }}>
                    and
                  </div>
                  <img src="./images/router.png" style={{ height: "40vh" }} alt="router" />
                  <div className="slide-3-statement" style={{ textAlign: "center" }}>
                    Bringing Routers In To
                    <br />
                    The IoT Ecosystem.
                  </div>
                </div>
              </div>
              <div className="slide-3-pretext" style={{ textAlign: "center", color: "white", marginBottom: "5vh" }}>
                and
              </div>
              <img src="./images/router4.png" style={{ height: "40vh" }} alt="router" />
              <div className="slide-3-statement" style={{ textAlign: "center", color: "white" }}>
                Bringing Routers In To
                <br />
                The IoT Ecosystem.
              </div>
              <div className="slide-6-para router-bg">
                The TP-Link Router and TP-Link Archer C50 APIs, built through incredible feats of reverse-engineering, are open-source APIs for
                complete router control, network administration, and automation.
                <br />
                <br />
                The APIs also extend as Home Assistant Packages, thereby enabling IoT network access and control of routers via home automation
                systems.
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "80vh",
                  flexDirection: "row",
                  display: "flex",
                  paddingLeft: "40vw",
                  filter: "drop-shadow(0 0 0.8rem rgba(255,206,252,0.9))",
                }}
              >
                {techBadges(["Python", { title: "GitHub", url: "https://github.com/menahishayan/TP-Link-Archer-C50-API" }, "PyPI"])}
              </div>
            </Fragment>
          }
          labels={Array(20).map((_, a) => {
            return { label: a + "", position: a };
          })}
        >
          <Tween from={{ width: "100vw", overflow: "hidden" }} to={{ delay: 0.5, width: "0", overflow: "hidden" }} target={0} position="0" />
          <Tween to={{ transform: "scale(0.7)", y: "-5vh" }} target={1} position="2" />
          <Tween to={{ transform: "scale(0.5)", y: "-15vh", x: "-42vh" }} target={2} position="2" />
          <Tween to={{ transform: "scale(0.7)", y: "-43vh" }} target={3} position="2" />
          <Tween from={{ opacity: 0 }} to={{ delay: 0.5, opacity: 1 }} target={4} position="2" />
          <Tween from={{ opacity: 0 }} to={{ delay: 1, opacity: 1 }} target={5} position="2" />

          <Tween to={{ delay: 1, opacity: 0 }} target={4} position="4" />
        </Timeline>
      </ScrollTrigger>
      <ScrollTrigger start="1200px center" end="2000px center" scrub={0.5}>
        <Timeline
          target={
            <Fragment>
              <div
                className="slide-3-statement"
                style={{ color: "white", position: "absolute", top: "50vh", fontSize: 70, textAlign: "center", width: "100vw" }}
              >
                0+
              </div>
              <div
                className="para"
                style={{ color: "rgba(255,206,252,0.7)", fontWeight: 600, position: "absolute", top: "60vh", textAlign: "center", width: "100vw" }}
              >
                Peak Monthly Downloads
              </div>
              <div
                className="para"
                style={{ color: "rgba(255,206,252,0.7)", fontWeight: 600, position: "absolute", top: "60vh", textAlign: "center", width: "100vw" }}
              >
                Total Users
              </div>
            </Fragment>
          }
          labels={Array(10).map((_, a) => {
            return { label: a + "", position: a };
          })}
        >
          <Tween from={{ opacity: 0 }} position="0" target={0} />
          <Tween from={{ opacity: 0 }} position="0" target={1} />
          <Tween to={{ count: { value: 600, format: () => (value) => Math.round(value) + "+" }, delay: 0.5 }} target={0} position="0" />

          <Tween to={{ opacity: 0 }} position="2" target={1} />
          <Tween from={{ opacity: 0 }} to={{ delay: 0.7, opacity: 1 }} position="2" target={2} />
          <Tween to={{ count: { value: 4000, format: () => (value) => Math.round(value) + "+" } }} target={0} position="2" />
        </Timeline>
      </ScrollTrigger>
    </section>
  </Scene>
);

export default Scene6;
