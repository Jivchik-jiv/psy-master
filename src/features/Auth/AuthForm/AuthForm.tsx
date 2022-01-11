import * as React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebaseSetup";
import { useNavigate } from "react-router-dom";
import styles from "./AuthForm.module.css";
import commonStyles from "../../../app/CommonStyles.module.css";
import routes from "../../../app/routes";
import Modal from "../../../common/Modal/Modal";
import AvatarSelector from "../../ProfileSettings/AvatarSelector";

type Props = {
  type: "signup" | "login";
};

const AuthForm = ({ type }: Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");
  const [name, setName] = React.useState("");
  const [avatar, setAvatar] = React.useState(
    "https://img.icons8.com/color/96/000000/bill-cipher.png"
  );
  const [showModal, setShowModal] = React.useState(false);

  let navigate = useNavigate();

  const handleSelector = (url: string) => {
    setAvatar(url);
    setShowModal(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (type === "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          updateProfile(auth.currentUser!, {
            displayName: name,
            photoURL: avatar,
          }).then(() => {
            navigate(routes.tests);
          });
        })
        .catch((error) => {
          console.log("Error ", error);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate(routes.tests);
        })
        .catch((error) => {
          console.log("Error ", error);
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
          <div className={styles.imgSelectorWrap}>
            <img src={avatar} alt="" className={styles.img} />
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className={styles.selectorBtn}
            >
              Select avatar
            </button>
          </div>

          {showModal && (
            <Modal>
              <AvatarSelector setAvatar={handleSelector} />
            </Modal>
          )}
        </>
      )}
      <button
        type="submit"
        className={`${commonStyles.btn} ${styles.submitBtn}`}
      >
        {type === "signup" ? "Signup" : "Login"}
      </button>
    </form>
  );
};

export default AuthForm;
