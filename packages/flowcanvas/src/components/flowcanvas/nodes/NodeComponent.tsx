import { nodeDefinitions } from "@/constants";
import type { NodeData } from "@/types";
import NodeDescriptionComponent from "./NodeDescriptionComponent";
import PortComponent from "./PortComponent";

interface NodeComponentProps {
    node: NodeData;
};

const NodeComponent = ( { node }: NodeComponentProps ) => {
    const def = nodeDefinitions[node.type];
    if(!def) return null;

    return (
        <div 
            className="absolute border rounded"
            style={{
                left: node.position.x,
                top: node.position.y,
                width: def.defaultSize.width,
                height: def.defaultSize.height,
                backgroundColor: def.style?.backgroundColor,
                borderColor: def.style?.borderColor,
                color: def.style?.textColor
            }}
        >
            {/* 라벨 */}
            <div className="flex items-center gap-1 px-2 py-1 border-b border-gray-300">
                {def.icon && <span className="w-4 h-4">{def.icon}</span>}
                <span className="font-semibold text-xs">{def.label}</span>
            </div>
            <div className="relative w-full h-full">
                {/* 입력 포트 */}
                {node.inputs.map((port) => (
                    <PortComponent key={port.id} port={port}/>
                ))}
                {/* 출력 포트 */}
                {node.outputs.map((port) => (
                    <PortComponent key={port.id} port={port}/>
                ))}
            </div>
            {/* 설명 */}
            <NodeDescriptionComponent 
                description={node.ui?.description } 
                isOpen={node.ui?.descriptionOpen}
            />
        </div>
    )
}

export default NodeComponent;