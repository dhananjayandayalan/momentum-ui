import type { Meta, StoryObj } from "@storybook/react-vite";
import { PhaseOnePlaceholder } from "@momentum-ui/react";

const meta = {
  component: PhaseOnePlaceholder,
  parameters: {
    a11y: {
      test: "error"
    }
  },
  title: "Foundation/PhaseOnePlaceholder"
} satisfies Meta<typeof PhaseOnePlaceholder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Momentum UI",
    status: "Repository scaffold online"
  }
};
