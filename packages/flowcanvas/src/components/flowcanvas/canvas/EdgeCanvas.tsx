import { useFlowCanvasStore } from "@/store/useFlowCanvasStore";
import { calculatePortCanvasPosition } from "@/utils/coordinate";
import { useEffect, useRef } from "react";

const EdgeCanvas = () => {
    const nodes = useFlowCanvasStore(state => state.nodes);
    const edges = useFlowCanvasStore(state => state.edges);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        Object.values(edges).forEach((edge) => {
            const fromNode = nodes[edge.from.nodeId];
            const toNode = nodes[edge.to.nodeId];
            if (!fromNode || !toNode) return;

            const fromPort = [
                ...fromNode.inputs,
                ...fromNode.outputs
            ].find(p => p.id === edge.from.portId);

            const toPort = [
                ...toNode.inputs,
                ...toNode.outputs
            ].find(p => p.id === edge.to.portId);
            if (!fromPort || !toPort) return;

            const from = calculatePortCanvasPosition(fromNode, fromPort);
            const to = calculatePortCanvasPosition(toNode, toPort);

            ctx.beginPath()
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.closePath()
            ctx.stroke();
        });
    }, [nodes, edges])

    return (
        <canvas ref={canvasRef} id="edge-canvas" className="absolute top-0 left-0 w-full h-full"/>
    )
}

export default EdgeCanvas;