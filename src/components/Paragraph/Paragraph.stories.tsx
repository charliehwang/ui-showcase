import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./Paragraph";

const meta = {
  title: "Components/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.",
  },
};

export const CustomClassName: Story = {
  args: {
    children: "This paragraph has a custom class applied.",
    className: "text-sm text-blue-600",
  },
};