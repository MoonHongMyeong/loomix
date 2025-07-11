import { PORT_SIZE } from "@/components/flowcanvas/config";
import { PortSide, Size } from "@/types";

export const getPortPositionOnSide = (side: PortSide, offset: number, nodeSize: Size) => {
    switch(side){
        case "left": return { x: -PORT_SIZE/2, y: offset - PORT_SIZE/2 };
        case "right": return { x: nodeSize.width - PORT_SIZE/2, y: offset - PORT_SIZE/2 };
        case "top": return { x: offset - PORT_SIZE/2, y: - PORT_SIZE/2 };
        case "bottom": return { x: offset - PORT_SIZE/2, y: nodeSize.height + PORT_SIZE/2 };
        default:
            throw new Error(`Invalid port side : ${side}`)
    }
}