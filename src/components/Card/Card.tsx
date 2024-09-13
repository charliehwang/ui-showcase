import React from "react";

export interface CardProps<T> {
  /**
   * Additional classes to apply to the card
   */
  className?: string;
  /**
   * The content to display inside the card
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * The component to render as the card
   */
  as?: T;
}


export const Card =<T extends React.ElementType | typeof React.Fragment >
({
  as: Component = "div" as T,
  className,
  children,
  onClick,
  ...props
}: CardProps<T>) => {
  return (
    <Component
      className={`rounded-xl p-4 ${className || ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};