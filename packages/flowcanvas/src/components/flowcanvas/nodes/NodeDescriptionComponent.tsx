interface NodeDescriptionProps {
    description?: string;
    isOpen?: boolean;
}

const NodeDescriptionComponent = ( {description, isOpen}: NodeDescriptionProps ) => {
    if(!description) return null;

    return (
        <div 
            className={`absolute left-full top-0 ml-2 max-w-xs text-xs p-2 rounded bg-yellow-100 border border-yellow-300 shadow
            ${isOpen ? '' : 'opacity-0 group-hover:opacity-100 pointer-events-none'}
      `}
        >
            <span>
                {description}
            </span>
        </div>
    )
}

export default NodeDescriptionComponent;