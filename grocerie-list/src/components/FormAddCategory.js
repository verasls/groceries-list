import Button from "./reusable/Button";
import { useState } from "react";

export default function FormAddCategory({
  setShowCategoryForm,
  onAddCategory,
}) {
  const [newCategory, setNewCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddCategory(newCategory);

    setNewCategory("");
    setShowCategoryForm(false);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category name"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
