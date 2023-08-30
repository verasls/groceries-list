import ButtonRound from "./reusable/ButtonRound";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

export default function GrocerieItem({ item, onToggleItem, onDeleteItem }) {
  return (
    <li className="grocerie-item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onToggleItem(item)}
      />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.name}
      </span>
      <ButtonRound size={"1rem"} onClick={() => onDeleteItem(item)}>
        <IonIcon className="icon" icon={closeOutline} />
      </ButtonRound>
    </li>
  );
}
