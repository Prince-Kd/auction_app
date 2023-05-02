import { create } from "zustand";

interface BottomNavStore {
  activeIndex: number;
  updateActive: (index: number) => void;
}

const useBottomNavStore = create<BottomNavStore>()((set) => ({
  activeIndex: 0,
  updateActive: (index) => {
    set({ activeIndex: index });
  },
}));

export { useBottomNavStore };
