import type { Port } from "../../../types";

interface PortComponentProps {
    port: Port
}

const PortComponent = ( { port }: PortComponentProps ) => {
    return (
        <div
            className="absolute w-3 h-3 rounded full bg-gray-400"
            style={{
                left: port.position.x,
                top: port.position.y
            }}
        />
    )
}

export default PortComponent;