import { useCanvasViewportStore } from "@/store/useCanvasViewportStore"
import { Point } from "@/types";

export const screenToCanvasPos = (screen: Point) => {
    const { pan, zoom } = useCanvasViewportStore.getState();

    return {
        x: screen.x - pan.x / zoom,
        y: screen.y - pan.y / zoom
    }
}