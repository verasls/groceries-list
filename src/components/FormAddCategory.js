import Button from "./reusable/Button";
import { useEffect, useRef, useState } from "react";

export default function FormAddCategory({
  setShowCategoryForm,
  onAddCategory,
}) {
  const [newCategory, setNewCategory] = useState("");
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    onAddCategory(newCategory);

    setNewCategory("");
    setShowCategoryForm(false);
  }

  useEffect(function () {
    inputRef.current.focus();
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category name"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        ref={inputRef}
      />
      <Button>Add</Button>
    </form>
  );
}
