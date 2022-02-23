import { CircularProgress } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import * as React from "react";
import { firebaseDB } from "../../firebaseSetup";
import { IQuizFromList } from "../../interfaces";
import QuizzesList from "./QuizzesList";

const QuizzesListWrap = () => {
  const [quizzes, setQuizzes] = React.useState<null | IQuizFromList[]>(null);

  React.useEffect(() => {
    getDoc(doc(firebaseDB, "quizzes", "quizzesList"))
      .then((response) => {
        if (response.exists()) {
          setQuizzes(response.data().quizzesList);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      {quizzes ? (
        <QuizzesList quizzes={quizzes} />
      ) : (
        <CircularProgress color="secondary" />
      )}
    </>
  );
};

export default QuizzesListWrap;





