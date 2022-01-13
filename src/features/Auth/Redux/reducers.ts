import { getCurrentUser, updateAuth, updateAvatar, updateEmail, updateName, updateProfile } from './actions';
import { createReducer } from "@reduxjs/toolkit"
import { loginUser, registerUser } from "./thunks";
import { auth } from '../../../firebaseSetup';



type Profile={
    email:string | undefined,
    name: string | undefined,
    avatarUrl: string | undefined
}

let initialProfile: Profile={
    email: "",
    name: "",
    avatarUrl: ""
}



export const authReducer=createReducer(false, (builder)=>{
    builder
    .addCase(updateAuth, (state, {payload})=>{
        return payload
    })
    .addDefaultCase((state)=>state)
})

export const profileReducer=createReducer(initialProfile,(builder)=>{
    builder
    .addCase(registerUser.fulfilled, (state, {payload})=>{
        let {email, displayName, photoURL}: any =payload;
        return {...state, email, name: displayName, avatarUrl: photoURL}
     })
    .addCase(loginUser.fulfilled, (state, {payload})=>{
        let {email, displayName, photoURL}: any =payload;
        return {...state, email, name: displayName, avatarUrl: photoURL}
     })
    .addCase(updateName, (state, {payload})=>{
        return {...state, name: payload}
    })
    .addCase(updateAvatar, (state, {payload})=>{
        return {...state, avatarUrl: payload}
    })
    .addCase(updateEmail, (state, {payload})=>{
        return {...state, email: payload}
    })
    .addCase(updateProfile, (state)=>{
        const {email, displayName, photoURL}:any =auth.currentUser;
        return {...state, email, name: displayName, avatarUrl: photoURL}
     })
    .addDefaultCase((state)=>state)
})

