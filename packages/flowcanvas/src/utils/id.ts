let nodeIdCounter = 0;
let portIdCounter = 0;
let edgeIdCounter = 0;

export const generateNodeId = () => {
    nodeIdCounter += 1;
    return `node_${nodeIdCounter}`;
}

export const generatePortId = () => {
    portIdCounter += 1;
    return `port_${portIdCounter}`;
}

export const generateEdgeId = () => {
    edgeIdCounter += 1;
    return `edge_${edgeIdCounter}`;
}