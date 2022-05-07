import * as React from "react";
import Modal from "../../common/Modal/Modal";
import { auth } from "../../firebaseSetup";
import { updateProfile } from "firebase/auth";
import AvatarSelector from "./AvatarSelector";
import styles from "./ProfileSettings.module.css";
import { useDispatch } from "react-redux";
import { updatePersonal } from "../../common/AuthRedux/thunks";
import { StyledContainedBtn, StyledInput } from "../../common/styledMuiComponents/styledForms";

const ProfileSettings = () => {
  const [name, setName] = React.useState(auth.currentUser?.displayName || "");
  const [avatar, setAvatar] = React.useState(
    auth.currentUser?.photoURL ||
    "https://img.icons8.com/color/96/000000/bill-cipher.png"
  );
  const [showModal, setShowModal] = React.useState(false);
  const [isNewData, setIsNewData] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => { }, []);

  React.useEffect(() => {
    if (auth.currentUser) {
      let { displayName, photoURL } = auth.currentUser;
      if (displayName !== name || avatar !== photoURL) {
        setIsNewData(true);
        return;
      }
      setIsNewData(false);
    }
  }, [name, avatar]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (auth.currentUser) {
      const userId = auth.currentUser.uid;

      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: avatar,
      }).then(() => {
        dispatch(
          updatePersonal({ displayName: name, photoURL: avatar, userId })
        );
        setIsNewData(false);
      });
    }
  };

  const handleSelector = (url: string) => {
    setAvatar(url);
    setShowModal(false);
  };


  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Settings</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <StyledInput
          type="text"
          variant="standard"
          label="Change Name"
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
        />
        <div
          className={styles.imgSelectorWrap}
          onClick={() => setShowModal(true)}
        >
          <img src={avatar} alt="" className={styles.img} />
          <p>Change avatar</p>
        </div>

        {showModal && (
          <Modal closeModal={() => setShowModal(false)}>
            <AvatarSelector setAvatar={handleSelector} />
          </Modal>
        )}
        <StyledContainedBtn
          type="submit"
          variant="contained"
          disableElevation
          color="primary"
          disabled={!isNewData}
        >
          Update profile
        </StyledContainedBtn>
      </form>
    </div>
  );
};

export default ProfileSettings;
