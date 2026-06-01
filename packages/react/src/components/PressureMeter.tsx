import type { CSSProperties } from "react";

import { cx } from "./shared";

type SegmentZone = "critical" | "danger" | "nominal" | "warning";

type PressureMeterThresholds = {
  critical: number;
  danger: number;
  warning: number;
};

const DEFAULT_THRESHOLDS: PressureMeterThresholds = {
  critical: 90,
  danger: 75,
  warning: 55
};

function getZone(segmentPct: number, t: PressureMeterThresholds): SegmentZone {
  if (segmentPct >= t.critical) return "critical";
  if (segmentPct >= t.danger) return "danger";
  if (segmentPct >= t.warning) return "warning";
  return "nominal";
}

export type PressureMeterProps = {
  "aria-label"?: string;
  className?: string;
  label?: string;
  max?: number;
  min?: number;
  segments?: number;
  showValue?: boolean;
  style?: CSSProperties;
  suffix?: string;
  thresholds?: Partial<PressureMeterThresholds>;
  value: number;
};

export function PressureMeter({
  "aria-label": ariaLabel,
  className,
  label,
  max = 100,
  min = 0,
  segments = 12,
  showValue = true,
  style,
  suffix,
  thresholds: thresholdOverrides,
  value
}: PressureMeterProps) {
  const t = { ...DEFAULT_THRESHOLDS, ...thresholdOverrides };
  const clamped = Math.max(min, Math.min(max, value));
  const pct = ((clamped - min) / (max - min)) * 100;
  const activeCount = Math.round((pct / 100) * segments);
  const displayValue = suffix ? `${value} ${suffix}` : String(value);
  const accessibleLabel = ariaLabel ?? label ?? `Pressure ${displayValue}`;

  return (
    <div className={cx("mu-pressure-meter", className)} style={style}>
      {label || showValue ? (
        <div className="mu-pressure-meter__header">
          {label ? <span className="mu-pressure-meter__label">{label}</span> : <span />}
          {showValue ? (
            <span aria-hidden="true" className="mu-pressure-meter__value">
              {displayValue}
            </span>
          ) : null}
        </div>
      ) : null}
      <div
        aria-label={accessibleLabel}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={clamped}
        aria-valuetext={displayValue}
        className="mu-pressure-meter__segments"
        role="meter"
      >
        {Array.from({ length: segments }, (_, i) => {
          const segmentPct = ((i + 1) / segments) * 100;
          return (
            <span
              aria-hidden="true"
              className="mu-pressure-meter__segment"
              data-active={i < activeCount ? "true" : "false"}
              data-zone={getZone(segmentPct, t)}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
