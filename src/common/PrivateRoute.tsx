import { onAuthStateChanged } from 'firebase/auth';
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import routes from '../app/routes';
import { auth } from '../firebaseSetup';
import { AuthContext } from './AuthProvider';
import firebase from 'firebase/auth';

type Props={
    component: React.ComponentType
}

const PrivateRoute=({component, ...rest}: Props)=>{

  const context=React.useContext(AuthContext);
  
  const Component= component;

  return (
    <>
      {!!context?.currentUser ? <Component {...rest}/> : <Navigate to={routes.home}/>}
    </>
  )
}

export default PrivateRoute;