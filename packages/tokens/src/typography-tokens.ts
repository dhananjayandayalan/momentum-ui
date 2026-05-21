export const typographyTokens = {
  fontFamily: {
    body: '"Bahnschrift", "DIN Alternate", "Segoe UI", sans-serif',
    mono: '"IBM Plex Mono", "Consolas", monospace'
  },
  fontSize: {
    body: "1rem",
    display: "2.5rem",
    emphasis: "1.125rem",
    label: "0.75rem",
    metric: "1.75rem"
  },
  fontWeight: {
    medium: 500,
    regular: 400,
    semibold: 600,
    strong: 700
  },
  letterSpacing: {
    body: "0em",
    display: "0.08em",
    label: "0.12em",
    metric: "0.04em"
  },
  lineHeight: {
    compact: 1.2,
    comfortable: 1.5,
    display: 1.1,
    metric: 1
  }
} as const;
