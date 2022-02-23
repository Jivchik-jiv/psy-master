// import { doc, DocumentData, getDoc } from "firebase/firestore";
// import { firebaseDB } from "../../firebaseSetup";

// type Count = {
//   quizId: string;
//   quizAnswers: { answer: string; qid: string, question: string }[];
//   title: string
// };

// // export const countResult = ({ quizId, quizAnswers }: Count) => {
// //   getDoc(doc(firebaseDB, "quizzesAnswers", quizId))
// //     .then((responce) => {
// //       if (responce.exists()) {
// //         return compareArrays({
// //           correctArr: responce.data().questions,
// //           answersArr: quizAnswers,
// //         });
// //       }
// //     })
// //     .catch((error) => {
// //       console.log(error.message);
// //     });
// // };

// export const countResult = ({ quizId, quizAnswers, title }: Count)=> new Promise((resolve, reject) => {
//     getDoc(doc(firebaseDB, "quizzesAnswers", quizId))
//       .then((responce) => {
//         if (responce.exists()) {
           
//            const result = compareArrays({
//             correctArr: responce.data().questions,
//             answersArr: quizAnswers,
//           });
//             resolve({...result, title});
//         }
//       })
//       .catch((error) => {
        
//         console.log(error.message);
//         reject(error)
//       });
//   });

// type Compare = {
//   correctArr: DocumentData;
//   answersArr: { answer: string; qid: string, question: string }[];
// };

// type Result = {
//     isCorrect: boolean,
//     correctAnswer: string,
//     userAnswer: string,
//     question: string
// }

// const compareArrays = ({ correctArr, answersArr }: Compare) => {
//   const total = correctArr.length;

//   const resultArr: Result[] =[] ;

//   const result = correctArr.reduce(
//     (total: number, answer: { answer: string; qid: string }) => {
//       const targetAnswer = answersArr.find((item) => {
//         return item.qid === answer.qid;
//       });

//       if (targetAnswer?.answer === answer.answer) {
//         resultArr.push({
//           isCorrect: true,
//           correctAnswer: answer.answer,
//           question: targetAnswer.question,
//           userAnswer: targetAnswer.answer
//         });

//         return ++total;
//       }
//       if(targetAnswer){
//         resultArr.push({
//             isCorrect: false,
//             correctAnswer: answer.answer,
//             userAnswer: targetAnswer.answer,
//             question: targetAnswer.question
//           });
//       }
      

//       return total;
//     },
//     0
//   );

//   const resultPercent = (result / total) * 100;

//   return {resultPercent, resultArr};
// };


export {};