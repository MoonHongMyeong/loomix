import { create } from "zustand";
import type { WorkspaceViewPort } from "../types";
import { ZOOM_LIMITS } from "../constants";

type ViewportStore = WorkspaceViewPort & {
    setPan: (x: number, y: number) => void;
    setZoom: (zoom: number) => void;
}

export const useCanvasViewportStore = create<ViewportStore>((set) => ({
    pan: {x:1, y:1},
    zoom: 1,

    setPan:(x,y) => set({pan: {x,y}}),

    setZoom:(zoom) => {
        const clamped = Math.max(ZOOM_LIMITS.min, Math.min(ZOOM_LIMITS.max, zoom));
        set({zoom: clamped});
    }
}))