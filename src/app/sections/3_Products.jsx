import { Card, CardWrapper } from "@/components/Card";

export default function Products() {
  return (
    <section className="bg-pink-100 dark:bg-pink-950 section-products" id="products">
      <h1>
        Things I've built<span className="emoji">{"👷🏻"}</span>
      </h1>
      <CardWrapper>
        <Card title="NURover" />
        <Card title="AI & IoT driven Oven (IEEE)" />
        <Card title="Nightstand Display HomeAssistant" />
      </CardWrapper>
    </section>
  );
}
