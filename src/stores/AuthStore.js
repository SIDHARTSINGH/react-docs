import { create } from "zustand";

const useAuthStore = create((set) => ({
  status: false,
  user: null,
  login: async () => {},
  setUser: (userId) => set(() => ({ user: userId })),
  setStatus: () =>
    set((store) => ({
      status: !store.status,
    })),
}));

export default useAuthStore;
