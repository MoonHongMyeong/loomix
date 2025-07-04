import type { Point, Size } from "./common";

export type WorkspaceSize = Size

export type WorkspaceViewPort = {
    pan: Point;
    zoom: number;
}