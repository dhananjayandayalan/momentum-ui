import type { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cx } from "./shared";

type HeadingSize = "eyebrow" | "title" | "section" | "display";
type HeadingTone = "primary" | "burst" | "confidence";

const sizeStyles: Record<HeadingSize, CSSProperties> = {
  display: {
    fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
    letterSpacing: "0.14em"
  },
  eyebrow: {
    fontSize: "var(--momentum-typography-font-size-label)",
    letterSpacing: "0.18em"
  },
  section: {
    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
    letterSpacing: "0.1em"
  },
  title: {
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
    letterSpacing: "0.12em"
  }
};

const toneStyles: Record<HeadingTone, CSSProperties> = {
  burst: { color: "var(--momentum-color-signal-transition-burst)" },
  confidence: { color: "var(--momentum-color-signal-confidence-high)" },
  primary: { color: "var(--momentum-color-text-primary)" }
};

export type HeadingProps<T extends ElementType = "h2"> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  size?: HeadingSize;
  tone?: HeadingTone;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "color">;

export function Heading<T extends ElementType = "h2">({
  as,
  children,
  className,
  size = "section",
  style,
  tone = "primary",
  ...props
}: HeadingProps<T>) {
  const Component = as ?? "h2";

  return (
    <Component
      className={cx("mu-heading", className)}
      style={{
        fontWeight: "var(--momentum-typography-font-weight-strong)",
        lineHeight: "var(--momentum-typography-line-height-display)",
        margin: 0,
        textTransform: "uppercase",
        textWrap: "balance",
        ...sizeStyles[size],
        ...toneStyles[tone],
        ...style
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
