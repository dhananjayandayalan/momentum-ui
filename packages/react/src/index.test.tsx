import type { ReactNode } from "react";
import { act } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, describe, expect, it, vi } from "vitest";

import {
  Badge,
  Button,
  Heading,
  Icon,
  IconButton,
  Input,
  LiveIndicator,
  MetricText,
  MomentumBar,
  PressureMeter,
  RealtimePulse,
  Surface,
  TacticalCard,
  TacticalNumber,
  Text
} from "./index";

function render(element: ReactNode) {
  const container = document.createElement("div");
  document.body.append(container);

  const root = createRoot(container);

  act(() => {
    root.render(element);
  });

  return {
    container,
    unmount() {
      act(() => {
        root.unmount();
      });
      container.remove();
    }
  };
}

afterEach(() => {
  document.body.innerHTML = "";
});

describe("@momentum-ui/react foundations", () => {
  it("renders Text with semantic content", () => {
    const view = render(<Text tone="primary">Operational context stays readable.</Text>);

    expect(view.container.textContent).toContain("Operational context stays readable.");
    view.unmount();
  });

  it("renders Heading with the requested element", () => {
    const view = render(
      <Heading as="h3" size="title">
        Match Pressure Index
      </Heading>
    );

    const heading = view.container.querySelector("h3");
    expect(heading?.textContent).toBe("Match Pressure Index");
    view.unmount();
  });

  it("renders MetricText caption and metric value", () => {
    const view = render(<MetricText caption="Possession swing" value="73%" />);

    expect(view.container.textContent).toContain("Possession swing");
    expect(view.container.textContent).toContain("73%");
    view.unmount();
  });

  it("formats TacticalNumber numeric values and announces its label", () => {
    const view = render(
      <TacticalNumber
        aria-label="Defensive recovery time"
        changeLabel="0.3 faster"
        label="Recovery"
        suffix="seconds"
        trend="up"
        value={2.4}
      />
    );

    expect(view.container.textContent).toContain("2.4");
    expect(view.container.textContent).toContain("0.3 faster");
    expect(view.container.querySelector('[aria-label="Defensive recovery time"]')).not.toBeNull();
    view.unmount();
  });

  it("renders a labeled icon accessibly", () => {
    const view = render(<Icon title="Momentum trend" />);

    const icon = view.container.querySelector('svg[role="img"][aria-label="Momentum trend"]');
    expect(icon).not.toBeNull();
    view.unmount();
  });
});

describe("@momentum-ui/react core primitives", () => {
  it("renders Surface with the surface class", () => {
    const view = render(<Surface>Panel content</Surface>);

    const el = view.container.querySelector(".mu-surface");
    expect(el).not.toBeNull();
    expect(el?.textContent).toContain("Panel content");
    view.unmount();
  });

  it("renders Surface with a custom element via as prop", () => {
    const view = render(<Surface as="section">Section surface</Surface>);

    const el = view.container.querySelector("section.mu-surface");
    expect(el).not.toBeNull();
    view.unmount();
  });

  it("renders TacticalCard with label and children", () => {
    const view = render(
      <TacticalCard label="Pressure Zone">Zone analysis content</TacticalCard>
    );

    expect(view.container.textContent).toContain("Pressure Zone");
    expect(view.container.textContent).toContain("Zone analysis content");
    view.unmount();
  });

  it("renders TacticalCard footer when provided", () => {
    const view = render(
      <TacticalCard footer={<span>Last updated 3s ago</span>}>Card body</TacticalCard>
    );

    expect(view.container.textContent).toContain("Last updated 3s ago");
    view.unmount();
  });

  it("renders Button as a button element with default type", () => {
    const view = render(<Button>Launch</Button>);

    const btn = view.container.querySelector("button");
    expect(btn).not.toBeNull();
    expect(btn?.getAttribute("type")).toBe("button");
    view.unmount();
  });

  it("applies variant class to Button", () => {
    const view = render(<Button variant="primary">Confirm</Button>);

    const btn = view.container.querySelector("button");
    expect(btn?.classList.contains("mu-button--primary")).toBe(true);
    view.unmount();
  });

  it("Button forwards disabled attribute", () => {
    const view = render(<Button disabled>Locked</Button>);

    const btn = view.container.querySelector("button");
    expect(btn?.disabled).toBe(true);
    view.unmount();
  });

  it("Button fires onClick handler", () => {
    const handler = vi.fn();
    const view = render(<Button onClick={handler}>Click me</Button>);

    act(() => {
      view.container.querySelector("button")?.click();
    });

    expect(handler).toHaveBeenCalledOnce();
    view.unmount();
  });

  it("renders IconButton with accessible aria-label", () => {
    const view = render(<IconButton aria-label="Close panel"><Icon decorative size={16} /></IconButton>);

    const btn = view.container.querySelector('button[aria-label="Close panel"]');
    expect(btn).not.toBeNull();
    view.unmount();
  });

  it("IconButton applies icon-button class", () => {
    const view = render(<IconButton aria-label="Expand"><Icon decorative size={16} /></IconButton>);

    const btn = view.container.querySelector("button");
    expect(btn?.classList.contains("mu-icon-button")).toBe(true);
    view.unmount();
  });

  it("Input associates label with input element", () => {
    const view = render(<Input label="Search query" />);

    const input = view.container.querySelector("input");
    const label = view.container.querySelector("label");
    expect(input).not.toBeNull();
    expect(label?.htmlFor).toBe(input?.id);
    view.unmount();
  });

  it("Input renders hint text when provided", () => {
    const view = render(<Input hint="Enter a valid tactical ID" label="Tactical ID" />);

    expect(view.container.textContent).toContain("Enter a valid tactical ID");
    view.unmount();
  });

  it("Input marks field invalid and renders error message", () => {
    const view = render(<Input error="Required field" label="Callsign" />);

    const input = view.container.querySelector("input");
    expect(input?.getAttribute("aria-invalid")).toBe("true");
    expect(view.container.textContent).toContain("Required field");
    view.unmount();
  });

  it("renders Badge with tone class", () => {
    const view = render(<Badge tone="surge">Live</Badge>);

    const badge = view.container.querySelector("span.mu-badge--surge");
    expect(badge).not.toBeNull();
    expect(badge?.textContent).toContain("Live");
    view.unmount();
  });

  it("Badge renders an aria-hidden dot when dot prop is set", () => {
    const view = render(<Badge dot tone="danger">Critical</Badge>);

    const dot = view.container.querySelector(".mu-badge__dot[aria-hidden='true']");
    expect(dot).not.toBeNull();
    view.unmount();
  });
});

