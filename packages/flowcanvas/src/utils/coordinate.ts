import { PORT_SIZE } from "@/components/flowcanvas/config";
import { useCanvasViewportStore } from "@/store/useCanvasViewportStore";
import { NodeData, Point, Port } from "@/types";

export const screenToCanvasPos = (screen: Point) => {
    const { pan, zoom } = useCanvasViewportStore.getState();

    return {
        x: screen.x - pan.x / zoom,
        y: screen.y - pan.y / zoom
    }
}

export const calculatePortCanvasPosition = (node: NodeData, port: Port) => {
    const nodeX = node.position.x;
    const nodeY = node.position.y;
    
    const portX = port.position.x;
    const portY = port.position.y;
    const side = port.side;

    switch(side){
        case "left":
            return {
                x: nodeX + PORT_SIZE/2,
                y: nodeY + portY + PORT_SIZE/2
            }
        case "right": 
            return {
                x: nodeX + portX + PORT_SIZE/2,
                y: nodeY + portY + PORT_SIZE/2
            }
        case "top":
            return {
                x: nodeX + portX + PORT_SIZE/2,
                y: nodeY + PORT_SIZE/2
            }
        case "bottom":
            return {
                x: nodeX + portX + PORT_SIZE/2,
                y: nodeY + portY + PORT_SIZE/2
            }
        default:
            throw new Error(`Invalid port side: ${side}`)
    }
}