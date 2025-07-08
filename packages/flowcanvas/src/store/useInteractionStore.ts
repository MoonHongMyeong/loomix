import { Point } from "@/types";
import { ContextMenuState } from "@/types/interaction";
import { create } from "zustand";

type InteractionStore = {
    contextMenu: ContextMenuState;
    onContextMenu: (pos: Point) => void;
    closeContextMenu:() => void;
};

export const useInteractionStore = create<InteractionStore>((set) => ({
    contextMenu: { isOpen: false, screenPosition: {x: 0, y: 0} },

    onContextMenu: (pos) =>
        set({contextMenu: { isOpen: true, screenPosition: pos}}),

    closeContextMenu: () => 
        set((state) => ({
            contextMenu: { ...state.contextMenu, isOpen: false}
        }))
}));