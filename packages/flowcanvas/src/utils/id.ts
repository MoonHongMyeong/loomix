let nodeIdCounter = 0;

export const generatedNodeId = () => {
    nodeIdCounter += 1;
    return `node_${nodeIdCounter}`;
}