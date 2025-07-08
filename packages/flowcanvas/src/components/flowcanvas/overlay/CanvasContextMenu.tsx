import { nodeDefinitions } from "@/constants";
import { useFlowCanvasStore } from "@/store/useFlowCanvasStore";
import { useInteractionStore } from "@/store/useInteractionStore";
import { screenToCanvasPos } from "@/utils/coordinate";

const CanvasContextMenu = () => {
    const { isOpen, screenPosition } = useInteractionStore(state => state.contextMenu);
    const closeContextMenu = useInteractionStore(state => state.closeContextMenu);
    const addNode = useFlowCanvasStore(state => state.addNode);
    const nodes = useFlowCanvasStore.getState().nodes;
    if(!isOpen) return null;

    const handleAddNode = (type: string) => {
        console.log(nodes);
        const canvasPos = screenToCanvasPos(screenPosition);
        addNode({type, position: canvasPos});
        closeContextMenu();
    };

    return (
        <div
            className="absolute z-50 bg-white border rounded shadow"
            style={{ top: screenPosition.y, left: screenPosition.x }}
        >
            {Object.entries(nodeDefinitions).map(([type, def]) => (
                <div
                    key={type}
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleAddNode(type)}
                >
                {def.label}
                </div>
            ))}
        </div>
    )
}

export default CanvasContextMenu;