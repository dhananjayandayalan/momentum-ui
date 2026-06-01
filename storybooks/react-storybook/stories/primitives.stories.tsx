import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Badge,
  Button,
  Icon,
  IconButton,
  Input,
  Surface,
  TacticalCard,
  Text,
  Heading,
  TacticalNumber
} from "@momentum-ui/react";

const meta = {
  parameters: {
    a11y: {
      test: "error"
    },
    layout: "padded"
  },
  title: "Core Primitives"
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
  gap: "0.75rem"
};

/* ── Surface ─────────────────────────────────────────────── */

export const Surfaces: Story = {
  name: "Surface / Elevation",
  render: () => (
    <div style={{ ...gridStyle, gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))" }}>
      <Surface style={{ padding: "1.5rem" }}>
        <Text size="label" tone="muted">Panel (default)</Text>
        <Text tone="secondary">Gradient surface with subtle border and shadow.</Text>
      </Surface>
      <Surface elevation="elevated" style={{ padding: "1.5rem" }}>
        <Text size="label" tone="muted">Elevated</Text>
        <Text tone="secondary">Raised surface with stronger border and deeper shadow.</Text>
      </Surface>
      <Surface elevation="canvas" style={{ padding: "1.5rem" }}>
        <Text size="label" tone="muted">Canvas</Text>
        <Text tone="secondary">Raw canvas background with no border styling.</Text>
      </Surface>
    </div>
  )
};

/* ── TacticalCard ────────────────────────────────────────── */

export const TacticalCards: Story = {
  name: "TacticalCard / Variants",
  render: () => (
    <div style={{ ...gridStyle, gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))" }}>
      <TacticalCard label="Pressure Zone">
        <TacticalNumber label="Zone Load" suffix="ppm" tone="surge" trend="up" value={126.4} />
      </TacticalCard>

      <TacticalCard
        footer={
          <div style={rowStyle}>
            <Badge dot tone="confidence">Nominal</Badge>
            <Text size="label" tone="muted">Updated 2s ago</Text>
          </div>
        }
        label="Alert Drift"
      >
        <TacticalNumber
          changeLabel="0.4 above baseline"
          label="Sigma"
          suffix="σ"
          tone="warning"
          trend="steady"
          value={4.2}
        />
      </TacticalCard>

      <TacticalCard label="System Status">
        <Text tone="secondary">
          No active incidents. All subsystems reporting nominal operational state.
        </Text>
      </TacticalCard>
    </div>
  )
};

/* ── Button ──────────────────────────────────────────────── */

export const Buttons: Story = {
  name: "Button / Variants",
  render: () => (
    <div style={gridStyle}>
      <Heading as="h3" size="eyebrow">Variants</Heading>
      <div style={rowStyle}>
        <Button variant="primary">Primary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="momentum">Momentum</Button>
      </div>

      <Heading as="h3" size="eyebrow">Sizes</Heading>
      <div style={{ ...rowStyle, alignItems: "baseline" }}>
        <Button size="sm" variant="primary">Small</Button>
        <Button size="md" variant="primary">Medium</Button>
        <Button size="lg" variant="primary">Large</Button>
      </div>

      <Heading as="h3" size="eyebrow">Disabled</Heading>
      <div style={rowStyle}>
        <Button disabled variant="primary">Primary</Button>
        <Button disabled variant="ghost">Ghost</Button>
        <Button disabled variant="danger">Danger</Button>
        <Button disabled variant="momentum">Momentum</Button>
      </div>
    </div>
  )
};

/* ── IconButton ──────────────────────────────────────────── */

