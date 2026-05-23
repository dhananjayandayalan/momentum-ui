import { Heading, Icon, MetricText, TacticalNumber, Text } from "@momentum-ui/react";

export function App() {
  return (
    <main className="mu-scroll-shell" style={{ display: "grid", gap: "1.5rem" }}>
      <section className="mu-surface mu-grid" style={{ padding: "1.5rem" }}>
        <Text size="label" tone="confidence">
          Playground Feed
        </Text>
        <Heading size="display">Momentum UI Foundations</Heading>
        <Text tone="secondary">
          Phase 4 now has real React building blocks for tactical typography, metrics, and iconography.
        </Text>
        <div className="mu-cluster">
          <Icon style={{ color: "var(--momentum-color-signal-transition-burst)" }} title="Transition burst" />
          <Text as="span" size="emphasis" tone="burst" weight="semibold">
            Live telemetry connected
          </Text>
        </div>
      </section>

      <section style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))" }}>
        <TacticalNumber
          changeLabel="3.6 higher"
          label="Pulse Rate"
          suffix="hz"
          tone="surge"
          trend="up"
          value={18.2}
        />
        <TacticalNumber
          changeLabel="1.2 within tolerance"
          label="Zone Drift"
          suffix="deg"
          tone="confidence"
          trend="steady"
          value={6.4}
        />
        <div className="mu-surface" style={{ padding: "1rem 1.125rem" }}>
          <MetricText caption="Prediction Confidence" endAdornment="locked" tone="confidence" value="92%" />
        </div>
      </section>
    </main>
  );
}
