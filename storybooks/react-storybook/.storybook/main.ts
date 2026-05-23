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
    },
    resolve: {
      ...viteConfig.resolve,
      alias: {
        ...viteConfig.resolve?.alias,
        "@momentum-ui/core-css/styles.css": new URL(
          "../../../packages/core-css/src/styles.css",
          import.meta.url
        ).pathname
      }
    }
  })
};

export default config;
