import type { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cx } from "./shared";

type SurfaceElevation = "canvas" | "panel" | "elevated";

const elevationOverrides: Record<SurfaceElevation, CSSProperties> = {
  canvas: {
    background: "var(--momentum-color-surface-canvas)",
    border: "none",
    boxShadow: "none"
  },
  elevated: {
    background: "var(--momentum-color-surface-elevated)",
    border: "1px solid var(--momentum-color-border-strong)",
    boxShadow: "var(--momentum-shadow-raised)"
  },
  panel: {}
};

export type SurfaceProps<T extends ElementType = "div"> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  elevation?: SurfaceElevation;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Surface<T extends ElementType = "div">({
  as,
  children,
  className,
  elevation = "panel",
  style,
  ...props
}: SurfaceProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cx("mu-surface", className)}
      style={{ ...elevationOverrides[elevation], ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}
