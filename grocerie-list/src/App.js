import Header from "./components/Header";
import FormAddCategory from "./components/FormAddCategory";
import FormAddItem from "./components/FormAddItem";
import GrocerieList from "./components/GrocerieList";

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
    category: "Others",
    items: [
      { name: "Broom", checked: true },
      { name: "Bucket", checked: true },
    ],
  },
];

export default function App() {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showItemForm, setShowItemForm] = useState(false);
  const [grocerieList, setGrocerieList] = useState(initialList);

  function handleAddCategory(newCategory) {
    setGrocerieList((grocerieList) => [
      ...grocerieList,
      { category: newCategory, items: [] },
    ]);
  }

  function handleAddItem(category, newItem) {
    setGrocerieList((grocerieList) =>
      grocerieList.map((list) =>
        list.category === category
          ? {
              ...list,
              items: [...list.items, { name: newItem, checked: false }],
            }
          : list
      )
    );
  }

  return (
    <div className="app">
      <Header
        handleShowCategoryForm={() => setShowCategoryForm((show) => !show)}
        handleShowItemForm={() => setShowItemForm((show) => !show)}
      />

      {showCategoryForm ? (
        <FormAddCategory
          setShowCategoryForm={setShowCategoryForm}
          onAddCategory={handleAddCategory}
        />
      ) : null}
      {showItemForm ? (
        <FormAddItem
          grocerieList={grocerieList}
          setShowItemForm={setShowItemForm}
          onAddItem={handleAddItem}
        />
      ) : null}

      <div className="container">
        {grocerieList.map((list) => (
          <GrocerieList list={list} key={list.category} />
        ))}
      </div>
    </div>
  );
}
