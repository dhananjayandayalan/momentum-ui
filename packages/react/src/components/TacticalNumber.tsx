import type { HTMLAttributes, ReactNode } from "react";

import { cx, surfaceStyles } from "./shared";

type TacticalNumberTone = "neutral" | "surge" | "warning" | "danger" | "confidence";
type TacticalNumberTrend = "up" | "steady" | "down";

const trendGlyphs: Record<TacticalNumberTrend, string> = {
  down: "▼",
  steady: "■",
  up: "▲"
};

const toneStyles: Record<TacticalNumberTone, { accent: string; border: string }> = {
  confidence: {
    accent: "var(--momentum-color-signal-confidence-high)",
    border: "rgba(123, 247, 212, 0.28)"
  },
  danger: {
    accent: "var(--momentum-color-signal-pressure-danger)",
    border: "rgba(255, 107, 107, 0.28)"
  },
  neutral: {
    accent: "var(--momentum-color-signal-transition-burst)",
    border: "var(--momentum-color-border-subtle)"
  },
  surge: {
    accent: "var(--momentum-color-signal-surge)",
    border: "rgba(61, 220, 151, 0.28)"
  },
  warning: {
    accent: "var(--momentum-color-signal-fatigue-warning)",
    border: "rgba(247, 185, 85, 0.28)"
  }
};

export type TacticalNumberProps = HTMLAttributes<HTMLDivElement> & {
  changeLabel?: ReactNode;
  formatOptions?: Intl.NumberFormatOptions;
  label?: ReactNode;
  locale?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  tone?: TacticalNumberTone;
  trend?: TacticalNumberTrend;
  value: number | string;
};

export function TacticalNumber({
  changeLabel,
  className,
  formatOptions,
  label,
  locale = "en-US",
  prefix,
  style,
  suffix,
  tone = "neutral",
  trend,
  value,
  ...props
}: TacticalNumberProps) {
  const formattedValue =
    typeof value === "number" ? new Intl.NumberFormat(locale, formatOptions).format(value) : value;
  const accent = toneStyles[tone];

  return (
    <div
      className={cx("mu-grid", className)}
      style={{
        ...surfaceStyles,
        borderColor: accent.border,
        gap: "0.75rem",
        minInlineSize: "16rem",
        padding: "1rem 1.125rem",
        position: "relative",
        ...style
      }}
      {...props}
    >
      <span
        aria-hidden="true"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent.accent})`,
          blockSize: "1px",
          inlineSize: "40%",
          insetBlockStart: 0,
          insetInlineStart: "1.125rem",
          position: "absolute"
        }}
      />
      {label ? <span className="mu-label">{label}</span> : null}
      <span
        className="mu-metric"
        style={{
          alignItems: "flex-end",
          color: "var(--momentum-color-text-primary)",
          display: "inline-flex",
          flexWrap: "wrap",
          gap: "0.45rem",
          maxInlineSize: "100%"
        }}
      >
        {prefix ? <span style={{ color: accent.accent, fontSize: "0.65em" }}>{prefix}</span> : null}
        <span>{formattedValue}</span>
        {suffix ? (
          <span
            style={{
              color: "var(--momentum-color-text-secondary)",
              fontSize: "0.55em",
              letterSpacing: "var(--momentum-typography-letter-spacing-label)",
              textTransform: "uppercase"
            }}
          >
            {suffix}
          </span>
        ) : null}
      </span>
      {trend || changeLabel ? (
        <span
          style={{
            alignItems: "center",
            color: accent.accent,
            display: "inline-flex",
            fontFamily: "var(--momentum-typography-font-family-mono)",
            fontSize: "0.85rem",
            gap: "0.5rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase"
          }}
        >
          {trend ? <span aria-hidden="true">{trendGlyphs[trend]}</span> : null}
          {changeLabel ? <span>{changeLabel}</span> : null}
        </span>
      ) : null}
    </div>
  );
}
