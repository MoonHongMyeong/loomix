import { create } from "zustand";
import type { EdgeExecutionStatus, EdgeStatus, NodeExecutionStatus, NodeStatus } from "../types"

type ExecutionStore = {
    nodeStatus: NodeExecutionStatus;
    edgeStatus: EdgeExecutionStatus;

    setNodeStatus:(nodeId: string, status: NodeStatus) => void;
    setEdgeStatus:(edgeId: string, status: EdgeStatus) => void;
    resetAll:() => void
}

export const ExecutionStore = create<ExecutionStore>((set) => ({
    nodeStatus: {},
    edgeStatus: {},

    setNodeStatus: (nodeId, status) =>
        set((state) => ({
            nodeStatus: {
                ...state.nodeStatus,
                [nodeId]: status
            }
        })),
    
    setEdgeStatus: (edgeId, status) => 
        set((state) => ({
            edgeStatus: {
                ...state.edgeStatus,
                [edgeId]: status
            }
        })),

    resetAll:() =>
        set({
            nodeStatus: {},
            edgeStatus: {}
        })
}));
