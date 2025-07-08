import { useFlowCanvasStore } from "../../../store/useFlowCanvasStore";
import NodeComponent from "./NodeComponent";

const NodeRenderer = () => {
    const nodes = useFlowCanvasStore((state) => state.nodes);

    return (
        <div id="node-renderer" className="absolute top-0 left-0 w-full h-full">
            {Object.values(nodes).map(node => (
                <NodeComponent key={node.id} node={node}/>
            ))}            
        </div>
    )
}

export default NodeRenderer;