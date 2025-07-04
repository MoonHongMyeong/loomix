import type { Point } from "./common";

export type NodeData = {
    id: string;
    type: string;
    position: Point;
    inputs: Port[];
    outputs: Port[];
    state?: Record<string, any>;
};

export type Port = {
    id: string;
    label: string;
    dataType: string;
    connectedEdgeIds: string[];
};

export type EdgeData = {
    id: string;
    from: {
        nodeId: NodeData["id"];
        portId: Port["id"];
    };
    to: {
        nodeId: NodeData["id"];
        portId: Port["id"];
    }
};

export type FlowCanvasState = {
    nodes: Record<string, NodeData>;
    edges: Record<string, EdgeData>;
};