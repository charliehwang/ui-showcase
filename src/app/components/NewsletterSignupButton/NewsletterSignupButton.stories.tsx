import { Meta, StoryObj } from "@storybook/react";
import { NewsletterSignupButton } from "./NewsletterSignupButton";

const meta = {
  title: "App Components/NewsletterSignupButton",
  component: NewsletterSignupButton,
} satisfies Meta<typeof NewsletterSignupButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example = () => {
  return (
    <div className="h-96 w-96">
      <NewsletterSignupButton />
    </div>
  );
};
