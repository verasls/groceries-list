import Header from "./components/Header";
import FormAddCategory from "./components/FormAddCategory";
import FormAddItem from "./components/FormAddItem";
import Warning from "./components/Warning";
import GrocerieList from "./components/GrocerieList";

import { useEffect, useState } from "react";

export default function App() {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showItemForm, setShowItemForm] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [grocerieList, setGrocerieList] = useState(() => {
    const storedValue = localStorage.getItem("grocerieList");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  function handleShowCategoryForm() {
    setShowWarning(false);
    setShowCategoryForm((show) => !show);
  }

  function handleShowItemForm() {
    if (!grocerieList.length) {
      setShowWarning((show) => !show);
      return;
    }
    setShowItemForm((show) => !show);
  }

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

  function handleToggleItem(item) {
    console.log(item);
    setGrocerieList((grocerieList) =>
      grocerieList.map((list) =>
        list.category === item.parentCategory
          ? {
              ...list,
              items: list.items.map((listItem) =>
                listItem.name === item.name
                  ? { ...listItem, checked: !listItem.checked }
                  : listItem
              ),
            }
          : list
      )
    );
  }

  useEffect(
    function () {
      localStorage.setItem("grocerieList", JSON.stringify(grocerieList));
    },
    [grocerieList]
  );

  return (
    <div className="app">
      <Header
        onShowCategoryForm={handleShowCategoryForm}
        onShowItemForm={handleShowItemForm}
        onClearList={handleClearList}
      />

      {showCategoryForm && (
        <FormAddCategory
          setShowCategoryForm={setShowCategoryForm}
          onAddCategory={handleAddCategory}
        />
      )}
      {showItemForm && (
        <FormAddItem
          grocerieList={grocerieList}
          setShowItemForm={setShowItemForm}
          onAddItem={handleAddItem}
        />
      )}
      {showWarning && (
        <Warning message={"There are no categories. Please add one first."} />
      )}

      <div className="container">
        {grocerieList.map((list) => (
          <GrocerieList
            list={list}
            key={list.category}
            onDeleteCategory={handleDeleteCategory}
            onToggleItem={handleToggleItem}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
    </div>
  );
}
