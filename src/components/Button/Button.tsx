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
   * The layoutId to use for the button
   */
  layoutId?: string;
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
  layoutId,
  primary = false,
  size = "medium",
  ...props
}: ButtonProps<T>) => {
  const Component = as || "button";
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <Component
      className={
        "bg-blue-300 hover:bg-blue-700 focus:ring-blue-800 text-white focus:outline-none focus:ring font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
      }
      {...(Component === "button" && { layoutId })}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </Component>
  );
};
