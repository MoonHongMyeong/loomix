export type NodeExecutionState = "idle" | "running" | "success" | "error";

export type EdgeExecutionState = "idle" | "transmitting" | "error"; 

export type NodeStatus = {
    status: NodeExecutionState;
    result? : any;
    errorMessage? : string;
};

export type EdgeStatus = {
    status: EdgeExecutionState;
};

export type EngineLogMessage = {
    timestamp: number;
    level: "info" | "warn" | "error" | "debug";
    message: string;
    relatedNodeId?: string;
}

export type NodeExecutionStatus = Record<string, NodeStatus>;
export type EdgeExecutionStatus = Record<string, EdgeStatus>;