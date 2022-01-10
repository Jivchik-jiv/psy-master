import * as React from "react";
import Modal from "../../common/Modal/Modal";
import { auth } from "../../firebaseSetup";
import AvatarSelector from "./AvatarSelector";
import styles from "./ProfileSettings.module.css";
import commonStyles from "../../app/CommonStyles.module.css";

const ProfileSettings = () => {
  const [name, setName] = React.useState(auth.currentUser?.displayName || "");
  const [avatar, setAvatar]=React.useState("https://img.icons8.com/color/96/000000/bill-cipher.png");
  const [showModal, setShowModal]=React.useState(false);

  const isNewUser = () => {
    return !auth.currentUser?.displayName;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleSelector=(url:string)=>{
    setAvatar(url);
    setShowModal(false)
  }


  return (
    <div className={styles.wrap} onSubmit={handleSubmit}>
      {isNewUser() && (
        <h3 className={commonStyles.title}>You are registered, please choose nickname and avatar</h3>
      )}
      <form>
        <label>
          <p>Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <p>Your avatar: </p>
        <img src={avatar} alt="" />
        <button type="button" onClick={()=>setShowModal(true)}>Select avatar</button>
        
        {showModal&&(<Modal>
            <AvatarSelector setAvatar={handleSelector}/>
        </Modal>)}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfileSettings;
