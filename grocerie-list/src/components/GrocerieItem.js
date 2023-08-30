import ButtonRound from "./reusable/ButtonRound";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

export default function GrocerieItem({ item, handleDeleteItem }) {
  return (
    <li className="grocerie-item">
      <input type="checkbox" />
      {item.name}
      <ButtonRound size={"1rem"} onClick={() => handleDeleteItem(item)}>
        <IonIcon className="icon" icon={closeOutline} />
      </ButtonRound>
    </li>
  );
}
