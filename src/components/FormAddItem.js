import Button from "./reusable/Button";
import { useEffect, useRef, useState } from "react";

export default function FormAddItem({
  grocerieList,
  setShowItemForm,
  onAddItem,
}) {
  const categoryList = grocerieList.map((list) => list.category);

  const [category, setCategory] = useState(categoryList.at(0));
  const [newItem, setNewItem] = useState("");
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    onAddItem(category, newItem);

    setCategory(categoryList.at(0));
    setNewItem("");
    setShowItemForm(false);
  }

  useEffect(function () {
    inputRef.current.focus();
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        ref={inputRef}
      >
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
