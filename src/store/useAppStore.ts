import { create } from "zustand";

export type ZustandSetter<T> = (partial: Partial<T>, replace?: false) => void;

export type ZustandGetter<T> = () => T;

export type StoreActions<T, R> = (set: ZustandSetter<T>, get: ZustandGetter<T>) => R;

export interface AppModel {
  loaded: boolean;
  width: number;
  height: number;
  visualHeight: number;
}

export interface AppActions {
  setLoaded: (loaded: boolean) => void;
  setWidthHeight: (width: number, height: number) => void;
  setVisualHeight: (height: number) => void;
}

export interface AppStore extends AppModel, AppActions {}

export const appInitialState: AppModel = {
  loaded: true,
  width: 0,
  height: 0,
  visualHeight: 0,
};

const getAppStoreActions: StoreActions<AppModel & AppActions, AppActions> = (set, get) => ({
  setLoaded: (loaded) => set({ loaded }),
  setWidthHeight: (width, height) => set({ width, height }),
  setVisualHeight: (height) => set({ visualHeight: height }),
});

export const useAppStore = create<AppStore>((set, get) => ({
  ...appInitialState,
  ...getAppStoreActions(set, get),
}));
