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
    <>
      <h1 className = {styles.title}>Quizzes</h1>
      <div className={styles.quizzesWrap}>
        <ol className={styles.list}>
          {quizzes.map((quiz) => (
            <li key={quiz.quizId} className={styles.listItem}>
              <Link to={quiz.quizId} className={styles.link}> {quiz.title} </Link>
              <div className={styles.result}>{results[quiz.quizId] && <span>Completed! Result: {results[quiz.quizId]}&#37;</span>}</div>
            </li>
          ))}
        </ol>
      </div>
     
    </>
  );
};

export default QuizzesList;
