import { create } from "zustand";
import type { EdgeData, FlowCanvasState, NodeData } from "../types";
import { AddNodeRequest } from "@/types/nodes";
import { nodeDefinitions } from "@/constants";
import { generatedNodeId } from "@/utils/id";

type FlowCanvasStore = FlowCanvasState & {
    addNode: (req: AddNodeRequest) => void;
    removeNode: (nodeId: NodeData["id"]) => void;
    updateNodePosition: (NodeId: NodeData["id"], x: number, y: number) => void;

    addEdge: (edge: EdgeData) => void;
    removeEdge: (edgeId: EdgeData["id"]) => void;
}

export const useFlowCanvasStore = create<FlowCanvasStore>((set) => ({
  nodes: {},
  edges: {},

  addNode: ({type, position}) => {
    const def = nodeDefinitions[type];
    if (!def) throw Error(`Invalid node type: ${type}`);

    const newNode: NodeData = {
      id: generatedNodeId(),
      type,
      position,
      inputs: [],
      outputs: [],
      ui: {}
    };

    set((state) => ({ nodes: {...state.nodes, [newNode.id]: newNode} }));
  },

  removeNode: (nodeId) => 
    set((state) => {
      const { [nodeId]: _, ... rest } = state.nodes;
      return { nodes: rest }
    }),

  updateNodePosition: (nodeId, x, y) => 
    set((state) => {
      const targetNode = state.nodes[nodeId];
      if (!targetNode) return {};
      return {
        nodes: {
          ...state.nodes,
          [nodeId]: {
            ...targetNode,
            position: {x, y}
          }
        }
      }
    }),

  addEdge: (edge) =>
    set((state)=>({
      edges: { ...state.edges, [edge.id]: edge }
    })),

  removeEdge: (edgeId) => 
    set((state) => {
      const { [edgeId]: _, ...rest } = state.edges;
      return { edges: rest }
    })

}));