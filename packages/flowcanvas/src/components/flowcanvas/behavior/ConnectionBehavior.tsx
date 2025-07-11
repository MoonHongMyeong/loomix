import { useFlowCanvasStore } from "@/store/useFlowCanvasStore";
import { useInteractionStore } from "@/store/useInteractionStore";
import { createEdge, createPort } from "@/utils/factory";
import { distributePortsOnSide } from "@/utils/node";
import { useEffect } from "react";

const ConnectBehavior = () => {
    const { connectSelection, clearConnectSelection } = useInteractionStore();
    const { nodes, updateNode, addEdge } = useFlowCanvasStore();

    useEffect(() => {
        const { fromNodeId, toNodeId } = connectSelection;
        if ( !fromNodeId || !toNodeId || fromNodeId === toNodeId ) return;

        const fromNode = nodes[fromNodeId];
        const toNode = nodes[toNodeId];
        if ( !fromNode || !toNode ) return;

        const inputPort = createPort('input');
        const outputPort = createPort('output');

        const updatedFrom = {
            ...fromNode,
            outputs: [...fromNode.outputs, outputPort]
        };
        const updateTo = {
            ...toNode,
            inputs: [...toNode.inputs, inputPort]
        };

        const relayoutFrom = distributePortsOnSide(updatedFrom, 'right');
        const relayoutTo = distributePortsOnSide(updateTo, 'left');

        updateNode(fromNodeId, relayoutFrom);
        updateNode(toNodeId, relayoutTo);

        const newEdge = createEdge(relayoutFrom, outputPort, relayoutTo, inputPort);
        addEdge(newEdge);
        
        clearConnectSelection();

    }, [connectSelection.fromNodeId, connectSelection.toNodeId]);

    return null;
}

export default ConnectBehavior;