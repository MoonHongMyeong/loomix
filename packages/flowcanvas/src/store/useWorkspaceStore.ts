import { create } from "zustand";
import type { WorkspaceSize } from "../types";

type WorkspaceStore = WorkspaceSize & {
    setWorkspaceSize: (width: number, height: number) => void;
    expandToFit: (x: number, y: number, padding?: number) => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set, get) => ({
  width: 2000,
  height: 1000,

  setWorkspaceSize: (width, height) => set({ width, height }),

  expandToFit: (x, y, padding = 200) => {
    const { width, height } = get();
    const newWidth = x + padding > width ? x + padding : width;
    const newHeight = y + padding > height ? y + padding : height;
    if (newWidth !== width || newHeight !== height) {
      set({ width: newWidth, height: newHeight });
    }
  },
}));