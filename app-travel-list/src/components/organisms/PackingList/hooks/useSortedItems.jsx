import { useMemo } from "react";

export const useSortedItems = (items, sortBy) => {
  return useMemo(() => {
    if (sortBy === "input") return items;
    if (sortBy === "description") {
      return [...items].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    }
    if (sortBy === "packed") {
      return [...items].sort((a, b) => Number(a.packed) - Number(b.packed));
    }
    return items;
  }, [items, sortBy]);
};
