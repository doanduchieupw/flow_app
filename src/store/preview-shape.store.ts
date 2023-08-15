import { create } from "zustand";

export interface IPreviewShapeState {
  isDrawing: boolean;
  zIndex: number;
  cursor: "default" | "crosshair";
}

export interface IPreviewShapeAction {
  setPreview: (params: Partial<IPreviewShapeState>) => void;
  setInitPreview: () => void;
  setDrawing: (state: boolean) => void;
}

export type IPreviewShape = IPreviewShapeState & IPreviewShapeAction;

const DEFAULT_IS_DRAWING = false;
const DEFAULT_Z_INDEX = 30;
const DEFAULT_CURSOR = "default";

export const usePreviewShape = create<IPreviewShape>()((set) => ({
  isDrawing: DEFAULT_IS_DRAWING,
  zIndex: DEFAULT_Z_INDEX,
  cursor: DEFAULT_CURSOR,
  setPreview: (params) => set(params),
  setInitPreview: () =>
    set({ zIndex: DEFAULT_Z_INDEX, cursor: DEFAULT_CURSOR }),
  setDrawing: (state) => set({ isDrawing: state }),
}));
