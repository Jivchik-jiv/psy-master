import * as React from "react";
import Modal from "../../common/Modal/Modal";
import { auth } from "../../firebaseSetup";
import { updateProfile } from "firebase/auth";
import AvatarSelector from "./AvatarSelector";
import styles from "./ProfileSettings.module.css";
import commonStyles from "../../app/CommonStyles.module.css";
import cx from "classnames";
import { useDispatch } from "react-redux";
import { updatePersonal } from "../../common/AuthRedux/thunks";

const ProfileSettings = () => {
  const [name, setName] = React.useState(auth.currentUser?.displayName || "");
  const [avatar, setAvatar] = React.useState(
    auth.currentUser?.photoURL ||
      "https://img.icons8.com/color/96/000000/bill-cipher.png"
  );
  const [showModal, setShowModal] = React.useState(false);
  const [isNewData, setIsNewData] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {}, []);

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

  const makeOptionClasses = () => {
    return cx({
      [styles.selectorBtn]: true,
      [styles.activeBtn]: !isNewData,
    });
  };

  return (
    <div className={styles.wrap}>
      <h1 className={commonStyles.title}>Settings Page</h1>
      <form onSubmit={handleSubmit}>
        <label className={styles.item}>
          <p>Change Name</p>
          <input
            type="text"
            value={name}
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
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
        <button
          type="submit"
          className={makeOptionClasses()}
          disabled={!isNewData}
        >
          Update profile
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
