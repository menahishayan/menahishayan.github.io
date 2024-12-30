import { Card, CardWrapper } from "@/components/Card";

export default function OpenSource() {
  return (
    <section className="bg-teal-100">
      <h1>
        My <span className="emoji">{" ♥️ "}</span> for the Open Source Community
      </h1>
      <CardWrapper>
        <Card title="raycast/extensions" />
        <Card title="HomeScript (& my talk on it)" />
        <Card title="Home-Assistant-TP-Link-Router" />
        <Card title="HomeAssistant-Cupertino-Icons" />
        <Card title="getsentry/sentry-docs" />
      </CardWrapper>
    </section>
  );
}
