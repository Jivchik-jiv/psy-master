import * as React from "react";
import styles from "./AuthForm.module.css";
import Modal from "../../../common/Modal/Modal";
import AvatarSelector from "../../ProfileSettings/AvatarSelector";
import {
  StyledContainedBtn,
  StyledInput,
} from "../../../common/styledMuiComponents/styledForms";

type Props = {
  type: "signup" | "login";
  handleLogin: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => void;
  handleSignup: ({
    email,
    password,
    displayName,
    photoURL,
  }: {
    email: string;
    password: string;
    displayName: string;
    photoURL: string;
  }) => void;
  isUnicEmail: boolean,
  setIsUnicEmail: React.Dispatch<React.SetStateAction<boolean>>
};


const AuthForm = ({ type, handleLogin, handleSignup, isUnicEmail, setIsUnicEmail }: Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [photoURL, setPhotoURL] = React.useState(
    "https://img.icons8.com/color/96/000000/bill-cipher.png"
  );
  const [showModal, setShowModal] = React.useState(false);

  const handleAvatarSelector = (url: string) => {
    setPhotoURL(url);
    setShowModal(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (type === "signup") {
      handleSignup({ email, password, displayName, photoURL });
    }
    if (type === "login") {
      handleLogin({ email, password });
    }
  };

 const handleEmailError = (emailValue: string) => {
  setEmail(emailValue);
  setIsUnicEmail(true);
 }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputWrap}>
       {isUnicEmail ? <StyledInput
          type="email"
          variant="standard"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
        />
        : <StyledInput
          error
          variant="standard"
          label="Error"
          helperText="This email is already used."
          onChange={(e) => handleEmailError(e.target.value)}
          value={email}
        />}
      </div>
      <div className={styles.inputWrap}>
        <StyledInput
          type="password"
          variant="standard"
          label="Password"
          onChange={(e) => setPass(e.target.value)}
          required
          value={password}
        />
      </div>

      {type === "signup" && (
        <>
          <div className={styles.inputWrap}>
            <StyledInput
              type="text"
              variant="standard"
              label="Name"
              onChange={(e) => setDisplayName(e.target.value)}
              required
              value={displayName}
            />
          </div>
          <div
            className={styles.imgSelectorWrap}
            onClick={() => setShowModal(true)}
          >
            <img src={photoURL} alt="" className={styles.img} />
            <p>Change avatar</p>
          </div>

          {showModal && (
            <Modal closeModal={() => setShowModal(false)}>
              <AvatarSelector setAvatar={handleAvatarSelector} />
            </Modal>
          )}
        </>
      )}
      <StyledContainedBtn
        type="submit"
        variant="contained"
        disableElevation
        color="primary"
      >
        {type === "signup" ? "Signup" : "Login"}
      </StyledContainedBtn>
    </form>
  );
};

export default AuthForm;
