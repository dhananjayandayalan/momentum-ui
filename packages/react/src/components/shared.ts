import type { CSSProperties } from "react";

export function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export const surfaceStyles: CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(19, 43, 56, 0.92), rgba(11, 29, 39, 0.96)), var(--momentum-color-surface-panel)",
  border: "1px solid var(--momentum-color-border-subtle)",
  borderRadius: "1rem",
  boxShadow: "var(--momentum-shadow-panel)"
};

export const focusRingStyles: CSSProperties = {
  outline: "2px solid transparent",
  outlineOffset: "0.25rem"
};
