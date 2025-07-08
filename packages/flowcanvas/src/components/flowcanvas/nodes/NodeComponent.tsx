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
            <div className="relative w-full h-full">
                {/* 라벨 */}
                <div className="absolute top-0 left-0 w-full h-full pointer-event-none z-10">
                    <div className="flex justify-center items-center w-full h-full">
                        {def.icon && <span className="w-4 h-4">{def.icon}</span>}
                        <span className="font-semibold text-xs">{def.label}</span>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full z-20">
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
        </div>
    )
}

export default NodeComponent;