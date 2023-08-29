import ButtonRound from "./reusable/ButtonRound";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

export default function GrocerieItem({ item }) {
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
