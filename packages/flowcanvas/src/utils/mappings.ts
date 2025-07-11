import { PortSide, PortType } from "@/types";

export const getPortSide = (type: PortType):PortSide => {
    switch(type){
        case "input":
            return "left";
        case "output":
            return "right";
        default:
            throw new Error(`Invalid port type: ${type}`);
    }
} 