import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  addons: ["@storybook/addon-a11y"],
  docs: {},
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  stories: ["../stories/**/*.stories.@(ts|tsx)"]
};

export default config;
