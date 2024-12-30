import { Tweet } from "@/components/Tweet";

const TWEETS = {
  default: [
    "1733528780470472814",
    "1662553680946814976",
    "1667553441902907392",
    "1733525972526539250",
    "1770667573090332881",
    "1805576752795685143",
    "1661715387032178688",
    "1667723941966934016",
    "1710269029837930508",
  ],
  more: [
    "1828433343865872650",
    "1709897728539734437",
    "1731659530704998598",
    "1711459338106396679",
    "1710592617925562802",
    "1677216200089284609",
    "1662413521123164161",
    "1733426626770452933",
    "1693152558435754189",
    "1770513609153560866",
    "1813906449589780548",
  ],
};

export default function Spotlight() {
  return (
    <section className="w-[100vw] h-auto bg-orange-100">
      <h1>In the Spotlight</h1>
      <ul className="xl:columns-3 gap-2 columns-2 not-md:block">
        {TWEETS.default.map((id) => (
          <Tweet key={id} id={id} />
        ))}
      </ul>
      <button className="more-btn">More</button>
    </section>
  );
}
