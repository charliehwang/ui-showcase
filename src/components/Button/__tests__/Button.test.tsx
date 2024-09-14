import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe  } from "jest-axe";
import { expect, describe, it, vitest } from "vitest";
import { Button } from "../Button";

describe("Button", () => {
  it("renders the button with the correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

//   it("applies the correct CSS classes based on props", () => {
//     render(
//       <Button primary size="large">
//         Click me
//       </Button>
//     );
//     expect(screen.getByRole("button")).toHaveClass(
//       "storybook-button storybook-button--primary storybook-button--large"
//     );
//   });

//   it("applies the correct background color", () => {
//     render(<Button backgroundColor="red">Click me</Button>);
//     expect(screen.getByRole("button")).toHaveStyle({ backgroundColor: "red" });
//   });

  it("calls the onClick handler when clicked", () => {
    const handleClick = vitest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it.only("passes accessibility checks", async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
