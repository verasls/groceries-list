import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

const initialList = [
  {
    category: "Fruits and vegetables",
    items: [
      { name: "Banana", checked: true },
      { name: "Apple", checked: false },
      { name: "Broccoli", checked: false },
    ],
  },
  {
    category: "Dairy",
    items: [
      { name: "Milk", checked: false },
      { name: "Yoghurt", checked: false },
      { name: "Cheese", checked: false },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Broom", checked: true },
      { name: "Bucket", checked: true },
    ],
  },
];

export default function App() {
  const [grocerieList, setGrocerieList] = useState(initialList);

  return (
    <div className="app">
      <Header />
      <FormAddCategory />
      <FormAddItem grocerieList={grocerieList} />

      <div className="container">
        {grocerieList.map((list) => (
          <GrocerieList list={list} key={list.category} />
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>🛒 Groceries list</h1>
      <div className="controls">
        <Button>Add Category</Button>
        <Button>Add Item</Button>
        <Button>Clear List</Button>
      </div>
    </div>
  );
}

function FormAddCategory() {
  return (
    <form className="form">
      <input type="text" placeholder="Category name" />
      <Button>Add</Button>
    </form>
  );
}

function FormAddItem({ grocerieList }) {
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

function GrocerieList({ list }) {
  return (
    <div className="list-container">
      <div className="list-header">
        <h2>{list.category}</h2>
        <ButtonRound size={"1.5rem"}>
          <IonIcon className="icon" icon={closeOutline} />
        </ButtonRound>
      </div>
      <ul className="grocerie-list">
        {list.items.map((item) => (
          <GrocerieItem item={item} key={item.name} />
        ))}
      </ul>
    </div>
  );
}

function GrocerieItem({ item }) {
  return (
    <li className="grocerie-item">
      <input type="checkbox" />
      {item.name}
      <ButtonRound size={"1rem"}>
        <IonIcon className="icon" icon={closeOutline} />
      </ButtonRound>
    </li>
  );
}

function Button({ children }) {
  return (
    <button className="btn">
      <span className="btn-txt">{children}</span>
    </button>
  );
}

function ButtonRound({ size, children }) {
  return (
    <button className="btn-round" style={{ width: size, height: size }}>
      <span className="btn-txt">{children}</span>
    </button>
  );
}
