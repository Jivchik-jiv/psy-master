import * as React from 'react';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import routes from '../../app/routes';
import { auth } from '../../firebaseSetup';

const Home=()=>{

    const getUser=()=>{
        console.log(auth.currentUser);
    }

    return (
        <>
        <h1>Home Page</h1>
        <Link to={routes.login}>Login</Link>
        <Link to={routes.signin}>Signup</Link>
        <button type="button" onClick={()=>signOut(auth)}>Sign out</button>
        <button type="button" onClick={()=>getUser()}>Get user</button>

        </>
    )
};

export default Home;