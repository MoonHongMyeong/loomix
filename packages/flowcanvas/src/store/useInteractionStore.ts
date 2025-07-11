import { Point } from "@/types";
import { ConnectSelection, ContextMenuState } from "@/types/interaction";
import { create } from "zustand";

type InteractionStore = {
    contextMenu: ContextMenuState;
    connectSelection: ConnectSelection;

    onContextMenu: (pos: Point) => void;
    closeContextMenu:() => void;

    selectNodeForConnection:(nodeId: string) => void;
    clearConnectSelection:() => void;
};

export const useInteractionStore = create<InteractionStore>((set, get) => ({
    contextMenu: { isOpen: false, screenPosition: {x: 0, y: 0} },
    connectSelection: { fromNodeId: null, toNodeId: null },

    onContextMenu: (pos) =>
        set({contextMenu: { isOpen: true, screenPosition: pos}}),

    closeContextMenu: () => 
        set((state) => ({
            contextMenu: { ...state.contextMenu, isOpen: false}
        })),
    
    selectNodeForConnection: (nodeId) => {
        const fromNodeId = get().connectSelection.fromNodeId;
        if ( fromNodeId !== nodeId ){
            set({ connectSelection: {fromNodeId: fromNodeId, toNodeId: nodeId} });
        }
        if ( fromNodeId === null ) {
            set({ connectSelection: { fromNodeId: nodeId, toNodeId: null }});
        } 
    },

    clearConnectSelection: () => 
        set({connectSelection: { fromNodeId: null, toNodeId: null }})
}));