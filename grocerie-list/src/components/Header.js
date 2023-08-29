import Button from "./reusable/Button";

export default function Header({ handleShowCategoryForm, handleShowItemForm }) {
  return (
    <div className="header">
      <h1>🛒 Groceries list</h1>
      <div className="controls">
        <Button onClick={handleShowCategoryForm}>Add Category</Button>
        <Button onClick={handleShowItemForm}>Add Item</Button>
        <Button>Clear List</Button>
      </div>
    </div>
  );
}
