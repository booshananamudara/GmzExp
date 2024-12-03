import { create } from "zustand";

const useClickStore = create((set) => ({
  platformClicks: {},
  toggleClick: (platformId) => set((state) => {
    const currentCount = state.platformClicks[platformId] || 0;
    return {
      platformClicks: {
        ...state.platformClicks,
        [platformId]: currentCount === 0 ? 1 : 0,
      },
    };
  }),
}));

export default useClickStore;
