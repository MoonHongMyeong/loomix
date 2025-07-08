import { useInteractionStore } from "@/store/useInteractionStore";
import EdgeCanvas from "./canvas/EdgeCanvas";
import EdgeEventCanvas from "./canvas/EdgeEventCanvas";
import NodeRenderer from "./nodes/NodeRenderer";
import CanvasContextMenu from "./overlay/CanvasContextMenu";

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
        </div>
    );
};

export default Flowcanvas;