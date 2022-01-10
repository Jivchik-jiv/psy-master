import { onAuthStateChanged } from 'firebase/auth';
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import routes from '../app/routes';
import { auth } from '../firebaseSetup';
import { AuthContext } from './AuthProvider';
import firebase from 'firebase/auth';
// import ProfileSettings from '../features/ProfileSettings/ProfileSettings';

type Props={
    component: React.ComponentType
}

const PrivateRoute=({component, ...rest}: Props)=>{

  const context=React.useContext(AuthContext);
  
  const Component= component;

  // if(!!context?.currentUser){
  //   if(context.currentUser.displayName){
  //     return <Component {...rest}/>
  //   }
  //   return <ProfileSettings/>
  // }

  // return <Navigate to={routes.home}/>


  return (
    <>
      {!!context?.currentUser ? <Component {...rest}/> : <Navigate to={routes.home}/>}
    </>
  )
}

export default PrivateRoute;