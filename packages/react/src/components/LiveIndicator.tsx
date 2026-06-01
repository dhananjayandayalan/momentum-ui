import type { CSSProperties } from "react";

import { cx } from "./shared";

type LiveStatus = "idle" | "live" | "offline" | "standby";
type LiveIndicatorSize = "sm" | "md" | "lg";

const statusLabels: Record<LiveStatus, string> = {
  idle: "Idle",
  live: "Live",
  offline: "Offline",
  standby: "Standby"
};

export type LiveIndicatorProps = {
  "aria-label"?: string;
  className?: string;
  label?: string;
  size?: LiveIndicatorSize;
  status?: LiveStatus;
  style?: CSSProperties;
};

export function LiveIndicator({
  "aria-label": ariaLabel,
  className,
  label,
  size = "md",
  status = "live",
  style
}: LiveIndicatorProps) {
  const hasRing = status === "live" || status === "standby";

  return (
    <span
      aria-label={!label ? (ariaLabel ?? statusLabels[status]) : undefined}
      className={cx(
        "mu-live-indicator",
        `mu-live-indicator--${status}`,
        `mu-live-indicator--${size}`,
        className
      )}
      role={!label ? "img" : undefined}
      style={style}
    >
      <span aria-hidden="true" className="mu-live-indicator__dot-wrapper">
        {hasRing ? <span className="mu-live-indicator__ring" /> : null}
        <span className="mu-live-indicator__dot" />
      </span>
      {label ? <span className="mu-live-indicator__label">{label}</span> : null}
    </span>
  );
}
