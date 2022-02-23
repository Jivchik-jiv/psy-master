import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../common/AuthRedux/thunks";
import { IQuizFromList } from "../../interfaces";
import styles from "./QuizzesList.module.css";

interface Props {
  quizzes: IQuizFromList[];
}

const QuizzesList = ({ quizzes }: Props) => {

  const {results} = useSelector(selectUser);

  return (
    <div className={styles.quizzesWrap}>
      <h1>Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.quizId}>
            <Link to={quiz.quizId}> {quiz.title} </Link>
            {results[quiz.quizId] && <span>Completed! Result: {results[quiz.quizId]}&#37;</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizzesList;
