import * as React from 'react';
import { Navigate } from 'react-router-dom';
import routes from '../app/routes';
import { auth } from '../firebaseSetup';

type Props={
    component: React.ComponentType
}

const PublicRoute=({component, ...rest}: Props)=>{
  
  const Component= component;

  const user=auth.currentUser;
  
        if (user) {
          return <Navigate to={routes.tests}/>
    
        } else {
          
            return <Component {...rest}/>
        }
}

export default PublicRoute;