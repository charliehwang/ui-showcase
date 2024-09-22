import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useExpandableButtonCardStore } from "../useExpandableButtonCardStore";

describe("useExpandableButtonCardStore", () => {
  it("should initialize with isExpanded as false", () => {
    const { result } = renderHook(() => useExpandableButtonCardStore());
    expect(result.current.isExpanded).toBe(false);
  });

  it("should update isExpanded when setIsExpanded is called", () => {
    const { result } = renderHook(() => useExpandableButtonCardStore());

    act(() => {
      result.current.setIsExpanded(true);
    });

    expect(result.current.isExpanded).toBe(true);

    act(() => {
      result.current.setIsExpanded(false);
    });

    expect(result.current.isExpanded).toBe(false);
  });
});
