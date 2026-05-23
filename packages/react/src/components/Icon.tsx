import type { SVGProps } from "react";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  decorative?: boolean;
  size?: number | string;
  title?: string;
};

export function Icon({
  decorative = false,
  height,
  size = 20,
  stroke = "currentColor",
  strokeLinecap = "round",
  strokeLinejoin = "round",
  strokeWidth = 1.75,
  title,
  viewBox = "0 0 24 24",
  width,
  ...props
}: IconProps) {
  const resolvedLabel = decorative ? undefined : title;

  return (
    <svg
      aria-hidden={decorative ? true : undefined}
      aria-label={resolvedLabel}
      fill="none"
      focusable="false"
      height={height ?? size}
      role={decorative ? undefined : "img"}
      stroke={stroke}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeWidth={strokeWidth}
      viewBox={viewBox}
      width={width ?? size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 18.5h16" />
      <path d="M6.5 14.5 10 9l2.5 2.5L17.5 5.5" />
      <path d="M17.5 5.5H14" />
      <path d="M17.5 5.5V9" />
      <circle cx="6.5" cy="14.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="10" cy="9" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="11.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="5.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
