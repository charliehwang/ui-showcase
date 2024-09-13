import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { motion } from "framer-motion";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>Card content goes here</div>,
    className: "bg-gray-900 text-white",
  },
};