describe("@momentum-ui/react realtime components", () => {
  it("LiveIndicator renders with status class", () => {
    const view = render(<LiveIndicator status="live" />);

    const el = view.container.querySelector(".mu-live-indicator--live");
    expect(el).not.toBeNull();
    view.unmount();
  });

  it("LiveIndicator has role=img and aria-label when no visible label", () => {
    const view = render(<LiveIndicator status="live" />);

    const el = view.container.querySelector('[role="img"]');
    expect(el).not.toBeNull();
    expect(el?.getAttribute("aria-label")).toBe("Live");
    view.unmount();
  });

  it("LiveIndicator uses custom aria-label when provided", () => {
    const view = render(<LiveIndicator aria-label="Zone Alpha is live" status="live" />);

    const el = view.container.querySelector('[aria-label="Zone Alpha is live"]');
    expect(el).not.toBeNull();
    view.unmount();
  });

  it("LiveIndicator renders visible label text", () => {
    const view = render(<LiveIndicator label="Tracking active" status="standby" />);

    const label = view.container.querySelector(".mu-live-indicator__label");
    expect(label?.textContent).toBe("Tracking active");
    view.unmount();
  });

  it("LiveIndicator dot-wrapper is aria-hidden", () => {
    const view = render(<LiveIndicator status="live" />);

    const wrapper = view.container.querySelector(".mu-live-indicator__dot-wrapper");
    expect(wrapper?.getAttribute("aria-hidden")).toBe("true");
    view.unmount();
  });

  it("LiveIndicator renders ring element for live status", () => {
    const view = render(<LiveIndicator status="live" />);

    expect(view.container.querySelector(".mu-live-indicator__ring")).not.toBeNull();
    view.unmount();
  });

  it("LiveIndicator does not render ring for offline status", () => {
    const view = render(<LiveIndicator status="offline" />);

    expect(view.container.querySelector(".mu-live-indicator__ring")).toBeNull();
    view.unmount();
  });

  it("LiveIndicator does not render ring for idle status", () => {
    const view = render(<LiveIndicator status="idle" />);

    expect(view.container.querySelector(".mu-live-indicator__ring")).toBeNull();
    view.unmount();
  });

  it("RealtimePulse renders with tone and intensity classes", () => {
    const view = render(<RealtimePulse intensity="high" tone="danger" />);

    const el = view.container.querySelector(".mu-realtime-pulse--danger.mu-realtime-pulse--high");
    expect(el).not.toBeNull();
    view.unmount();
  });

  it("RealtimePulse rings are aria-hidden", () => {
    const view = render(<RealtimePulse />);

    const rings = view.container.querySelectorAll('.mu-realtime-pulse__ring[aria-hidden="true"]');
    expect(rings.length).toBe(3);
    view.unmount();
  });

  it("RealtimePulse with label has role=img and aria-label", () => {
    const view = render(<RealtimePulse label="Zone Alpha signal" tone="burst" />);

    const el = view.container.querySelector('[role="img"][aria-label="Zone Alpha signal"]');
    expect(el).not.toBeNull();
    view.unmount();
  });

  it("RealtimePulse without label has no role", () => {
    const view = render(<RealtimePulse />);

    const el = view.container.querySelector(".mu-realtime-pulse");
    expect(el?.getAttribute("role")).toBeNull();
    view.unmount();
  });
});

