import { Card, CardWrapper } from "@/components/Card";
import DisplayShowcase from "@/components/DisplayShowcase";

export default function WorkExp() {
  return (
    <section className="bg-blue-100">
      <h1>Some of my works</h1>
      <CardWrapper>
        <Card title="Alert Rules" />
        <Card title="Schedules" />
        <Card title="Mobile App" />
        <Card title="Landing Pages & Customer Onboarding" />
        <Card title="Enso Design Libraries" />
      </CardWrapper>
      <DisplayShowcase />
    </section>
  );
}
