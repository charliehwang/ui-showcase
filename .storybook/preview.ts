import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { withDarkBackground } from "./decorators";


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [withDarkBackground],
};

export default preview;
