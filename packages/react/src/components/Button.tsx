import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cx } from "./shared";

type ButtonVariant = "primary" | "ghost" | "danger" | "momentum";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
} & Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;

export function Button({
  children,
  className,
  size = "md",
  type = "button",
  variant = "ghost",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx("mu-button", `mu-button--${variant}`, `mu-button--${size}`, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
