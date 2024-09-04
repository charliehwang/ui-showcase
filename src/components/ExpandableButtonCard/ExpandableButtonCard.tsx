import React from "react";
import { Button } from "../Button/Button";
import { useExpandableButtonCardStore } from "./useExpandableButtonCardStore";
import { AnimatePresence, motion } from "framer-motion";
import { useEscapeKey } from "../hooks/useEscapeKey";

export interface ButtonProps {
  /**
   * Button contents
   */
  children: React.ReactNode;
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
export const ExpandableButtonCard = ({
  children,
  primary = false,
  size = "medium",
  backgroundColor,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const { isExpanded, setIsExpanded } = useExpandableButtonCardStore();

  useEscapeKey(() => setIsExpanded(false));

  return (
    <div className="relative h-full outline-1 outline-red-400">
      <Button onClick={() => setIsExpanded(!isExpanded)}>Testing</Button>
      {/* <AnimatePresence initial={false}> */}
      {isExpanded && (
        <motion.div
          className="expandable-contents absolute top-0 left-0 flex flex-col items-center justify-center w-[300px] bg-slate-400 outline-1 outline-red-400 p-4 overflow-hidden"
          initial={{ scaleY: 0, opacity: 0, transformOrigin: "top" }}
          animate={{
            scaleY: 1,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          exit={{
            scaleY: 0,
            opacity: 0,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <div className="w-[300px]">
            <p>
              Hi whoooooooooooooo asoidjfaoisdjfioasjdf ay ay ay ay ay ay ay ay
              ay
            </p>
            <Button onClick={() => setIsExpanded(!isExpanded)}>
              whoaaooaaa
            </Button>
          </div>
        </motion.div>
      )}
      {/* </AnimatePresence> */}
    </div>
  );
};
