import * as React from "react";
import { Navigate } from "react-router-dom";
import routes from "../app/routes";
import { AuthContext } from "./AuthProvider";

type Props = {
  component: React.ComponentType;
};

const PublicRoute = ({ component, ...rest }: Props) => {
  const context=React.useContext(AuthContext);
  const Component = component;

  return (
    <>
      {!!context?.currentUser ? <Navigate to={routes.tests} /> : <Component {...rest} />}
    </>
  )

};

export default PublicRoute;
