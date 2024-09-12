import React, { ComponentProps } from "react";
import "./button.css";
import { motion } from "framer-motion";

export interface ButtonProps extends ComponentProps<"button"> {
  /**
   * Additional classes to apply to the button
   */
  className?: string;
  /**
   * The layoutId to use for the button
   */
  layoutId?: string;
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
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  backgroundColor,
  children,
  className,
  layoutId,
  primary = false,
  size = "medium",
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <motion.button
      className={className}
      layoutId={layoutId}
      style={{ backgroundColor }}
      type="button"
      {...props}
    >
      {children}
    </motion.button>
  );
};
