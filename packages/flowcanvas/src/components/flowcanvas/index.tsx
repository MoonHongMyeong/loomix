import { useInteractionStore } from "@/store/useInteractionStore";
import EdgeCanvas from "./canvas/EdgeCanvas";
import EdgeEventCanvas from "./canvas/EdgeEventCanvas";
import NodeRenderer from "./nodes/NodeRenderer";
import CanvasContextMenu from "./overlay/CanvasContextMenu";
import ConnectBehavior from "./behavior/ConnectionBehavior";

const Flowcanvas = () => {
    const openContextMenu = useInteractionStore((state) => state.onContextMenu);

    return(
        <div 
            className="relative w-full h-full"
            onContextMenu = {e => {
                e.preventDefault();
                openContextMenu({x: e.clientX, y: e.clientY});
            }}
        >
            <EdgeCanvas/>
            <EdgeEventCanvas/>
            <NodeRenderer/>
            
            <CanvasContextMenu/>

            <ConnectBehavior/>
        </div>
    );
};

export default Flowcanvas;