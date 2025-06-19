import Item from "@components/moleculs/Item/Item";
import { useState } from "react";
import { useShallow } from "zustand/react/shallow";
import useItemStore from "@store/itemStore";
import { useSortedItems } from "./hooks/useSortedItems";
import { useFetchItems } from "./hooks/useFetch";
import SelectSort from "@components/atoms/SelectSort/SelectSort";

const options = [
  { value: "input", label: "Sort by input order" },
  { value: "description", label: "Sort by description" },
  { value: "packed", label: "Sort by packed status" },
];

const PackingList = () => {
  const [sortBy, setSortBy] = useState("input");
  // Zustand store to manage items
  const {
    items,
    isLoading,
    error,
    setLoading,
    setError,
    setItems,
    removeItem,
    updateItem,
    clearItems,
  } = useItemStore(
    // Using shallow comparison to avoid unnecessary re-renders
    useShallow((state) => ({
      items: state.items,
      isLoading: state.isLoading,
      error: state.error,
      setLoading: state.setLoading,
      setError: state.setError,
      setItems: state.setItems,
      removeItem: state.removeItem,
      updateItem: state.updateItem,
      clearItems: state.clearItems,
    }))
  );

  // Custom hook to fetch items
  useFetchItems(setItems, setLoading, setError, items);

  const sortedItems = useSortedItems(items, sortBy);

  if (isLoading) {
    return <p className="list">Loading items...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={removeItem}
            onUpdateItem={updateItem}
          />
        ))}
      </ul>

      <div className="actions">
        <SelectSort sortBy={sortBy} options={options} onChange={setSortBy} />
        <button className="btn btn-delete" onClick={clearItems}>
          Clear list
        </button>
      </div>
    </div>
  );
};

export default PackingList;
