import { describe, expect, it } from "vitest";

import { tokenDefinitions, tokenMap, tokensCss } from "./index";

describe("@momentum-ui/tokens", () => {
  it("creates flattened tactical token metadata", () => {
    expect(tokenDefinitions.length).toBeGreaterThan(20);
    expect(tokenMap["momentum-color-signal-pressure-danger"]).toBe("#ff6b6b");
    expect(tokenMap["momentum-spacing-vector"]).toBe("1.5rem");
  });

  it("renders CSS custom properties for downstream packages", () => {
    expect(tokensCss).toContain("@layer momentum-tokens");
    expect(tokensCss).toContain("--momentum-color-surface-canvas: #061218;");
    expect(tokensCss).toContain("--momentum-motion-duration-standard: 240ms;");
  });
});
