
export interface IQuizFromList {
    quizId: string,
    title: string
}



export interface IQuizQuestion {
    answers: string[],
    qid: string,
    question: string
}

export interface IQuiz {
    questions: IQuizQuestion[],
    title: string
}

export interface IQuestionWithAnswer{
    answer: string,
    qid: string
}

export type IAnswers = IQuestionWithAnswer[];


interface IUserResults {
    [key: string]: number
}

export interface IUser {
    userId: string,
    displayName:  string,
    email: string,
    photoURL: string,
    points:  number,
    results: IUserResults,
    isAuthorized: boolean
}