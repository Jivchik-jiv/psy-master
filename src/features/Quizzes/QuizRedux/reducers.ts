import { IAnswers, IQuiz } from './../../../interfaces';
import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { clearQuizState } from './actions';
import { fetchAnswers, fetchQuiz } from './thunks';
import { RootState } from '../../../app/store';


const initialAnswersState: IAnswers = [];

const CorrectAnswersReducer = createReducer (initialAnswersState, (builder)=>{
    builder.addCase(fetchAnswers.fulfilled, (state, action)=>{
        state = action.payload;
    })
    .addCase(clearQuizState, (state)=>{
        state = [];
    })
    .addDefaultCase((state)=>{
        return state
    })
});

const initialQuizState: IQuiz = {
    title: "",
    questions: []
}

const QuizReducer = createReducer(initialQuizState, (builder)=>{
    builder.addCase(fetchQuiz.fulfilled, (state, action)=>{
        state = action.payload;
    })
    .addCase(clearQuizState, (state)=>{
        state= initialQuizState;
    })
    .addDefaultCase((state)=>{
        return state
    })
})

export const QuizRootReducer = combineReducers({
    quizData: QuizReducer,
    answersData: CorrectAnswersReducer
});


export const selectQuiz = (state: RootState)=>state.quiz.quizData;

export const selectAnswers = (state: RootState) => state.quiz.answersData;

