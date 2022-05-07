import firebase from "firebase/auth";
import { RootState } from './../../app/store';
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebaseSetup";
import { IUser } from "../../interfaces";


export const getUser = createAsyncThunk("user/get", async (userId: string) => {

    const userRef = doc(firebaseDB, "users", userId);

    let userSnap = await getDoc(userRef);

    return {...userSnap.data(), userId} as IUser;
});

interface UpdateResult {
    userData: IUser,
    result: number,
    quizId: string
};

interface UpdateResultObj {
    points: number,
    results: { [key: string]: number }
};

interface UpdatePersonal {
    displayName: string,
    photoURL: string,
    userId: string,
};





export const updateUserResultAndPoints = createAsyncThunk("user/update/result",
    async ({ userData, result, quizId }: UpdateResult) => {
        const {points, userId, results} = userData;
        const updateResultRef = doc(firebaseDB, "users", userId);

        const prevResult = results[quizId] as number | undefined;
        let pointsToAdd: number;
        let objToUpdate: UpdateResultObj;
        
        if (!prevResult) {
            
            pointsToAdd = points + CountPoints(result);
            objToUpdate = { points: pointsToAdd, results: { [quizId]: result } };
            setDoc(updateResultRef, objToUpdate, { merge: true })
            .catch(error=>{
                console.log(error)
            });
            return objToUpdate;
        }

        if (prevResult < result) {
            const newPoints = CountPoints(result);
            const oldPoints = CountPoints(prevResult);
            pointsToAdd = points + (newPoints - oldPoints);
            objToUpdate = { points: pointsToAdd, results: { [quizId]: result } };
            setDoc(updateResultRef, objToUpdate, { merge: true });
            return { ...objToUpdate, quizId };
        }

        return null;

    })

export const updatePersonal = createAsyncThunk("user/update/personal", ({ userId, photoURL, displayName }: UpdatePersonal) => {

    const updatePersonalRef = doc(firebaseDB, "users", userId);

    setDoc(updatePersonalRef, { photoURL, displayName }, { merge: true });
    return { photoURL, displayName };

});

export const addNewUser = createAsyncThunk("user/addNew", async (user: firebase.User) => {
    const { displayName, email, photoURL, uid } = user;

    const newUserObj: IUser = {
        userId: uid,
        displayName: displayName || "",
        email: email || "",
        photoURL: photoURL || "",
        points: 0,
        results: {},
        isAuthorized: true
    }

    const userRef = doc(firebaseDB, "users", uid);
    const userSnap = await setDoc(userRef, newUserObj);

    console.log("Auth thank- addNewUser", userSnap);

    return newUserObj;

})



export const clearUser = createAction("user/clear");

////////////////////////////

const CountPoints = (result: number): number => {
    const points = Math.floor(result * (result / 100));
    return points;
}

export const selectUser = (state: RootState) => state.user;
