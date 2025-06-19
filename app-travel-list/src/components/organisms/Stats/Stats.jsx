import useItemStore from "@store/itemStore";

const Stats = () => {
  const items = useItemStore((state) => state.items);

  if (!items || items.length === 0)
    return <p className="stats">No items in the packing list</p>;

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentagePacked = numItems
    ? Math.round((numPackedItems / numItems) * 100)
    : 0;
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "🎉 You got everything ready to go! 🎉"
          : `💼 You have ${numItems} items on your list, and you already packed ${numPackedItems} (${percentagePacked}%)`}
      </em>
    </footer>
  );
};

export default Stats;
