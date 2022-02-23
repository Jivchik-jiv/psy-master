import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from '../../../firebaseSetup';
import { IQuestionWithAnswer, IQuiz } from '../../../interfaces';



export const fetchQuiz = createAsyncThunk("quiz/get", async (quizId: string)=>{

    const docRef = doc(firebaseDB, "quizzes", quizId);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return docSnap.data() as IQuiz;
    }

    throw new Error("There is no such data")
});

export const fetchAnswers = createAsyncThunk("answers/get", async (quizId: string)=>{

    const docRef = doc(firebaseDB, "quizzesAnswers", quizId);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return docSnap.data() as IQuestionWithAnswer[];
    }

    throw new Error("There is no such data")
});

