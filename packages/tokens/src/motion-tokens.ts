export const motionTokens = {
  duration: {
    deliberate: "320ms",
    instant: "80ms",
    persistent: "480ms",
    quick: "160ms",
    standard: "240ms"
  },
  easing: {
    emphasized: "cubic-bezier(0.2, 0, 0, 1)",
    linear: "linear",
    predictive: "cubic-bezier(0.16, 1, 0.3, 1)"
  }
} as const;
