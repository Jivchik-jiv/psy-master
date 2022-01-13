import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebaseSetup";
import { updateAuth } from "./actions";

type authRequest={
    email: string,
    password: string,
    name?: string,
    avatarUrl?: string
}

export const registerUser=createAsyncThunk(
    'registerUser',
    async ({email, password, name, avatarUrl}: authRequest,{dispatch})=>{
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser!, {
                displayName: name,
                photoURL: avatarUrl,
            })
            dispatch(updateAuth(true))
             return response.user;

        } catch (error) {
            console.log(error)
        }
        
    }
);




export const loginUser=createAsyncThunk(
    'loginUser',
    async ({email, password}: authRequest, {dispatch})=>{

        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            dispatch(updateAuth(true))
            return response.user;
        } catch (error) {
            console.log(error)
        }
        
    }
);
