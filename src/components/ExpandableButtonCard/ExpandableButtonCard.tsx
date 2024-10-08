import React from "react";
import { useExpandableButtonCardStore } from "./useExpandableButtonCardStore";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { AnimatePresence, motion } from "framer-motion";

export interface ExpandableButtonCardProps {
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * CTA Button contents
   */
  cta: React.ReactElement;
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
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const ExpandableButtonCard = ({
  children,
  cta,
  primary = false,
  size = "medium",
  backgroundColor,
  ...props
}: ExpandableButtonCardProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const { isExpanded, setIsExpanded } = useExpandableButtonCardStore();

  useEscapeKey(() => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  });

  return (
    <section className="relative h-full outline-1">
      {/* <AnimatePresence>{isExpanded ? children : null}</AnimatePresence> */}
      <AnimatePresence>{isExpanded ? children : cta}</AnimatePresence>
    </section>
  );
};

export { ExpandableButtonCard };
