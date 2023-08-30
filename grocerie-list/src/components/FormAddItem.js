import Button from "./reusable/Button";
import { useState } from "react";

export default function FormAddItem({
  grocerieList,
  setShowItemForm,
  onAddItem,
}) {
  const categoryList = grocerieList.map((list) => list.category);

  const [category, setCategory] = useState(categoryList.at(0));
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddItem(category, newItem);

    setCategory(categoryList.at(0));
    setNewItem("");
    setShowItemForm(false);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categoryList.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item name"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
