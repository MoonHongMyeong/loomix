import { EdgeData, NodeData, Port, PortType } from "@/types";
import { generateEdgeId, generatePortId } from "./id";
import { getPortSide } from "./mappings";

const tempPos = {
    x: 0, 
    y: 0
}

export const createPort = (type: PortType):Port => {
    const side = getPortSide(type);
    return {
        id: generatePortId(),
        type,
        side,
        position: tempPos
    }
}

export const createEdge = (fromNode: NodeData, fromPort: Port, toNode: NodeData, toPort: Port): EdgeData => {
    return {
        id: generateEdgeId(),
        from: {
            nodeId: fromNode.id,
            portId: fromPort.id
        },
        to: {
            nodeId: toNode.id,
            portId: toPort.id
        }
    }
}