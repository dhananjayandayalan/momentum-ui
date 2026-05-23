import { fileURLToPath } from "url";
import { readFileSync } from "fs";
import path from "path";

import { describe, expect, it } from "vitest";

import { coreCssStatus } from "./index";

describe("@momentum-ui/core-css", () => {
  it("exports a non-placeholder foundation status", () => {
    expect(coreCssStatus).toBe("foundation-ready");
  });

  it("layers tokens, reset, base, motion, and utilities in the package stylesheet", () => {
    const stylesheetPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "styles.css");
    const stylesheet = readFileSync(stylesheetPath, "utf8");

    expect(stylesheet).toContain("@momentum-ui/tokens/tokens.css");
    expect(stylesheet).toContain("momentum-reset, momentum-tokens, momentum-base, momentum-motion, momentum-utilities");
    expect(stylesheet).toContain('@import "./utilities.css";');
  });
});
