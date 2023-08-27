import { useState } from "react";

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
    category: "",
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
        <Button padding={"0.8rem 1.6rem"} borderRadius={"10px"}>
          Add Category
        </Button>
        <Button padding={"0.8rem 1.6rem"} borderRadius={"10px"}>
          Add Item
        </Button>
        <Button padding={"0.8rem 1.6rem"} borderRadius={"10px"}>
          Clear List
        </Button>
      </div>
    </div>
  );
}

function GrocerieList({ list }) {
  return (
    <div className="list-container">
      <h2>{list.category}</h2>
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
    </li>
  );
}

function Button({ padding, borderRadius, children }) {
  return (
    <button
      className="btn"
      style={{
        padding: padding,
        borderRadius: borderRadius,
      }}
    >
      <span className="btn-txt">{children}</span>
    </button>
  );
}
