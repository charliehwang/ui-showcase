import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta = {
  title: "Components/Title",
  component: Title,
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Sign up for our newsletter",
  },
};

export const CustomClassName: Story = {
  args: {
    children: "Custom Title",
    className: "text-blue-600 text-2xl",
  },
};