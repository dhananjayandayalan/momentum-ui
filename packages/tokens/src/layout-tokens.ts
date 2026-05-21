export const breakpointTokens = {
  compact: "30rem",
  medium: "48rem",
  ultra: "90rem",
  wide: "64rem"
} as const;

export const shadowTokens = {
  focusRing: "0 0 0 1px rgba(138, 224, 255, 0.54), 0 0 0 4px rgba(77, 195, 255, 0.18)",
  panel: "0 18px 40px rgba(3, 10, 16, 0.42)",
  raised: "0 10px 24px rgba(4, 14, 20, 0.32)"
} as const;

export const zIndexTokens = {
  base: 0,
  command: 1100,
  modal: 1000,
  overlay: 40,
  sticky: 100,
  toast: 400
} as const;
