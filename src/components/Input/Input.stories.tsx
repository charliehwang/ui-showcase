import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const EmailIcon = () => (
  <svg
    className="w-5 h-5 text-gray-500 dark:text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
  </svg>
);

export const Default: Story = {
  args: {
    id: "default-input",
    label: "Default Input",
    placeholder: "Enter text",
    type: "text",
  },
};

export const Email: Story = {
  args: {
    id: "email-input",
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
    icon: <EmailIcon />,
    required: true,
  },
};

export const Password: Story = {
  args: {
    id: "password-input",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    required: true,
  },
};
