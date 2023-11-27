import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import registerImage from "../../assets/favourite-avatar.jpg";
import "./Profile-edit.css";
import { chevronBack } from "ionicons/icons";
import { PuButton, PuInput, defineCustomElements } from "pro-unity-ui";
defineCustomElements();

const ProfileEdit: React.FC = () => {
  return (
    <IonPage className="profile-edit">
      <IonHeader className="page-header">
        <IonButton
          routerLink="/user-profile"
          fill="clear"
          color={"light"}
          style={{ width: "50px" }}
        >
          <IonIcon icon={chevronBack}></IonIcon>
        </IonButton>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="head">
          <img src={registerImage} alt="img" />
          <IonText>
            <h2>Update your information</h2>
          </IonText>
        </div>
        <div className="form">
          <PuInput></PuInput>
          {/* <div className="input-box">
            <label className="input-label">Name</label>
            <IonInput
              placeholder="vikashini"
              className="custom-input"
            ></IonInput>
          </div> */}
          <PuInput></PuInput>
          {/* <div className="input-box">
            <label className="input-label">Email</label>
            <IonInput
              placeholder="Spotify@gmail.com"
              className="custom-input"
            ></IonInput>
          </div> */}
          <PuInput></PuInput>
          {/* <div className="input-box">
            <label className="input-label">Language</label>
            <IonInput
              type="text"
              placeholder="Language"
              className="custom-input"
            ></IonInput>
          </div> */}
          <PuButton expand="full">Save changes</PuButton>
          {/* <IonButton routerLink="/user-profile" className="custom-button">
            Save Changes
          </IonButton> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProfileEdit;
