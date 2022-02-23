import * as React from "react";
import styles from "./AuthForm.module.css";
import commonStyles from "../../../app/CommonStyles.module.css";
import Modal from "../../../common/Modal/Modal";
import AvatarSelector from "../../ProfileSettings/AvatarSelector";
import { Button, TextField } from "@mui/material";
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
    name,
    avatarUrl,
  }: {
    email: string;
    password: string;
    name: string;
    avatarUrl: string;
  }) => void;
};

const AuthForm = ({ type, handleLogin, handleSignup }: Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");
  const [name, setName] = React.useState("");
  const [avatarUrl, setAvatarUrl] = React.useState(
    "https://img.icons8.com/color/96/000000/bill-cipher.png"
  );
  const [showModal, setShowModal] = React.useState(false);

  const handleAvatarSelector = (url: string) => {
    setAvatarUrl(url);
    setShowModal(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (type === "signup") {
      handleSignup({ email, password, name, avatarUrl });
    }
    if (type === "login") {
      handleLogin({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputWrap}>
        <StyledInput
          type="email"
          variant="standard"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
        />
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
              onChange={(e) => setName(e.target.value)}
              required
              value={name}
            />
          </div>
          <div
            className={styles.imgSelectorWrap}
            onClick={() => setShowModal(true)}
          >
            <img src={avatarUrl} alt="" className={styles.img} />
            <p>Change avatar</p>
          </div>

          {showModal && (
            <Modal closeModal={() => setShowModal(false)}>
              <AvatarSelector setAvatar={handleAvatarSelector} />
            </Modal>
          )}
        </>
      )}
      {/* <button
        type="submit"
        className={`${styles.submitBtn} ${commonStyles.btn}`}
      >
        {type === "signup" ? "Signup" : "Login"}
      </button> */}
      <StyledContainedBtn
        type="submit"
        variant="contained"
        disableElevation
        color="primary"
      >
        {type === "signup" ? "Signup" : "Login"}
      </StyledContainedBtn>
      {/* <Button variant="contained" type="submit"  sx={{
        fontWeight: "bold",
        background: "#8601AF",
        marginTop: "20px",
        ":hover": {
          background: "#C91BFE"
        }
      }}>
      {type === "signup" ? "Signup" : "Login"}
        </Button> */}
    </form>
  );
};

export default AuthForm;
