import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { NewsletterSignupButton } from "./NewsletterSignupButton";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta = {
  title: "App Components/NewsletterSignupButton",
  component: NewsletterSignupButton,
} satisfies Meta<typeof NewsletterSignupButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof NewsletterSignupButton> = (args) => (
  <div className="h-96 w-96">
    <NewsletterSignupButton {...args} />
  </div>
);

export const Default: Story = {
  render: Template,
  args: {
    onSubmit: () => {},
  },
};

export const TestHappyPath: Story = {
  render: Template,
  args: {
    onSubmit: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find and click the "Subscribe" button
    const subscribeNowButton = canvas.getByText("Subscribe now!");
    await userEvent.click(subscribeNowButton);

    // Check if the expanded form is visible
    const emailInput = await canvas.findByPlaceholderText("Enter your email");
    expect(emailInput).toBeInTheDocument();

    // Find the email input and enter an email
    await userEvent.type(emailInput, "charlie@me.com");

    // Check if the email was entered correctly
    expect(emailInput).toHaveValue("charlie@me.com");

    const subscribeButton = canvas.getByText("Subscribe");
    await userEvent.click(subscribeButton);
  },
};

export const TestCancellation: Story = {
  render: Template,
  args: {
    onSubmit: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find and click the "Subscribe now!" button
    const subscribeNowButton = canvas.getByText("Subscribe now!");
    await userEvent.click(subscribeNowButton);

    // Check if the expanded form is visible
    const emailInput = await canvas.findByPlaceholderText("Enter your email");
    expect(emailInput).toBeInTheDocument();

    const closeButton = canvas.getByText("Cancel");
    await userEvent.click(closeButton);

    // Check if the "Subscribe now!" button is still visible
    expect(canvas.getByText("Subscribe now!")).toBeInTheDocument();

    // Ensure the expanded form is no longer visible
    expect(emailInput).not.toBeInTheDocument();
  },
};
