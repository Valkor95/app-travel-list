import { create } from "zustand";
import { persist } from "zustand/middleware";
// Zustand store for managing items in a travel list application

const useItemStore = create(
  persist(
    (set) => ({
      items: [],
      isLoading: false,
      error: null,
      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),
      setItems: (items) => set({ items }),
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      updateItem: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
          ),
        })),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clearItems: () => set({ items: [] }),
    }),
    {
      name: "item-storage", // unique name for the storage
      getStorage: () => localStorage, // use localStorage as the storage
    }
  )
);

export default useItemStore;
