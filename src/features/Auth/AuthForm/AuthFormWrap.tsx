import * as React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
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
  name: string;
  avatarUrl: string;
};

type Login = {
  email: string;
  password: string;
};

const AuthFormWrap = ({ type }: Props) => {
  const dispatch = useDispatch();

  const handleSignup = ({ email, password, name, avatarUrl }: Signup) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response: any) => {
        updateProfile(response.user, {
          displayName: name,
          photoURL: avatarUrl,
        }).then(() => {
          if (auth.currentUser) {
            dispatch(addNewUser(auth.currentUser));
          }
        });
      })
      .catch((error: any) => {
        console.log("AuthForm signup error ", error);
      });
  };

  const handleLogin = ({ email, password }: Login) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((responce) => {
        console.log("AuthForm login responce ", responce);
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
    />
  );
};

export default AuthFormWrap;
