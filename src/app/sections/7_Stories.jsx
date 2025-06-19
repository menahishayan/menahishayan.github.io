import { Card, CardWrapper } from "@/components/Card";

export default function Stories() {
  return (
    <section className="bg-yellow-100 dark:bg-yellow-950 section-stories" id="stories">
      <h1>Documenting Chaos</h1>
      <CardWrapper>
        <Card title="AWS Reinvent crash" />
        <Card title="Scalability" />
        <Card title="onboarding redesign" />
        <Card title="Enso Design Libraries" />
        <Card title="schedules redesign" />
      </CardWrapper>
      <Card title="mobile app design" />
    </section>
  );
}
