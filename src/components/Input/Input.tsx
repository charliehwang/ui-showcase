import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  icon,
  className = "",
  ...props
}) => {
  return (
    <div className="relative w-full flex flex-col gap-1">
      <label
        htmlFor={id}
        className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          className={`block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
            icon ? "pl-10" : "pl-3"
          } p-3 ${className}`}
          id={id}
          {...props}
        />
      </div>
    </div>
  );
};
