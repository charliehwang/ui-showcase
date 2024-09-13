import React from "react";

interface NewsletterInputProps {
  id: string;
  placeholder: string;
  required?: boolean;
}

export const NewsletterInput: React.FC<NewsletterInputProps> = ({
  id,
  placeholder,
  required = false,
}) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Email address
      </label>
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
        </svg>
      </div>
      <input
        className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={placeholder}
        type="email"
        id={id}
        required={required}
      />
    </div>
  );
};