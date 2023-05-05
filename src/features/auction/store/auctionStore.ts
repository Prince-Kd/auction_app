import { create } from "zustand";

interface AuctionStoreIntefrace {
  categories: Array<any>;
  loadingCategories: boolean;
  searchCategory: (query: string) => Promise<any>;
  createAuction: (args: createAuctionInterface) => Promise<any>;
}

const useAuctionStore = create<AuctionStoreIntefrace>()((set) => ({
  categories: [],
  loadingCategories: false,
  searchCategory: async (query: string) => {},
  createAuction: async (args: createAuctionInterface) => {},
}));

export default useAuctionStore;
