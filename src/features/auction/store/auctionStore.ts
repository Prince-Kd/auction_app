import { create } from "zustand";

interface AuctionStoreIntefrace {
  category: string | undefined;
  searchCategory: (query: string) => Promise<any>;
  createAuction: (args: createAuctionInterface) => Promise<any>;
}

const useAuctionStore = create<AuctionStoreIntefrace>()((set) => ({
  category: undefined,
  searchCategory: async (query: string) => {},
  createAuction: async (args: createAuctionInterface) => {},
}));

export default useAuctionStore;
