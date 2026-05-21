export const colorTokens = {
  border: {
    focus: "#8ae0ff",
    strong: "rgba(138, 224, 255, 0.42)",
    subtle: "rgba(123, 247, 212, 0.16)"
  },
  chart: {
    trackCold: "#164154",
    trackHot: "#53d5ff",
    trackWarm: "#1f6d8c"
  },
  signal: {
    confidenceHigh: "#7bf7d4",
    fatigueWarning: "#f7b955",
    pressureDanger: "#ff6b6b",
    surge: "#3ddc97",
    transitionBurst: "#4dc3ff",
    zoneNeutral: "#5d7481"
  },
  surface: {
    canvas: "#061218",
    elevated: "#132b38",
    overlay: "rgba(6, 18, 24, 0.92)",
    panel: "#0b1d27"
  },
  text: {
    inverse: "#061218",
    muted: "#6f8894",
    primary: "#f4fbff",
    secondary: "#9cb9c7"
  }
} as const;
