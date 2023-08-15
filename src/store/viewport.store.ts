import { create } from "zustand";

export interface IViewportState {
  x: number;
  y: number;
  zoom: number;
}

export interface IViewportAction {
  setViewport: (params: Partial<IViewportState>) => void;
}

export type IViewport = IViewportState & IViewportAction;

const DEFAULT_X = 0;
const DEFAULT_Y = 0;
const DEFAULT_ZOOM = 1;

export const useViewportFlow = create<IViewport>()((set) => ({
  x: DEFAULT_X,
  y: DEFAULT_Y,
  zoom: DEFAULT_ZOOM,
  setViewport: (params) => set(params),
}));
