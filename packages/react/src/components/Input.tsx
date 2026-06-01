import { useId } from "react";
import type { CSSProperties, ComponentPropsWithoutRef } from "react";

import { cx } from "./shared";

export type InputProps = {
  className?: string;
  error?: string;
  hint?: string;
  label: string;
  style?: CSSProperties;
  wrapperClassName?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "className">;

export function Input({
  className,
  error,
  hint,
  id: idProp,
  label,
  style,
  wrapperClassName,
  ...props
}: InputProps) {
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy =
    [hint && !error ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") ||
    undefined;

  return (
    <div className={cx("mu-input-wrapper", wrapperClassName)}>
      <label className="mu-input-label" htmlFor={id}>
        {label}
      </label>
      <input
        aria-describedby={describedBy}
        aria-invalid={error ? true : undefined}
        className={cx("mu-input", error ? "mu-input--error" : undefined, className)}
        id={id}
        style={style}
        {...props}
      />
      {hint && !error ? (
        <span className="mu-input-hint" id={hintId}>
          {hint}
        </span>
      ) : null}
      {error ? (
        <span className="mu-input-error-msg" id={errorId} role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}
