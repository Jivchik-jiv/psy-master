import * as React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../../app/routes";
import AuthFormWrap from "../AuthForm/AuthFormWrap";
import styles from '../Auth.module.css';
import { IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.authPage}>
      <div className={styles.backButtonWrap}>
        <IconButton color="primary" aria-label="back to home page" onClick={() => navigate(routes.welcome)} size="large">
          <HomeIcon fontSize="inherit" />
        </IconButton>
      </div>
      <h1 className={styles.titleWithMarginTop}>Login</h1>
      <AuthFormWrap type="login" />
    </div>
  );
};

export default Login;

// User={
// email: "test@eva.test",
// pass: 11111111
// }

// User2={
// email: "test@neo.test",
// pass: 11111111
// }

// User3={
// email: "test@nata.test",
// pass: 11111111
// }


