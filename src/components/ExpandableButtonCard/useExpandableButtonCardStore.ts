import { create } from "zustand";

interface ExpandableButtonCardStore {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

export const useExpandableButtonCardStore = create<ExpandableButtonCardStore>(
  (set) => ({
    isExpanded: false,
    setIsExpanded: (isExpanded) => set({ isExpanded }),
  })
);
