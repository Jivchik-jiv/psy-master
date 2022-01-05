import { getCurrentUser } from './actions';
import { createReducer } from "@reduxjs/toolkit"
import { loginUser, registerUser } from "./thunks";
import { auth } from '../../../firebaseSetup';

type State={
    user: {email: string | null},
    token: string | null
}

const initialState: State={
    user: {
        email: null,
    },
    token: null
}

export const authReducer=createReducer(initialState, (builder)=>{
    builder
        .addCase(registerUser.fulfilled, (state, {payload})=>{
           let {email, accessToken}: any =payload;
           state.user={email};
           state.token=accessToken;
        })
        .addCase(loginUser.fulfilled, (state, {payload})=>{
            let {email, accessToken}: any =payload;
            state.user={email};
            state.token=accessToken;
         })
         .addCase(getCurrentUser, (state)=>{
            let {email, accessToken}: any =auth.currentUser;
            state.user={email};
            state.token=accessToken;
         })
        .addDefaultCase(()=>initialState)
})

