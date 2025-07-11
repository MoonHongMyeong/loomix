import { Point } from "./common";

export type ContextMenuState = {
    isOpen: boolean;
    screenPosition: Point;
}

export type ConnectSelection = {
    fromNodeId: string | null;
    toNodeId: string | null;
}