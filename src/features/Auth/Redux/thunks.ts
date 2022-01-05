import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseSetup";

type authRequest={
    email: string,
    password: string
}

export const registerUser=createAsyncThunk(
    'registerUser',
    async ({email, password}: authRequest)=>{

        const response = await createUserWithEmailAndPassword(auth, email, password);

        return response.user;
    }
);


export const loginUser=createAsyncThunk(
    'loginUser',
    async ({email, password}: authRequest)=>{

        const response = await signInWithEmailAndPassword(auth, email, password);

        return response.user;
    }
);
