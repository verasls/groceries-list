import { IonIcon } from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";

export default function Warning({ message }) {
  return (
    <div className="warning">
      <IonIcon className="warning-icon" icon={alertCircleOutline} />
      {message}
    </div>
  );
}
