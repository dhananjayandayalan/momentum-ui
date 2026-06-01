import type { CSSProperties, ReactNode } from "react";

import { cx } from "./shared";

type BadgeTone = "burst" | "confidence" | "danger" | "neutral" | "surge" | "warning";

export type BadgeProps = {
  children?: ReactNode;
  className?: string;
  dot?: boolean;
  style?: CSSProperties;
  tone?: BadgeTone;
};

export function Badge({ children, className, dot = false, style, tone = "neutral" }: BadgeProps) {
  return (
    <span className={cx("mu-badge", `mu-badge--${tone}`, className)} style={style}>
      {dot ? <span aria-hidden="true" className="mu-badge__dot" /> : null}
      {children}
    </span>
  );
}
