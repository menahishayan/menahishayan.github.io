import { Card, CardWrapper } from "@/components/Card";
import Dock from "@/components/Dock";
import Image from "next/image";
import AlertRules from "../../images/alert-rules.png";
import DisplayImage from "../../images/display-bezel.png";
import { default as EnsoDesignLibraries, default as LandingPages, default as MobileApp, default as Schedules } from "../../images/schedules-1.png";

const WORK_EXP_CARDS = [
  {
    title: "Alert Rules",
    image: AlertRules,
    color: "#3F2B96",
  },
  {
    title: "Schedules",
    image: Schedules,
    color: "#A8C0FF",
  },
  {
    title: "Mobile App",
    image: MobileApp,
    color: "#FF6B6B",
  },
  {
    title: "Landing Pages & Customer Onboarding",
    image: LandingPages,
    color: "#FFB6B6",
  },
  {
    title: "Enso Design Libraries",
    image: EnsoDesignLibraries,
    color: "#6BFFB6",
  },
];

export default function WorkExp() {
  return (
    <section className="bg-blue-100 section-work-exp">
      <h1>Some of my works</h1>
      <h2>{WORK_EXP_CARDS[0].title}</h2>
      <div className="relative w-full h-auto aspect-[16/10]">
        <Image alt="" src={DisplayImage} fill style={{ objectFit: "contain" }} />
        <div
          className="absolute top-[1.5%] left-[9%] w-[82%] h-auto aspect-[16/9.3] rounded-lg"
          style={{ background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)" }}
        >
          <div className="w-full h-full overflow-x-scroll overflow-y-hidden no-scrollbar">
            <CardWrapper className="h-full !my-0" style={{ width: `calc(100%*${WORK_EXP_CARDS.length})` }}>
              {WORK_EXP_CARDS.map((card, index) => (
                <Card key={index} title={card.title} image={card.image} id={`work-exp-card-${index}`}>
                  <Image alt={card.title} src={card.image} style={{ objectFit: "contain", padding: "5%", paddingBottom: "7%" }} />
                </Card>
              ))}
            </CardWrapper>
          </div>
          <Dock cards={WORK_EXP_CARDS} />
        </div>
      </div>
    </section>
  );
}
