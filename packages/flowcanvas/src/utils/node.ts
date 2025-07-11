import { nodeDefinitions } from "@/constants";
import { NodeData, PortSide } from "@/types";
import { getPortPositionOnSide } from "./port";

export const distributePortsOnSide = (node: NodeData, side: PortSide):NodeData => {
    const def = nodeDefinitions[node.type];
    if (!def) throw new Error(`Invalid node type: ${node.type}`);

    const allPorts = side === "left" || side === "top" 
        ? node.inputs 
        : node.outputs;
    
    const ports = allPorts.filter(port => port.side === side);
    const total = allPorts.length;
    if (total===0) return node;
    
    const spacing = side === "top" || side === "bottom"
        ? def.defaultSize.width / (total + 1)
        : def.defaultSize.height / (total + 1);


    const updatedPorts = ports.map((port, i) => {
        const offset = spacing * (i + 1);
        return {
            ...port,
            position : getPortPositionOnSide(side, offset, def.defaultSize),
        };
    });

    return {
        ...node,
        inputs: side === "left" || side === "top" ? updatedPorts : node.inputs,
        outputs: side === "right" || side === "bottom" ? updatedPorts : node.outputs
    }
}

export const distributeAllPorts = (node: NodeData) => {
    return ["left", "right", "top", "bottom"].reduce((acc, side) => {
        return distributePortsOnSide(node, side as PortSide)
    }, node);
};