import { createAction } from '@reduxjs/toolkit';


export const getCurrentUser=createAction("getCurrentUser");

export const updateAuth=createAction<boolean | undefined>("auth/update");


export const updateName=createAction("profile/name/update");
export const updateAvatar=createAction("profile/avatar/update");
export const updateEmail=createAction("profile/email/update");

export const updateProfile=createAction("profile/update");