import type { CSSProperties } from "react";

import { cx } from "./shared";

type MomentumBarTone = "burst" | "confidence" | "danger" | "surge" | "warning";

function deriveTone(pct: number): MomentumBarTone {
  if (pct >= 85) return "danger";
  if (pct >= 70) return "warning";
  if (pct >= 40) return "surge";
  return "confidence";
}

export type MomentumBarProps = {
  "aria-label"?: string;
  className?: string;
  label?: string;
  max?: number;
  min?: number;
  showValue?: boolean;
  style?: CSSProperties;
  suffix?: string;
  tone?: MomentumBarTone;
  value: number;
};

export function MomentumBar({
  "aria-label": ariaLabel,
  className,
  label,
  max = 100,
  min = 0,
  showValue = true,
  style,
  suffix,
  tone,
  value
}: MomentumBarProps) {
  const clamped = Math.max(min, Math.min(max, value));
  const pct = ((clamped - min) / (max - min)) * 100;
  const resolvedTone = tone ?? deriveTone(pct);
  const displayValue = suffix ? `${value} ${suffix}` : String(value);
  const accessibleLabel = ariaLabel ?? label ?? `Momentum ${displayValue}`;

  return (
    <div
      className={cx("mu-momentum-bar", `mu-momentum-bar--${resolvedTone}`, className)}
      style={style}
    >
      {label || showValue ? (
        <div className="mu-momentum-bar__header">
          {label ? <span className="mu-momentum-bar__label">{label}</span> : <span />}
          {showValue ? (
            <span aria-hidden="true" className="mu-momentum-bar__value">
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
        className="mu-momentum-bar__track"
        role="meter"
      >
        <div className="mu-momentum-bar__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
