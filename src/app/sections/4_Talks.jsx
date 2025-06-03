import { Card, CardWrapper } from "@/components/Card";

export default function Talks() {
  return (
    <section className="bg-violet-100 dark:bg-violet-950 section-talks" id="talks">
      <h1>I share my ideas at International Tech Conferences</h1>
      <CardWrapper>
        <Card title="TheGeekConf Berlin" />
        <Card title="React India 2023" />
        <Card title="FOSS United" />
        <Card title="Talent500 React'n'Roll" />
        <Card title="React Bangalore" />
      </CardWrapper>
    </section>
  );
}
