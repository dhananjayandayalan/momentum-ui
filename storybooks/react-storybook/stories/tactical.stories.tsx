import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Badge,
  Button,
  Heading,
  LiveIndicator,
  MomentumBar,
  PressureMeter,
  Surface,
  TacticalCard,
  TacticalNumber
} from "@momentum-ui/react";

const meta = {
  parameters: {
    a11y: {
      test: "error"
    },
    layout: "padded"
  },
  title: "Tactical Identity"
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const gridStyle = {
  display: "grid",
  gap: "1.5rem",
  maxWidth: "52rem"
} satisfies CSSProperties;

/* ── MomentumBar ─────────────────────────────────────────── */

export const MomentumBars: Story = {
  name: "MomentumBar / Values",
  render: () => (
    <div style={gridStyle}>
      <Heading as="h3" size="eyebrow">Auto-tone (value-derived)</Heading>
      <Surface style={{ display: "grid", gap: "1rem", padding: "1.25rem" }}>
        <MomentumBar label="Recovery Index" suffix="%" value={22} />
        <MomentumBar label="Zone Pressure" suffix="ppm" value={58} />
        <MomentumBar label="Alert Drift" suffix="σ" value={74} />
        <MomentumBar label="System Load" value={91} />
      </Surface>

      <Heading as="h3" size="eyebrow">Explicit Tones</Heading>
      <Surface style={{ display: "grid", gap: "1rem", padding: "1.25rem" }}>
        <MomentumBar label="Confidence" tone="confidence" value={45} />
        <MomentumBar label="Surge" tone="surge" value={62} />
        <MomentumBar label="Warning" tone="warning" value={78} />
        <MomentumBar label="Danger" tone="danger" value={91} />
        <MomentumBar label="Burst" tone="burst" value={55} />
      </Surface>

      <Heading as="h3" size="eyebrow">Custom Range (0–400 ms)</Heading>
      <Surface style={{ display: "grid", gap: "1rem", padding: "1.25rem" }}>
        <MomentumBar label="Response Time" max={400} suffix="ms" value={160} />
        <MomentumBar label="Peak Latency" max={400} suffix="ms" value={340} />
      </Surface>
    </div>
  )
};

/* ── PressureMeter ───────────────────────────────────────── */

export const PressureMeters: Story = {
  name: "PressureMeter / Values",
  render: () => (
    <div style={gridStyle}>
      <Heading as="h3" size="eyebrow">Default (12 segments)</Heading>
      <Surface style={{ display: "grid", gap: "1.25rem", padding: "1.25rem" }}>
        <PressureMeter label="Zone Load" suffix="%" value={30} />
        <PressureMeter label="Alert Threshold" suffix="%" value={58} />
        <PressureMeter label="System Pressure" suffix="%" value={76} />
        <PressureMeter label="Critical Overrun" suffix="%" value={94} />
      </Surface>

      <Heading as="h3" size="eyebrow">Segment Counts</Heading>
      <Surface style={{ display: "grid", gap: "1.25rem", padding: "1.25rem" }}>
        <PressureMeter label="6 segments" segments={6} value={67} />
        <PressureMeter label="10 segments" segments={10} value={67} />
        <PressureMeter label="16 segments" segments={16} value={67} />
      </Surface>

      <Heading as="h3" size="eyebrow">Custom Thresholds</Heading>
      <Surface style={{ display: "grid", gap: "1.25rem", padding: "1.25rem" }}>
        <PressureMeter
          label="Low sensitivity"
          thresholds={{ critical: 95, danger: 85, warning: 70 }}
          value={72}
        />
        <PressureMeter
          label="High sensitivity"
          thresholds={{ critical: 70, danger: 50, warning: 30 }}
          value={72}
        />
      </Surface>
    </div>
  )
};

/* ── Side-by-side comparison ─────────────────────────────── */

export const TacticalComparison: Story = {
  name: "Showcase / Tactical Dashboard",
  render: () => (
    <div style={{ maxWidth: "56rem", padding: "1rem" }}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "0.75rem",
          marginBottom: "1.5rem"
        }}
      >
        <LiveIndicator aria-label="Feed is live" size="lg" status="live" />
        <Heading as="h2" size="section">Operational Status — Zone Delta</Heading>
        <Badge dot style={{ marginInlineStart: "auto" }} tone="surge">Live Feed</Badge>
      </div>

      <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "1fr 1fr" }}>
        <TacticalCard label="Momentum Analysis">
          <div style={{ display: "grid", gap: "1rem" }}>
            <MomentumBar label="Zone Pressure" suffix="ppm" value={126} />
            <MomentumBar label="Alert Drift" suffix="σ" value={74} />
            <MomentumBar label="Recovery Index" suffix="%" value={38} />
          </div>
        </TacticalCard>

        <TacticalCard label="Pressure Zones">
          <div style={{ display: "grid", gap: "1.125rem" }}>
            <PressureMeter label="System Load" suffix="%" value={83} />
            <PressureMeter label="Network Pressure" suffix="%" value={47} />
            <PressureMeter label="Critical Exposure" suffix="%" value={91} />
          </div>
        </TacticalCard>
      </div>

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
          marginTop: "1.25rem"
        }}
      >
        <TacticalNumber
          changeLabel="4.2 above baseline"
          label="Peak Load"
          suffix="ppm"
          tone="danger"
          trend="up"
          value={126.4}
        />
        <TacticalNumber
          changeLabel="nominal"
          label="Response Time"
          suffix="ms"
          tone="confidence"
          trend="steady"
          value={184}
        />
        <TacticalNumber
          changeLabel="1.1 below threshold"
          label="Signal Drift"
          suffix="σ"
          tone="warning"
          trend="up"
          value={4.2}
        />
      </div>

      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end", marginTop: "1.25rem" }}>
        <Button size="sm" variant="ghost">Export Report</Button>
        <Button size="sm" variant="danger">Escalate</Button>
        <Button size="sm" variant="momentum">Deploy Response</Button>
      </div>
    </div>
  )
};
