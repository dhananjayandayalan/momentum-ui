import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  addons: ["@storybook/addon-a11y"],
  docs: {},
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  viteFinal: async (viteConfig) => ({
    ...viteConfig,
    build: {
      ...viteConfig.build,
      chunkSizeWarningLimit: 1200
    }
  })
};

export default config;
