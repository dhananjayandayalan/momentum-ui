import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading, Icon, MetricText, TacticalNumber, Text } from "@momentum-ui/react";

const meta = {
  parameters: {
    a11y: {
      test: "error"
    },
    layout: "padded"
  },
  title: "Foundation/React Foundations"
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const shellStyle = {
  display: "grid",
  gap: "1.25rem",
  maxWidth: "56rem",
  padding: "1.5rem"
} satisfies CSSProperties;

export const Typography: Story = {
  render: () => (
    <section className="mu-surface" style={shellStyle}>
      <Text size="label" tone="confidence">
        Realtime Briefing
      </Text>
      <Heading size="display">Live Tactical Feed</Heading>
      <Text tone="secondary">
        Text provides the baseline body copy style for tactical interface content.
      </Text>
      <Text size="emphasis" tone="burst" weight="semibold">
        Emphasis text surfaces high-signal updates without reaching heading weight.
      </Text>
    </section>
  )
};

export const Metrics: Story = {
  render: () => (
    <section style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))" }}>
      <TacticalNumber
        changeLabel="6.2 increase"
        label="Pressure Load"
        suffix="ppm"
        tone="surge"
        trend="up"
        value={126.4}
      />
      <TacticalNumber
        changeLabel="2.1 above baseline"
        label="Alert Drift"
        suffix="sigma"
        tone="warning"
        trend="steady"
        value={4.2}
      />
      <MetricText caption="Control Ratio" endAdornment="hot" tone="confidence" value="73%" />
    </section>
  )
};

export const Iconography: Story = {
  render: () => (
    <section className="mu-surface" style={{ ...shellStyle, justifyItems: "start" }}>
      <Heading as="h3" size="section">
        Signal Icon
      </Heading>
      <Text tone="secondary">
        The default icon glyph communicates upward tactical momentum and can inherit any semantic tone.
      </Text>
      <div className="mu-cluster">
        <Icon size={20} style={{ color: "var(--momentum-color-signal-transition-burst)" }} title="Transition burst" />
        <Icon size={24} style={{ color: "var(--momentum-color-signal-surge)" }} title="Surge signal" />
        <Icon size={28} style={{ color: "var(--momentum-color-signal-pressure-danger)" }} title="Pressure danger" />
      </div>
    </section>
  )
};
