import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, className = "" }) => {
  return (
    <p className={`mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400 ${className}`}>
      {children}
    </p>
  );
};