import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import routes from "../app/routes";
import { selectUser } from "./AuthRedux/thunks";

interface Props {
  component: React.ComponentType;
};

const PublicRoute = ({ component, ...rest }: Props) => {
  const user = useSelector(selectUser);
  const Component = component;

  return (
    <>
      {user.isAuthorized ? <Navigate to={routes.quizzes} /> : <Component {...rest} /> }
    </>
  )

};

export default PublicRoute;
