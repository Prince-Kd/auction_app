import { create } from "zustand";

interface productStore {
  bid: number | null;
  updateBid: (amount: number) => void;
}

const useProductStore = create<productStore>()((set) => ({
  bid: 14500,
  updateBid: async (amount: number) => {},
}));

export { useProductStore };