describe("@momentum-ui/react tactical identity", () => {
  it("MomentumBar renders role=meter with aria values", () => {
    const view = render(<MomentumBar value={64} />);

    const meter = view.container.querySelector('[role="meter"]');
    expect(meter).not.toBeNull();
    expect(meter?.getAttribute("aria-valuenow")).toBe("64");
    expect(meter?.getAttribute("aria-valuemin")).toBe("0");
    expect(meter?.getAttribute("aria-valuemax")).toBe("100");
    view.unmount();
  });

  it("MomentumBar clamps value above max to max", () => {
    const view = render(<MomentumBar max={100} value={140} />);

    const meter = view.container.querySelector('[role="meter"]');
    expect(meter?.getAttribute("aria-valuenow")).toBe("100");
    view.unmount();
  });

  it("MomentumBar clamps value below min to min", () => {
    const view = render(<MomentumBar min={10} value={2} />);

    const meter = view.container.querySelector('[role="meter"]');
    expect(meter?.getAttribute("aria-valuenow")).toBe("10");
    view.unmount();
  });

  it("MomentumBar auto-derives danger tone for high value", () => {
    const view = render(<MomentumBar value={92} />);

    expect(view.container.querySelector(".mu-momentum-bar--danger")).not.toBeNull();
    view.unmount();
  });

  it("MomentumBar auto-derives confidence tone for low value", () => {
    const view = render(<MomentumBar value={20} />);

    expect(view.container.querySelector(".mu-momentum-bar--confidence")).not.toBeNull();
    view.unmount();
  });

  it("MomentumBar explicit tone overrides auto-derivation", () => {
    const view = render(<MomentumBar tone="burst" value={92} />);

    expect(view.container.querySelector(".mu-momentum-bar--burst")).not.toBeNull();
    expect(view.container.querySelector(".mu-momentum-bar--danger")).toBeNull();
    view.unmount();
  });

  it("MomentumBar renders label and value", () => {
    const view = render(<MomentumBar label="Surge Load" suffix="ppm" value={84} />);

    expect(view.container.querySelector(".mu-momentum-bar__label")?.textContent).toBe("Surge Load");
    expect(view.container.querySelector(".mu-momentum-bar__value")?.textContent).toBe("84 ppm");
    view.unmount();
  });

  it("MomentumBar uses custom aria-label on meter element", () => {
    const view = render(<MomentumBar aria-label="Tactical pressure level" value={50} />);

    const meter = view.container.querySelector('[aria-label="Tactical pressure level"]');
    expect(meter).not.toBeNull();
    view.unmount();
  });

  it("PressureMeter renders role=meter with aria values", () => {
    const view = render(<PressureMeter value={72} />);

    const meter = view.container.querySelector('[role="meter"]');
    expect(meter).not.toBeNull();
    expect(meter?.getAttribute("aria-valuenow")).toBe("72");
    view.unmount();
  });

  it("PressureMeter renders correct number of segments", () => {
    const view = render(<PressureMeter segments={10} value={50} />);

    const segs = view.container.querySelectorAll(".mu-pressure-meter__segment");
    expect(segs.length).toBe(10);
    view.unmount();
  });

  it("PressureMeter activates segments proportional to value", () => {
    const view = render(<PressureMeter segments={10} value={60} />);

    const active = view.container.querySelectorAll(
      '.mu-pressure-meter__segment[data-active="true"]'
    );
    expect(active.length).toBe(6);
    view.unmount();
  });

  it("PressureMeter segment zones follow threshold defaults", () => {
    const view = render(<PressureMeter segments={10} value={100} />);

    const segments = view.container.querySelectorAll(".mu-pressure-meter__segment");
    expect(segments[0]?.getAttribute("data-zone")).toBe("nominal");
    expect(segments[9]?.getAttribute("data-zone")).toBe("critical");
    view.unmount();
  });

  it("PressureMeter all segments are aria-hidden", () => {
    const view = render(<PressureMeter segments={8} value={50} />);

    const segs = view.container.querySelectorAll('.mu-pressure-meter__segment[aria-hidden="true"]');
    expect(segs.length).toBe(8);
    view.unmount();
  });

  it("PressureMeter renders label and value", () => {
    const view = render(<PressureMeter label="System Load" suffix="%" value={78} />);

    expect(view.container.querySelector(".mu-pressure-meter__label")?.textContent).toBe(
      "System Load"
    );
    expect(view.container.querySelector(".mu-pressure-meter__value")?.textContent).toBe("78 %");
    view.unmount();
  });
});
