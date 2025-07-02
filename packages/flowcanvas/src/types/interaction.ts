export type NodeInteractionState = "idle" | "running" | "success" | "error";

export type EdgeInteractionState = "idle" | "transmitting" | "error"; 

export type NodeInteractionStatus = {
    [nodeId: string] : {
        status: NodeInteractionState;
        result? : any;
        errorMessage? : string;
    }
};

export type EdgeInteractionStatus = {
    [EdgeId: string] : {
        status: EdgeInteractionState;
    }
};

export type EngineLogMessage = {
    timestamp: number;
    level: "info" | "warn" | "error" | "debug";
    message: string;
    relatedNodeId?: string;
}