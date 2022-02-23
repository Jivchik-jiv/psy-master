import * as React from "react";
import { ReactComponent as MainBtn } from "../../../Icons/main.svg";
import { useNavigate } from "react-router-dom";
import routes from "../../../app/routes";
import AuthFormWrap from "../AuthForm/AuthFormWrap";
import styles from '../Auth.module.css';
import { IconButton } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div  className={styles.authPage}>
      <div className={styles.backButtonWrap}>
        <IconButton onClick={() => navigate(routes.home)}>
          <MainBtn width="30px" height="30px" />
        </IconButton>
      </div>
      <h1 className={styles.title}>Login</h1>
      <AuthFormWrap type="login" />
    </div>
  );
};

export default Login;

// User={
// email: "test@bob.test",
// pass: 11111111
// }

// User2={
// email: "test@sam.test",
// pass: 11111111
// }


