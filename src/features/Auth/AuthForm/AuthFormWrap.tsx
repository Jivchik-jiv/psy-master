import * as React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebaseSetup";
import AuthForm from "./AuthForm";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../../common/AuthRedux/thunks";

type Props = {
  type: "signup" | "login";
};

type Signup = {
  email: string;
  password: string;
  displayName: string;
  photoURL: string;
};

type Login = {
  email: string;
  password: string;
};

const AuthFormWrap = ({ type }: Props) => {
  const dispatch = useDispatch();
  const [isUnicEmail, setIsUnicEmail] = React.useState(true);

  const handleSignup = ({ email, password, displayName, photoURL }: Signup) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response: any) => {
           if (auth.currentUser) {
             const { uid: userId} = auth.currentUser;
            dispatch(addNewUser({email, userId, displayName, photoURL}));
          }

      })
      .catch((error: any) => {
        if (error.code === "auth/email-already-in-use"){
          setIsUnicEmail(false);
        }
      });
  };

  const handleLogin = ({ email, password }: Login) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
      })
      .catch((error: any) => {
        console.log("AuthForm Login error: ", error);
      });
  };

  return (
    <AuthForm
      type={type}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      isUnicEmail = {isUnicEmail}
      setIsUnicEmail = {setIsUnicEmail}
    />
  );
};

export default AuthFormWrap;
