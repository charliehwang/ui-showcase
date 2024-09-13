import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ children, className = "" }) => {
  return (
    <h2 className={`mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white ${className}`}>
      {children}
    </h2>
  );
};