import type { CSSProperties } from "react";

import { cx } from "./shared";

type PulseTone = "burst" | "confidence" | "danger" | "surge" | "warning";
type PulseIntensity = "high" | "low" | "medium";
type PulseSize = "lg" | "md" | "sm";

export type RealtimePulseProps = {
  className?: string;
  intensity?: PulseIntensity;
  label?: string;
  size?: PulseSize;
  style?: CSSProperties;
  tone?: PulseTone;
};

export function RealtimePulse({
  className,
  intensity = "medium",
  label,
  size = "md",
  style,
  tone = "surge"
}: RealtimePulseProps) {
  return (
    <span
      aria-label={label}
      className={cx(
        "mu-realtime-pulse",
        `mu-realtime-pulse--${tone}`,
        `mu-realtime-pulse--${intensity}`,
        `mu-realtime-pulse--${size}`,
        className
      )}
      role={label ? "img" : undefined}
      style={style}
    >
      <span aria-hidden="true" className="mu-realtime-pulse__ring" />
      <span aria-hidden="true" className="mu-realtime-pulse__ring" />
      <span aria-hidden="true" className="mu-realtime-pulse__ring" />
      <span aria-hidden="true" className="mu-realtime-pulse__core" />
    </span>
  );
}