export const IconButtons: Story = {
  name: "IconButton / Variants",
  render: () => (
    <div style={gridStyle}>
      <Heading as="h3" size="eyebrow">Variants</Heading>
      <div style={rowStyle}>
        <IconButton aria-label="Surge action" variant="primary">
          <Icon decorative size={18} />
        </IconButton>
        <IconButton aria-label="Ghost action" variant="ghost">
          <Icon decorative size={18} />
        </IconButton>
        <IconButton aria-label="Danger action" variant="danger">
          <Icon decorative size={18} />
        </IconButton>
        <IconButton aria-label="Momentum action" variant="momentum">
          <Icon decorative size={18} />
        </IconButton>
      </div>

      <Heading as="h3" size="eyebrow">Sizes</Heading>
      <div style={{ ...rowStyle, alignItems: "center" }}>
        <IconButton aria-label="Small action" size="sm" variant="ghost">
          <Icon decorative size={14} />
        </IconButton>
        <IconButton aria-label="Medium action" size="md" variant="ghost">
          <Icon decorative size={18} />
        </IconButton>
        <IconButton aria-label="Large action" size="lg" variant="ghost">
          <Icon decorative size={22} />
        </IconButton>
      </div>
    </div>
  )
};

/* ── Input ───────────────────────────────────────────────── */

export const Inputs: Story = {
  name: "Input / States",
  render: () => (
    <div style={{ ...gridStyle, maxWidth: "28rem" }}>
      <Input label="Tactical ID" placeholder="e.g. BRAVO-7" />
      <Input hint="Use the zone designator assigned at briefing." label="Zone Designator" />
      <Input
        defaultValue="ECHO-99"
        error="Zone not found in current operational area."
        label="Sector Code"
      />
      <Input disabled label="Locked Field" value="SYSTEM-OVERRIDE" />
    </div>
  )
};

/* ── Badge ───────────────────────────────────────────────── */

export const Badges: Story = {
  name: "Badge / Tones",
  render: () => (
    <div style={gridStyle}>
      <Heading as="h3" size="eyebrow">Tones</Heading>
      <div style={rowStyle}>
        <Badge tone="surge">Surge</Badge>
        <Badge tone="warning">Warning</Badge>
        <Badge tone="danger">Danger</Badge>
        <Badge tone="confidence">Confidence</Badge>
        <Badge tone="burst">Burst</Badge>
        <Badge tone="neutral">Neutral</Badge>
      </div>

      <Heading as="h3" size="eyebrow">With Live Dot</Heading>
      <div style={rowStyle}>
        <Badge dot tone="surge">Live</Badge>
        <Badge dot tone="warning">Degraded</Badge>
        <Badge dot tone="danger">Critical</Badge>
        <Badge dot tone="confidence">Nominal</Badge>
        <Badge dot tone="neutral">Offline</Badge>
      </div>
    </div>
  )
};

/* ── Combined showcase ───────────────────────────────────── */

export const OperationalPanel: Story = {
  name: "Showcase / Operational Panel",
  render: () => (
    <div style={{ maxWidth: "56rem", padding: "1.5rem" }}>
      <TacticalCard
        footer={
          <div style={{ ...rowStyle, justifyContent: "space-between" }}>
            <div style={rowStyle}>
              <Badge dot tone="surge">Live</Badge>
              <Badge tone="confidence">Nominal</Badge>
            </div>
            <div style={rowStyle}>
              <Button size="sm" variant="ghost">Export</Button>
              <Button size="sm" variant="primary">Acknowledge</Button>
            </div>
          </div>
        }
        label="Zone Alpha — Tactical Overview"
      >
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))" }}>
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
            suffix="σ"
            tone="warning"
            trend="steady"
            value={4.2}
          />
        </div>
      </TacticalCard>

      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr", marginTop: "1.25rem" }}>
        <Surface style={{ padding: "1.25rem" }}>
          <Input label="Operator Code" placeholder="e.g. OP-447" />
        </Surface>
        <Surface style={{ alignItems: "center", display: "flex", gap: "0.75rem", padding: "1.25rem" }}>
          <IconButton aria-label="Signal trend" variant="primary">
            <Icon decorative size={18} />
          </IconButton>
          <IconButton aria-label="Danger alert" variant="danger">
            <Icon decorative size={18} />
          </IconButton>
          <IconButton aria-label="Momentum action" variant="momentum">
            <Icon decorative size={18} />
          </IconButton>
        </Surface>
      </div>
    </div>
  )
};
