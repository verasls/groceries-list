import Header from "./components/Header";
import FormAddCategory from "./components/FormAddCategory";
import FormAddItem from "./components/FormAddItem";
import GrocerieList from "./components/GrocerieList";

import { useState } from "react";

const initialList = [
  {
    category: "Fruits and vegetables",
    items: [
      {
        name: "Banana",
        checked: true,
        parentCategory: "Fruits and vegetables",
      },
      {
        name: "Apple",
        checked: false,
        parentCategory: "Fruits and vegetables",
      },
      {
        name: "Broccoli",
        checked: false,
        parentCategory: "Fruits and vegetables",
      },
    ],
  },
  {
    category: "Dairy",
    items: [
      { name: "Milk", checked: false, parentCategory: "Dairy" },
      { name: "Yoghurt", checked: false, parentCategory: "Dairy" },
      { name: "Cheese", checked: false, parentCategory: "Dairy" },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Broom", checked: true, parentCategory: "Others" },
      { name: "Bucket", checked: true, parentCategory: "Others" },
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
              items: [
                ...list.items,
                { name: newItem, checked: false, parentCategory: category },
              ],
            }
          : list
      )
    );
  }

  function handleClearList() {
    const confirm = window.confirm(
      "This will delete all categories and items. Do you want to proceed?"
    );
    if (!confirm) return;

    setGrocerieList([]);
  }

  function handleDeleteCategory(category) {
    setGrocerieList((grocerieList) =>
      grocerieList.filter((list) => list.category !== category)
    );
  }

  function handleDeleteItem(item) {
    setGrocerieList((grocerieList) =>
      grocerieList.map((list) =>
        list.category === item.parentCategory
          ? {
              ...list,
              items: list.items.filter(
                (listItem) => listItem.name !== item.name
              ),
            }
          : list
      )
    );
  }

  return (
    <div className="app">
      <Header
        onShowCategoryForm={() => setShowCategoryForm((show) => !show)}
        onShowItemForm={() => setShowItemForm((show) => !show)}
        onClearList={handleClearList}
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
          <GrocerieList
            list={list}
            key={list.category}
            handleDeleteCategory={handleDeleteCategory}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
    </div>
  );
}
