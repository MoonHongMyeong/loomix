export type WorkspaceConfig = {
    width: number;
    height: number;
    minZoom: number;
    maxZoom: number;
}

export type WorkspaceState = {
    pan: { // view port offset
        x: number;
        y: number;
    };
    zoom: number;
}