import type { Port } from "@/types";
import { PORT_SIZE } from "../config";

interface PortComponentProps {
    port: Port
}

const PortComponent = ( { port }: PortComponentProps ) => {
    return (
        <div
            className={`absolute rounded-full`}
            style={{
                left: port.position.x,
                top: port.position.y,
                background: "black",
                width: PORT_SIZE,
                height: PORT_SIZE
            }}
        />
    )
}

export default PortComponent;