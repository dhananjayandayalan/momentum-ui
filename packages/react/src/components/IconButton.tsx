import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cx } from "./shared";

type IconButtonVariant = "primary" | "ghost" | "danger" | "momentum";
type IconButtonSize = "sm" | "md" | "lg";

export type IconButtonProps = {
  "aria-label": string;
  children?: ReactNode;
  className?: string;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
} & Omit<ComponentPropsWithoutRef<"button">, "aria-label" | "children" | "className">;

export function IconButton({
  "aria-label": ariaLabel,
  children,
  className,
  size = "md",
  type = "button",
  variant = "ghost",
  ...props
}: IconButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      className={cx(
        "mu-icon-button",
        `mu-button--${variant}`,
        `mu-icon-button--${size}`,
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
