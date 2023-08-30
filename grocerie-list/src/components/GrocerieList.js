import ButtonRound from "./reusable/ButtonRound";
import GrocerieItem from "./GrocerieItem";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

export default function GrocerieList({ list, onDeleteCategory, onDeleteItem }) {
  return (
    <div className="list-container">
      <div className="list-header">
        <h2>{list.category}</h2>
        <ButtonRound
          size={"1.5rem"}
          onClick={() => onDeleteCategory(list.category)}
        >
          <IonIcon className="icon" icon={closeOutline} />
        </ButtonRound>
      </div>
      <ul className="grocerie-list">
        {list.items.map((item) => (
          <GrocerieItem
            item={item}
            key={item.name}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
