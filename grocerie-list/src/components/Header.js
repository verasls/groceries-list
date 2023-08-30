import Button from "./reusable/Button";

export default function Header({
  onShowCategoryForm,
  onShowItemForm,
  onClearList,
}) {
  return (
    <div className="header">
      <h1>🛒 Groceries list</h1>
      <div className="controls">
        <Button onClick={onShowCategoryForm}>Add Category</Button>
        <Button onClick={onShowItemForm}>Add Item</Button>
        <Button onClick={onClearList}>Clear List</Button>
      </div>
    </div>
  );
}
