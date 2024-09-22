import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ExpandableButtonCard } from "../ExpandableButtonCard";
import { useExpandableButtonCardStore } from "../useExpandableButtonCardStore";

// Mock the useExpandableButtonCardStore hook
vi.mock("../useExpandableButtonCardStore");

describe("ExpandableButtonCard", () => {
  const mockSetIsExpanded = vi.fn();

  beforeEach(() => {
    (
      useExpandableButtonCardStore as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue({
      isExpanded: true,
      setIsExpanded: mockSetIsExpanded,
    });
  });

  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  it("should collapse when Escape key is pressed", async () => {
    const user = userEvent.setup();
    render(
      <ExpandableButtonCard cta={<button>CTA</button>}>
        <div>Expanded Content</div>
      </ExpandableButtonCard>
    );

    await user.keyboard("{Escape}");

    expect(mockSetIsExpanded).toHaveBeenCalledWith(false);
  });

  it("should not call setIsExpanded when Escape key is pressed and card is already collapsed", async () => {
    const user = userEvent.setup();
    (
      useExpandableButtonCardStore as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue({
      isExpanded: false,
      setIsExpanded: mockSetIsExpanded,
    });

    render(
      <ExpandableButtonCard cta={<button>CTA</button>}>
        <div>Expanded Content</div>
      </ExpandableButtonCard>
    );

    await user.keyboard("{Escape}");

    expect(mockSetIsExpanded).not.toHaveBeenCalled();
  });

  it("should render children when expanded", () => {
    render(
      <ExpandableButtonCard cta={<button>CTA</button>}>
        <div>Expanded Content</div>
      </ExpandableButtonCard>
    );

    expect(screen.getByText("Expanded Content")).toBeInTheDocument();
    expect(screen.queryByText("CTA")).not.toBeInTheDocument();
  });

  it("should render CTA when collapsed", () => {
    (
      useExpandableButtonCardStore as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue({
      isExpanded: false,
      setIsExpanded: mockSetIsExpanded,
    });

    render(
      <ExpandableButtonCard cta={<button>CTA</button>}>
        <div>Expanded Content</div>
      </ExpandableButtonCard>
    );

    expect(screen.getByText("CTA")).toBeInTheDocument();
    expect(screen.queryByText("Expanded Content")).not.toBeInTheDocument();
  });
});
