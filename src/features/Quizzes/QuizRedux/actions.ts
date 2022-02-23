import { createAction } from '@reduxjs/toolkit';

// type Update = {
// resultPercent: number,
// resultArr: {
// isCorrect: boolean,
// qid: string,
// correctAnswer: string,
// userAnswer?: string,
// question: string
// }
// };

export const updateQuizResult = createAction<any>('quiz/result/update');

// export const selectResult = (state: RootState)=>state.quizResult;


/////////////////////////////////////////

export const clearQuizState = createAction("quiz/clear");