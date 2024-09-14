import type { Preview, Decorator } from "@storybook/react";
import React from "react";

export const withDarkBackground: Decorator = (Story, context) => {
  return (
    <div
      style={{
        // background: context.parameters.darkMode ? "#1F2028" : "#F6F9FC",
        background: "#1F2028",
        height: "100vh",
        padding: "2rem",
      }}
    >
      <Story />
      <style>
        {`
          #storybook-root {
            height: 100vh;
          }
          .sb-main-padded {
            padding: 0;
          }
        `}
      </style>
    </div>
  );
};

export const withPadding: Decorator = (Story, context) => {
  return (
    <div style={{ padding: "2rem" }}>
      <Story />
    </div>
  );
};