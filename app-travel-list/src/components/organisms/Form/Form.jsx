import { useState } from "react";
import useItemStore from "@store/itemStore";

const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const addItem = useItemStore((state) => state.addItem);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) return; // Prevent adding empty items
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    addItem(newItem);
    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add an item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="btn">Add</button>
    </form>
  );
};

export default Form;
