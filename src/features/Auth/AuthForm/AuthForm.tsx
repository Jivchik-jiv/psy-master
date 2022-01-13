import * as React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebaseSetup";
import styles from "./AuthForm.module.css";
import commonStyles from "../../../app/CommonStyles.module.css";
import Modal from "../../../common/Modal/Modal";
import AvatarSelector from "../../ProfileSettings/AvatarSelector";
import { AuthContext } from "../../../common/AuthProvider";

type Props = {
  type: "signup" | "login";
};

const AuthForm = ({ type }: Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");
  const [name, setName] = React.useState("");
  const [avatarUrl, setAvatarUrl] = React.useState(
    "https://img.icons8.com/color/96/000000/bill-cipher.png"
  );
  const [showModal, setShowModal] = React.useState(false);

  const context=React.useContext(AuthContext);


  const handleAvatarSelector = (url: string) => {
    setAvatarUrl(url);
    setShowModal(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (type === "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          updateProfile(response.user, {
            displayName: name,
            photoURL: avatarUrl,
          }).then(() => {
            context?.setCurrentUser(auth.currentUser);
          });
        })
        .catch((error) => {
          console.log("AuthForm signup error ", error);
        });
    } 
    if(type==="login") {
      signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
        })
        .catch((error) => {
          console.log("AuthForm Login error: ", error);
        });
    }
  };


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.item}>
        <p>Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.item}>
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      {type === "signup" && (
        <>
          <label className={styles.item}>
            <p>Name</p>
            <input
              type="text"
              value={name}
              className={styles.input}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          {/* <div className={styles.imgSelectorWrap}>
            <img src={avatarUrl} alt="" className={styles.img} />
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className={styles.selectorBtn}
            >
              Select avatar
            </button>
          </div> */}
          <div className={styles.imgSelectorWrap} onClick={() => setShowModal(true)}>
            <img src={avatarUrl} alt="" className={styles.img} />
            <p>
              Change avatar
            </p>
          </div>

          {showModal && (
            <Modal closeModal={()=>setShowModal(false)}>
              <AvatarSelector setAvatar={handleAvatarSelector} closeModal={()=>setShowModal(false)}/>
            </Modal>
          )}
        </>
      )}
      <button
        type="submit"
        className={`${styles.submitBtn} ${commonStyles.btn}`}
      >
        {type === "signup" ? "Signup" : "Login"}
      </button>
    </form>
  );
};

export default AuthForm;
