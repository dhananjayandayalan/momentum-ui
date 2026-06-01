import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Badge,
  Button,
  Heading,
  LiveIndicator,
  RealtimePulse,
  Surface,
  TacticalCard,
  TacticalNumber,
  Text
} from "@momentum-ui/react";

const meta = {
  parameters: {
    a11y: {
      test: "error"
    },
    layout: "padded"
  },
  title: "Realtime"
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const gridStyle = {
  display: "grid",
  gap: "1.25rem",
  maxWidth: "56rem"
} satisfies CSSProperties;

const rowStyle = {
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "1rem"
};

/* ── LiveIndicator ───────────────────────────────────────── */

export const LiveIndicatorStatuses: Story = {
  name: "LiveIndicator / Statuses",
  render: () => (
    <div style={gridStyle}>
      <Heading as="h3" size="eyebrow">All Statuses</Heading>
      <div style={rowStyle}>
        <LiveIndicator label="Live" status="live" />
        <LiveIndicator label="Standby" status="standby" />
        <LiveIndicator label="Idle" status="idle" />
        <LiveIndicator label="Offline" status="offline" />
      </div>

      <Heading as="h3" size="eyebrow">Sizes</Heading>
      <div style={rowStyle}>
        <LiveIndicator label="Small" size="sm" status="live" />
        <LiveIndicator label="Medium" size="md" status="live" />
        <LiveIndicator label="Large" size="lg" status="live" />
      </div>

      <Heading as="h3" size="eyebrow">Dot Only (accessible via aria-label)</Heading>
      <div style={rowStyle}>
        <LiveIndicator aria-label="Zone Alpha is live" status="live" />
        <LiveIndicator aria-label="Zone Bravo on standby" status="standby" />
        <LiveIndicator aria-label="Zone Charlie idle" status="idle" />
        <LiveIndicator aria-label="Zone Delta offline" status="offline" />
      </div>
    </div>
  )
};

/* ── RealtimePulse ───────────────────────────────────────── */

export const RealtimePulseTones: Story = {
  name: "RealtimePulse / Tones",
  render: () => (
    <div style={gridStyle}>
      <Heading as="h3" size="eyebrow">Tones</Heading>
      <div style={{ ...rowStyle, alignItems: "flex-end", gap: "2rem" }}>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <RealtimePulse label="Surge signal" tone="surge" />
          <Text size="label" tone="muted">Surge</Text>
        </div>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <RealtimePulse label="Warning signal" tone="warning" />
          <Text size="label" tone="muted">Warning</Text>
        </div>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <RealtimePulse label="Danger signal" tone="danger" />
          <Text size="label" tone="muted">Danger</Text>
        </div>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <RealtimePulse label="Burst signal" tone="burst" />
          <Text size="label" tone="muted">Burst</Text>
        </div>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <RealtimePulse label="Confidence signal" tone="confidence" />
          <Text size="label" tone="muted">Confidence</Text>
        </div>
      </div>
    </div>
  )
};

export const RealtimePulseIntensity: Story = {
  name: "RealtimePulse / Intensity",
  render: () => (
    <div style={gridStyle}>
      <Heading as="h3" size="eyebrow">Intensity</Heading>
      <div style={{ ...rowStyle, gap: "3rem" }}>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <RealtimePulse intensity="low" label="Low intensity" tone="burst" />
          <Text size="label" tone="muted">Low — 1 ring</Text>
        </div>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <RealtimePulse intensity="medium" label="Medium intensity" tone="burst" />
          <Text size="label" tone="muted">Medium — 2 rings</Text>
        </div>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <RealtimePulse intensity="high" label="High intensity" tone="burst" />
          <Text size="label" tone="muted">High — 3 rings, faster</Text>
        </div>
      </div>

      <Heading as="h3" size="eyebrow">Sizes</Heading>
      <div style={{ ...rowStyle, alignItems: "center", gap: "3rem" }}>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <RealtimePulse label="Small beacon" size="sm" tone="surge" />
          <Text size="label" tone="muted">Small</Text>
        </div>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <RealtimePulse label="Medium beacon" size="md" tone="surge" />
          <Text size="label" tone="muted">Medium</Text>
        </div>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <RealtimePulse label="Large beacon" size="lg" tone="surge" />
          <Text size="label" tone="muted">Large</Text>
        </div>
      </div>
    </div>
  )
};

/* ── Combined: Command Center Row ────────────────────────── */

export const CommandCenterRow: Story = {
  name: "Showcase / Command Center",
  render: () => (
    <div style={{ maxWidth: "60rem", padding: "1.5rem" }}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "0.75rem",
          marginBottom: "1.5rem"
        }}
      >
        <LiveIndicator aria-label="Feed is live" size="lg" status="live" />
        <Heading as="h2" size="section">Zone Alpha — Live Intelligence Feed</Heading>
        <Badge dot style={{ marginInlineStart: "auto" }} tone="surge">Streaming</Badge>
      </div>

      <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))" }}>
        <TacticalCard
          footer={
            <div style={{ alignItems: "center", display: "flex", gap: "0.5rem" }}>
              <LiveIndicator label="Live" size="sm" status="live" />
              <Text size="label" tone="muted">2s ago</Text>
            </div>
          }
          label="Pressure Load"
        >
          <TacticalNumber label="ppm" suffix="ppm" tone="surge" trend="up" value={126.4} />
        </TacticalCard>

        <TacticalCard
          footer={
            <div style={{ alignItems: "center", display: "flex", gap: "0.5rem" }}>
              <LiveIndicator label="Standby" size="sm" status="standby" />
              <Text size="label" tone="muted">12s ago</Text>
            </div>
          }
          label="Alert Drift"
        >
          <TacticalNumber
            changeLabel="2.1 above baseline"
            label="sigma"
            suffix="σ"
            tone="warning"
            trend="steady"
            value={4.2}
          />
        </TacticalCard>

        <Surface style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", padding: "1.5rem" }}>
          <Text size="label" tone="muted">Signal Beacon</Text>
          <RealtimePulse intensity="high" label="High-priority surge event detected" size="lg" tone="danger" />
          <Text size="label" tone="danger">Critical Event</Text>
        </Surface>
      </div>

      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end", marginTop: "1.25rem" }}>
        <Button size="sm" variant="ghost">Suppress</Button>
        <Button size="sm" variant="danger">Escalate</Button>
      </div>
    </div>
  )
};