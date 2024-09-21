import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  ExpandableButtonCard,
  ExpandableButtonCardProps,
} from "./ExpandableButtonCard";
import { useExpandableButtonCardStore } from "./useExpandableButtonCardStore";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ExpandableButtonCard",
  component: ExpandableButtonCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleExample = () => {
  const { isExpanded, setIsExpanded } = useExpandableButtonCardStore();

  return (
    <ExpandableButtonCard
      cta={
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Click to expand
        </button>
      }
    >
      <div className="mt-4 p-4 rounded-lg bg-gray-100 border border-gray-200">
        Expandable content
      </div>
    </ExpandableButtonCard>
  );
};
