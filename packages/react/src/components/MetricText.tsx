import type { HTMLAttributes, ReactNode } from "react";

import { cx } from "./shared";

type MetricTextTone = "primary" | "surge" | "warning" | "danger" | "confidence";

const toneClassNames: Record<MetricTextTone, string | undefined> = {
  confidence: undefined,
  danger: "mu-accent-danger",
  primary: undefined,
  surge: "mu-accent-surge",
  warning: "mu-accent-warning"
};

export type MetricTextProps = HTMLAttributes<HTMLDivElement> & {
  caption?: ReactNode;
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
  tone?: MetricTextTone;
  value: ReactNode;
};

export function MetricText({
  caption,
  className,
  endAdornment,
  startAdornment,
  style,
  tone = "primary",
  value,
  ...props
}: MetricTextProps) {
  const toneStyle =
    tone === "confidence" ? { color: "var(--momentum-color-signal-confidence-high)" } : undefined;

  return (
    <div
      className={cx("mu-grid", className)}
      style={{ gap: "0.5rem", justifyItems: "start", ...style }}
      {...props}
    >
      {caption ? <span className="mu-label">{caption}</span> : null}
      <span
        className={cx("mu-metric", toneClassNames[tone])}
        style={{
          alignItems: "baseline",
          display: "inline-flex",
          gap: "0.4rem",
          ...toneStyle
        }}
      >
        {startAdornment ? <span aria-hidden="true">{startAdornment}</span> : null}
        <span>{value}</span>
        {endAdornment ? <span aria-hidden="true">{endAdornment}</span> : null}
      </span>
    </div>
  );
}
