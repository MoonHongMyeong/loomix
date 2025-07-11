import type { Point, Size } from "./common";

export type NodeDefinition = {
    type: string;
    label: string;
    icon?: React.ReactNode;
    style?: {
        backgroundColor?: string;
        borderColor?: string;
        textColor?: string;
    };
    defaultSize: Size;
};  

export type NodeData = {
    id: string;
    type: string; // NodeDefinition과 매핑할 타입.
    position: Point;
    inputs: Port[];
    outputs: Port[];
    state?: Record<string, any>; // 런타임 실행 상태 정의용
    ui? : {
        description?: string;
        descriptionOpen?: boolean;
    }
};

export type PortSide = "left" | "right" | "top" | "bottom";

export type PortType = "input" | "output";

export type Port = {
    id: string;
    type: PortType;
    position: Point;
    side: PortSide;
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