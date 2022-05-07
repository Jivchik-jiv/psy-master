import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from "@mui/material";
import routes from '../../../app/routes';
import AuthFormWrap from '../AuthForm/AuthFormWrap';
import styles from '../Auth.module.css';
import HomeIcon from '@mui/icons-material/Home';

const Signup=()=>{

    const navigate=useNavigate();

    return (
        <div className={styles.authPage}>
         <div className={styles.backButtonWrap}>
         <IconButton color="primary" aria-label="back to home page" onClick={() => navigate(routes.welcome)} size="large">
          <HomeIcon fontSize="inherit" />
        </IconButton>
        </div>
        <h1 className={styles.title}>Sign Up Page</h1>
        <AuthFormWrap type="signup"/>
        </div>
    )

   

};

export default Signup;