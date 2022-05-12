import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import routes from "../app/routes";

import { selectUser } from "./AuthRedux/thunks";

interface Props {
  component: React.ComponentType;
};

const PrivateRoute = ({ component, ...rest }: Props) => {
  const userRedux = useSelector(selectUser);
  const Component = component;


  return (
    <>
      {userRedux.isAuthorized ? (
         <Component {...rest} />
      ) : (
        <Navigate to={routes.welcome  } />
      )}
    </>
  );
};

export default PrivateRoute;
