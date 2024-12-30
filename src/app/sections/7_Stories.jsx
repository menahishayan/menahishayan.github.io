import { Card, CardWrapper } from "@/components/Card";

export default function Stories() {
  return (
    <section>
      <h1>Documenting Chaos</h1>
      <CardWrapper>
        <Card title="AWS Reinvent crash" />
        <Card title="Scalability" />
        <Card title="onboarding redesign" />
        <Card title="Enso Design Libraries" />
        <Card title="schedules redesign" />
        <Card title="mobile app design" />
      </CardWrapper>
    </section>
  );
}
