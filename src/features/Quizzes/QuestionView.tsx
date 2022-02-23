import * as React from "react";
import { IQuizQuestion } from "../../interfaces";
import styles from "./QuizzesList.module.css";
import cx from "classnames";

interface Props {
  questionObj: IQuizQuestion;
  moveToNextquestion: () => void;
  correctAnswer: string | null;
  handleResultCount: ()=>void;
  isLastQuestion: boolean;
  goToResult: ()=>void;
}

// interface CssClassesArgs {
//   selectedAnswer: string | null,
//   correctAnswer: string | null,
//   isAnswered: boolean
// }

const QuestionView = ({
  questionObj,
  moveToNextquestion,
  correctAnswer,
  handleResultCount,
  goToResult, 
  isLastQuestion
}: Props) => {
  const { answers, question } = questionObj;

  const [isSelected, setIsSelected] = React.useState(false);
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = React.useState<null | string>(
    null
  );
  const [answersStatus, setAnswersStatus] = React.useState([
    false,
    false,
    false,
    false,
  ]);

  const handleAnswersStatus = (answerIndex: number, answer: string) => {
    const newAnswersStatus = [false, false, false, false];

    newAnswersStatus[answerIndex] = true;
    setAnswersStatus(newAnswersStatus);
    setSelectedAnswer(answer);
    setIsSelected(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnswered(true);
    if(selectedAnswer && (selectedAnswer === correctAnswer)){
      handleResultCount();
    }
    
  };

  const goNext = () => {
    setIsSelected(false);
    setIsAnswered(false);
    setAnswersStatus([false, false, false, false]);
    moveToNextquestion();
  };

  const makeOptionalClasses = (answer: string) => {
    if (answer === selectedAnswer) {
      return cx({
        [styles.answer]: true,
        [styles.correct]: isAnswered && selectedAnswer === correctAnswer,
        [styles.wrong]: isAnswered && selectedAnswer !== correctAnswer,
      });
    }

    if (isAnswered) {
      return cx({
        [styles.correctHint]:
          isAnswered &&
          selectedAnswer !== correctAnswer &&
          answer === correctAnswer,
      });
    }

    return cx({
      [styles.answer]: true,
    });
  };

  return (
    <div>
      <h2>{question}</h2>

      <form onSubmit={handleSubmit}>
        <ul>
          {answers.map((answer, answerIndex) => {
            return (
              <li key={answer} className={makeOptionalClasses(answer)}>
                <label>
                  <span>{answer}</span>
                  <input
                    type="radio"
                    onChange={() => handleAnswersStatus(answerIndex, answer)}
                    checked={answersStatus[answerIndex]}
                    disabled={isAnswered}
                  />
                </label>
                {isAnswered &&
                  answer === correctAnswer &&
                  selectedAnswer === correctAnswer && <p>Correct!</p>}
                {isAnswered &&
                  answer === correctAnswer &&
                  selectedAnswer !== correctAnswer && (
                    <p>This is the correct answer</p>
                  )}
                {isAnswered &&
                  answer !== correctAnswer &&
                  answer === selectedAnswer && <p>You wrong!</p>}
              </li>
            );
          })}
        </ul>
        <button type="submit" disabled={!isSelected || isAnswered}>
          Submit
        </button>
      </form>
      {isLastQuestion ? 
      <button type="button" onClick={goToResult} disabled={!isAnswered}>
        See result
      </button>
      :<button type="button" onClick={goNext} disabled={!isAnswered}>
        Next
      </button>}
    
    </div>
  );
};

export default QuestionView;
