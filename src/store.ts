import { create } from "zustand";

interface State {
  showMenu: boolean;
}

interface Action {
  openCloseMenu: () => void;
}

export const useShowMenuStore = create<State & Action>()((set) => ({
  showMenu: false,
  openCloseMenu: () => set((state) => ({ showMenu: !state.showMenu })),
}));
