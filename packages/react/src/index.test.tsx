import type { ReactNode } from "react";
import { act } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, describe, expect, it } from "vitest";

import { Heading, Icon, MetricText, TacticalNumber, Text } from "./index";

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
