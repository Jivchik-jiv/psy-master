import { LinearProgress } from "@mui/material";
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
              <Link to={quiz.quizId} className={styles.link}> 
              <p className={styles.linkTitle}>{quiz.title} </p>
              <div className={styles.progress}>
                <LinearProgress variant="determinate" value={results[quiz.quizId] || 0}  sx = {{height: "100%"}}/>
              </div>
              <div className={styles.result}>{<span>{results[quiz.quizId] || 0}&#37;</span>}</div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
     
    </>
  );
};

export default QuizzesList;
