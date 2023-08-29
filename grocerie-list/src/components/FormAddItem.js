import Button from "./reusable/Button";

export default function FormAddItem({ grocerieList }) {
  return (
    <form className="form">
      <select>
        {grocerieList.map((list) => (
          <option value={list.category} key={list.category}>
            {list.category}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item name" />
      <Button>Add</Button>
    </form>
  );
}
