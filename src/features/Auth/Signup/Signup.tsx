import * as React from 'react';
import commonStyles from '../../../app/CommonStyles.module.css';
import { useNavigate } from 'react-router-dom';
import IconButton from '../../../common/IconButton/IconButton';
import AuthForm from '../AuthForm/AuthForm';
import {ReactComponent as MainBtn} from '../../../Icons/main.svg';
import routes from '../../../app/routes';

const Signup=()=>{

    const navigate=useNavigate();

    return (
        <>
         <div>
            <IconButton onClick={()=>navigate(routes.home)}>
                <MainBtn width="30px" height="30px"/>
            </IconButton>
        </div>
        <h1 className={commonStyles.title}>Sign Up Page</h1>
        <AuthForm type="signup"/>
        </>
    )

   

};

export default Signup;