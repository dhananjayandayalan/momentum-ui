import type { CSSProperties, ReactNode } from "react";

import { cx } from "./shared";

export type TacticalCardProps = {
  children?: ReactNode;
  className?: string;
  footer?: ReactNode;
  label?: string;
  style?: CSSProperties;
};

export function TacticalCard({ children, className, footer, label, style }: TacticalCardProps) {
  return (
    <div
      className={cx("mu-surface", className)}
      style={{
        display: "grid",
        gap: "var(--momentum-spacing-stack)",
        padding: "var(--momentum-spacing-vector)",
        ...style
      }}
    >
      {label ? (
        <div
          style={{
            color: "var(--momentum-color-text-muted)",
            fontSize: "var(--momentum-typography-font-size-label)",
            letterSpacing: "var(--momentum-typography-letter-spacing-label)",
            textTransform: "uppercase"
          }}
        >
          {label}
        </div>
      ) : null}
      <div>{children}</div>
      {footer ? (
        <div
          style={{
            borderTop: "1px solid var(--momentum-color-border-subtle)",
            paddingTop: "var(--momentum-spacing-stack)"
          }}
        >
          {footer}
        </div>
      ) : null}
    </div>
  );
}
