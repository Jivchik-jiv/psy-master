import * as React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import commonStyles from '../../../app/CommonStyles.module.css';
import IconButton from '../../../common/IconButton/IconButton';
import {ReactComponent as MainBtn} from '../../../Icons/main.svg';
import { useNavigate } from 'react-router-dom';
import routes from '../../../app/routes';

const Login=()=>{

    const navigate=useNavigate();

    return (
        <>
        <div>
            <IconButton onClick={()=>navigate(routes.home)}>
                <MainBtn width="30px" height="30px"/>
            </IconButton>
        </div>
        <h1 className={commonStyles.title}>Login Page</h1>
        <AuthForm type="login"/>
        </>
    )
};

export default Login;



// User={
// email: "test@asd.as",
// pass: 11111111
// }

// User2={
// email: "test2@asd.as",
// pass: 22222222
// }


// User2={
// email: "test@test.test",
// pass: 99999999
// }
