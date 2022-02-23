import { CircularProgress } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import routes from "../app/routes";
import { auth } from "../firebaseSetup";
import { selectUser } from "./AuthRedux/thunks";

interface Props {
  component: React.ComponentType;
};

const PrivateRoute = ({ component, ...rest }: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const userRedux = useSelector(selectUser);


onAuthStateChanged(auth, (user)=>{
  if(user && userRedux.isAuthorized){
    setIsLoading(false);
    return;
  }
  if(!user){
    setIsLoading(false);
  }
  
})


  const Component = component;

  if(isLoading){
    return <CircularProgress color="secondary" />
  }

  return (
    <>
      {userRedux.isAuthorized ? (
         <Component {...rest} />
      ) : (
        <Navigate to={routes.home} />
      )}
    </>
  );
};

export default PrivateRoute;
