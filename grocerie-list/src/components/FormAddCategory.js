import Button from "./reusable/Button";

export default function FormAddCategory() {
  return (
    <form className="form">
      <input type="text" placeholder="Category name" />
      <Button>Add</Button>
    </form>
  );
}
