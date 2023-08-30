import ButtonRound from "./reusable/ButtonRound";
import GrocerieItem from "./GrocerieItem";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

export default function GrocerieList({ list }) {
  return (
    <div className="list-container">
      <div className="list-header">
        <h2>{list.category}</h2>
        <ButtonRound size={"1.5rem"}>
          <IonIcon className="icon" icon={closeOutline} />
        </ButtonRound>
      </div>
      <ul className="grocerie-list">
        {list.items.map((item) => (
          <GrocerieItem item={item} key={item.name} />
        ))}
      </ul>
    </div>
  );
}