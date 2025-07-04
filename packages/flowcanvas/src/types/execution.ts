export type NodeExecutionState = "idle" | "running" | "success" | "error";

export type EdgeExecutionState = "idle" | "transmitting" | "error"; 

export type NodeExecutionStatus = {
    [nodeId: string] : {
        status: NodeExecutionState;
        result? : any;
        errorMessage? : string;
    }
};

export type EdgeExecutionStatus = {
    [EdgeId: string] : {
        status: EdgeExecutionState;
    }
};

export type EngineLogMessage = {
    timestamp: number;
    level: "info" | "warn" | "error" | "debug";
    message: string;
    relatedNodeId?: string;
}