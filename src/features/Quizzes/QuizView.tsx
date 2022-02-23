import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import routes from "../../app/routes";
import { selectUser, updateUserResultAndPoints } from "../../common/AuthRedux/thunks";
import { IAnswers, IQuiz } from "../../interfaces";
import QuestionView from "./QuestionView";
import { fetchAnswers, fetchQuiz } from "./QuizApi";
import styles from "./QuizzesList.module.css";

const QuizView = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  const [quiz, setQuiz] = React.useState<null | IQuiz>(null);
  const [answers, setAnswers] = React.useState<null | IAnswers>(null);
  const [correctAnswersCount, setCorrectAnswersCount] = React.useState(0);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [isLastQuestion, setIsLastQuestion] = React.useState(false);

  const totalQuestions = quiz?.questions.length || 0;
  const params = useParams();
  const user =useSelector(selectUser);

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (params.quizId) {
      fetchQuiz(params.quizId).then((quizData) => {
        if (quizData) {
          setQuiz(quizData);
        }
      });

      fetchAnswers(params.quizId).then((answersData) => {
        if (answersData) {
          setAnswers(answersData);
        }
      });
    }
  }, [params.quizId]);

  const moveToNextQuestion = () => {

    
    setCurrentQuestionIndex((prevIndex) => {
      if(prevIndex+2 === quiz!.questions.length){
        setIsLastQuestion(true);
      }
      return ++prevIndex;
    });

  };

  const goToResult =()=>{
    setIsCompleted(true);
    if(correctAnswersCount && params.quizId){
      const result = +((correctAnswersCount / totalQuestions) * 100).toFixed(2);
      dispatch(updateUserResultAndPoints({quizId: params.quizId, result, userData: user}))
    }
    

  }

  const getCorrectAnswer = (): (null | string )=>{
  
     if(quiz && answers){
      const currentQuestionId = quiz.questions[currentQuestionIndex].qid;
      const currentQuestionWithAnswer = answers.find((item)=>item.qid===currentQuestionId)

       return currentQuestionWithAnswer?.answer || null;
     }
     return null;
  };


  const handleResultCount = () => {
      setCorrectAnswersCount(correctAnswersCount+1);
  }




  if(!(quiz && answers)){
    return (
      <div>Loading...</div>
    )
  }

  
  return (
    <>
      {!isCompleted && (
        <div className={styles.quiz}>
          <h1>{quiz.title}</h1>
          <p>
            Question {currentQuestionIndex + 1}/{totalQuestions}
          </p>
          <QuestionView
            questionObj={quiz.questions[currentQuestionIndex]}
            moveToNextquestion={moveToNextQuestion}
            correctAnswer={getCorrectAnswer()}
            handleResultCount={handleResultCount}
            isLastQuestion = {isLastQuestion}
            goToResult = {goToResult}
          />
        </div>
      )}
      { (isCompleted) && (
        <div>
           <h1>{quiz.title}</h1>
           <p>Your result: {correctAnswersCount}/{totalQuestions} correct answers!</p>
           <Link to={routes.quizzes}>See more quizzes</Link>
        </div>
      )}
    </>
  );
};

export default QuizView;
