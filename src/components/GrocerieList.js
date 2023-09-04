import ButtonRound from "./reusable/ButtonRound";
import GrocerieItem from "./GrocerieItem";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

export default function GrocerieList({
  list,
  onDeleteCategory,
  onToggleItem,
  onDeleteItem,
}) {
  function sortList(list) {
    return {
      ...list,
      items: list.items.slice().sort((a, b) => a.checked - b.checked),
    };
  }

  const sortedList = sortList(list);

  return (
    <div className="list-container">
      <div className="list-header">
        <h2>{sortedList.category}</h2>
        <ButtonRound
          size={"1.5rem"}
          onClick={() => onDeleteCategory(sortedList.category)}
        >
          <IonIcon className="icon" icon={closeOutline} />
        </ButtonRound>
      </div>
      <ul className="grocerie-list">
        {sortedList.items.map((item) => (
          <GrocerieItem
            item={item}
            key={item.name}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
