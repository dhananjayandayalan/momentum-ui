import type { HTMLAttributes, ReactNode } from "react";

type PhaseOnePlaceholderProps = HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  status?: ReactNode;
};

export function PhaseOnePlaceholder({
  children,
  heading = "Momentum UI",
  status = "Phase 1 scaffold",
  ...props
}: PhaseOnePlaceholderProps) {
  return (
    <div {...props}>
      <strong>{heading}</strong>
      <p>{status}</p>
      {children}
    </div>
  );
}
