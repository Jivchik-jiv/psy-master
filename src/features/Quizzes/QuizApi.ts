import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebaseSetup";
import { IQuestionWithAnswer, IQuiz } from "../../interfaces";



export const fetchQuiz = (quizId: string) => {
    const docRef = doc(firebaseDB, "quizzes", quizId);

    return getDoc(docRef)
        .then(docSnap => {
            if (docSnap.exists()) {
                return docSnap.data() as IQuiz;
            }

        })
        .catch(error => {
            console.log(error.message)
        })

}

export const fetchAnswers = (quizId: string) => {
    const docRef = doc(firebaseDB, "quizzesAnswers", quizId);

    return getDoc(docRef)
        .then(docSnap => {
            if (docSnap.exists()) {
                return docSnap.data().questions as IQuestionWithAnswer[];
            }

        })
        .catch(error => {
            console.log(error.message)
        })

}

