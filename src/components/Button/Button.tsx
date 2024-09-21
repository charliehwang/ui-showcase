import React, { ComponentProps } from "react";
import "./button.css";

export interface ButtonProps<T extends React.ElementType = "button"> {
  /**
   * Additional classes to apply to the button
   */
  className?: string;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent<T>) => void;
  /**
   * The component to render as the button
   */
  as?: T;
}

/**
 * Primary UI component for user interaction
 */
export const Button = <T extends React.ElementType = "button">({
  as,
  backgroundColor,
  children,
  className,
  primary = false,
  size = "medium",
  ...props
}: ButtonProps<T>) => {
  // const Component = as || "button";
  const Component = as || "button";
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  console.log({ children, layoutId: props.layoutId });

  return (
    <Component
      className={`bg-blue-300 hover:bg-blue-700 focus:ring-blue-800 text-white focus:outline-none focus:ring font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ${className}`}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </Component>
  );
};
