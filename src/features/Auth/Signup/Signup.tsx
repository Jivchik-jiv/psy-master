import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from "@mui/material";
import {ReactComponent as MainBtn} from '../../../Icons/main.svg';
import routes from '../../../app/routes';
import AuthFormWrap from '../AuthForm/AuthFormWrap';
import styles from '../Auth.module.css';

const Signup=()=>{

    const navigate=useNavigate();

    return (
        <div className={styles.authPage}>
         <div className={styles.backButtonWrap}>
            <IconButton onClick={()=>navigate(routes.home)}>
                <MainBtn width="30px" height="30px"/>
            </IconButton>
        </div>
        <h1 className={styles.titleSignup}>Sign Up Page</h1>
        <AuthFormWrap type="signup"/>
        </div>
    )

   

};

export default Signup;