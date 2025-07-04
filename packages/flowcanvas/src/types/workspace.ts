import type { Point, Size } from "./common";

export type WorkspaceConfig = Size & {
    minZoom: number;
    maxZoom: number;
}

export type WorkspaceViewPort = {
    pan: Point;
    zoom: number;
}