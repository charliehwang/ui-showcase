import type { Meta, StoryObj } from "@storybook/react";
import { NewsletterInput } from "./NewsletterInput";

const meta = {
  title: "Components/NewsletterInput",
  component: NewsletterInput,
  tags: ["autodocs"],
} satisfies Meta<typeof NewsletterInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "email",
    placeholder: "Enter your email",
    required: true,
  },
};