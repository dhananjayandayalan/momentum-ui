import type { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cx } from "./shared";

type TextTone =
  | "primary"
  | "secondary"
  | "muted"
  | "surge"
  | "warning"
  | "danger"
  | "burst"
  | "confidence";

type TextWeight = "regular" | "medium" | "semibold" | "strong";
type TextSize = "label" | "body" | "emphasis";

const toneStyles: Record<TextTone, CSSProperties> = {
  burst: { color: "var(--momentum-color-signal-transition-burst)" },
  confidence: { color: "var(--momentum-color-signal-confidence-high)" },
  danger: { color: "var(--momentum-color-signal-pressure-danger)" },
  muted: { color: "var(--momentum-color-text-muted)" },
  primary: { color: "var(--momentum-color-text-primary)" },
  secondary: { color: "var(--momentum-color-text-secondary)" },
  surge: { color: "var(--momentum-color-signal-surge)" },
  warning: { color: "var(--momentum-color-signal-fatigue-warning)" }
};

const weightStyles: Record<TextWeight, CSSProperties> = {
  medium: { fontWeight: "var(--momentum-typography-font-weight-medium)" },
  regular: { fontWeight: "var(--momentum-typography-font-weight-regular)" },
  semibold: { fontWeight: "var(--momentum-typography-font-weight-semibold)" },
  strong: { fontWeight: "var(--momentum-typography-font-weight-strong)" }
};

const sizeStyles: Record<TextSize, CSSProperties> = {
  body: {
    fontSize: "var(--momentum-typography-font-size-body)",
    letterSpacing: "var(--momentum-typography-letter-spacing-body)",
    lineHeight: "var(--momentum-typography-line-height-comfortable)"
  },
  emphasis: {
    fontSize: "var(--momentum-typography-font-size-emphasis)",
    letterSpacing: "var(--momentum-typography-letter-spacing-body)",
    lineHeight: "var(--momentum-typography-line-height-compact)"
  },
  label: {
    fontSize: "var(--momentum-typography-font-size-label)",
    letterSpacing: "var(--momentum-typography-letter-spacing-label)",
    lineHeight: "var(--momentum-typography-line-height-compact)",
    textTransform: "uppercase"
  }
};

export type TextProps<T extends ElementType = "p"> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  tone?: TextTone;
  weight?: TextWeight;
  size?: TextSize;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "color">;

export function Text<T extends ElementType = "p">({
  as,
  children,
  className,
  size = "body",
  style,
  tone = "secondary",
  weight = "regular",
  ...props
}: TextProps<T>) {
  const Component = as ?? "p";

  return (
    <Component
      className={cx("mu-text", className)}
      style={{
        margin: 0,
        maxInlineSize: "68ch",
        textWrap: "pretty",
        ...sizeStyles[size],
        ...weightStyles[weight],
        ...toneStyles[tone],
        ...style
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
