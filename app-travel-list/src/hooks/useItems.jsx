import { useState } from "react";

export const useItems = (initialItems) => {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleDeleteAllItems = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to clear the entire list?"
    );
    if (confirmDelete) {
      setItems([]);
    }
  };

  const handleUpdateItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return {
    items,
    handleAddItem,
    handleDeleteItem,
    handleDeleteAllItems,
    handleUpdateItem,
  };
};
