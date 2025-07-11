import { nodeDefinitions } from "@/constants";
import { AddNodeRequest } from "@/types/nodes";
import { generateNodeId } from "@/utils/id";
import { create } from "zustand";
import type { EdgeData, FlowCanvasState, NodeData, Port } from "../types";

type FlowCanvasStore = FlowCanvasState & {
    addNode: (req: AddNodeRequest) => void;
    removeNode: (nodeId: NodeData["id"]) => void;
    updateNode: (nodeId: NodeData["id"], node: NodeData) => void;
    updateNodePosition: (NodeId: NodeData["id"], x: number, y: number) => void;

    addEdge: (edge: EdgeData) => void;
    removeEdge: (edgeId: EdgeData["id"]) => void;

    addInputPort:(nodeId: NodeData["id"], port: Port) => void;
    addOutputPort:(nodeId: NodeData["id"], port:Port) => void;
}

export const useFlowCanvasStore = create<FlowCanvasStore>((set, get) => ({
  nodes: {},
  edges: {},

  addNode: ({type, position}) => {
    const def = nodeDefinitions[type];
    if (!def) throw Error(`Invalid node type: ${type}`);

    const newNode: NodeData = {
      id: generateNodeId(),
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

  updateNode: (nodeId, node) => 
    set((state) => {
      return {
        nodes: {
          ...state.nodes,
          [nodeId]: {
            ...node
          }
        }
      }
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
    }),

  addInputPort: (nodeId, port) => {
    const node = get().nodes[`node_${nodeId}`];
    node.inputs.push(port);
  },

  addOutputPort: (nodeId, port) => {
    const node = get().nodes[`node_${nodeId}`];
    node.outputs.push(port);
  }

}));