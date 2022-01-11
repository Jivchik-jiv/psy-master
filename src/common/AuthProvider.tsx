import { onAuthStateChanged } from "firebase/auth";
import * as React from "react";
import { auth } from "../firebaseSetup";
import firebase from "firebase/auth";

type Context = {
  currentUser: firebase.User | null;
};

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const AuthContext = React.createContext<Context | null>(null);

const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(
    null
  );
  const [pending, setPending] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
