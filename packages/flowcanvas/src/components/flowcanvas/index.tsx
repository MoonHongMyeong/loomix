import EdgeCanvas from "./canvas/EdgeCanvas";
import EdgeEventCanvas from "./canvas/EdgeEventCanvas";
import NodeRenderer from "./nodes/NodeRenderer";

const Flowcanvas = () => {
    return(
        <div className="relative w-full h-full">
            <EdgeCanvas/>
            <EdgeEventCanvas/>
            <NodeRenderer/>
        </div>
    );
};

export default Flowcanvas;