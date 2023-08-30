import Button from "./reusable/Button";

export default function Header({
  handleShowCategoryForm,
  handleShowItemForm,
  onClearList,
}) {
  return (
    <div className="header">
      <h1>🛒 Groceries list</h1>
      <div className="controls">
        <Button onClick={handleShowCategoryForm}>Add Category</Button>
        <Button onClick={handleShowItemForm}>Add Item</Button>
        <Button onClick={onClearList}>Clear List</Button>
      </div>
    </div>
  );
}
