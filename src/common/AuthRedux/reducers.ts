import { createReducer } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces";
import { addNewUser, clearUser, getUser, updatePersonal, updateUserResultAndPoints } from "./thunks";



const initialUser: IUser = {
    userId: "",
    displayName: "",
    email: "",
    photoURL: "",
    points: 0,
    results: {},
    isAuthorized: false
}

interface UpdateResultPayload {
    points: number,
    results: { [key: string]: number },
    quizId?: string,
}

interface UpdateResultAction {
    type: string,
    payload: UpdateResultPayload | null
}

interface GetAction {
    type: string,
    payload: IUser;
}

interface UpdatePersonalPayload {
    photoURL: string,
    displayName: string
}

interface UpdatePersonal {
    type: string,
    payload: UpdatePersonalPayload
}

interface AddNewUser {
    type: string,
    payload: IUser
}


export const userReducer = createReducer(initialUser, (builder) => {

    builder.addCase(getUser.fulfilled, (_, action: GetAction): IUser => {
        return action.payload;
    })
        .addCase(addNewUser.fulfilled, (_, action: AddNewUser) => {
            return action.payload;
        })
        .addCase(updateUserResultAndPoints.fulfilled, (state: IUser, action: UpdateResultAction): IUser | void => {

            if (!action.payload) {
                return state;
            }
            const { points, results, quizId } = action.payload;
            state.points = points;
            if (quizId === undefined) {
                state.results = { ...state.results, ...results };
            } else {
                state.results[quizId] = results[quizId];
            }
        })
        .addCase(updatePersonal.fulfilled, (state: IUser, action: UpdatePersonal): IUser | void => {

            const { photoURL, displayName } = action.payload;

            state.photoURL = photoURL;

            state.displayName = displayName;
        })
        .addCase(clearUser, () => {
            return initialUser;
        })
        .addDefaultCase((state) => state)
})