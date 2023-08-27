import { useState } from "react";

const initialList = [
  { category: "Fruits and vegetables", items: ["Banana", "Apple", "Broccoli"] },
  { category: "Dairy", items: ["Milk", "Yoghurt", "Cheese"] },
  { category: "", items: ["Broom", "Bucket"] },
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
    </div>
  );
}

function GrocerieList({ list }) {
  return (
    <div className="list-container">
      <h2>{list.category}</h2>
      <ul className="grocerie-list">
        {list.items.map((item) => (
          <GrocerieItem item={item} key={item} />
        ))}
      </ul>
    </div>
  );
}

function GrocerieItem({ item }) {
  return <li>{item}</li>;
}
