import * as React from "react";
import { IQuizQuestion } from "../../interfaces";
import styles from "./QuizzesList.module.css";
import cx from "classnames";
import { StyledContainedBtn } from "../../common/styledMuiComponents/styledForms";

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
        [styles.answerItem]: true,
        [styles.selectedItem]: true,
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
      [styles.answerItem]: true,
      [styles.selectedItem]: false,
    });
  };

  return (
    <div className={styles.quizzesWrap}>
      <p className={styles.question}>{question}</p>

      <form onSubmit={handleSubmit}>
        <ul className={styles.answersList}>
          {answers.map((answer, answerIndex) => {
            return (
              <li key={answer} className={makeOptionalClasses(answer)}>
                <label>
                  <span className={styles.answerText}>{answer}</span>
                  <input
                    type="radio"
                    onChange={() => handleAnswersStatus(answerIndex, answer)}
                    checked={answersStatus[answerIndex]}
                    disabled={isAnswered}
                    className={styles.answerInput}
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
        <div className={styles.btnWrap}>
        { isAnswered ? <StyledContainedBtn variant="contained" disableElevation onClick={goNext} sx={{
        marginBottom: "10px", marginTop: "10px"
      }}>Next</StyledContainedBtn>
       :     <StyledContainedBtn variant="contained" disableElevation type="submit" sx={{
        marginBottom: "10px", marginTop: "10px"
      }}>Submit</StyledContainedBtn>
         }
        </div>
       

    
      </form>
      {/* {isLastQuestion ? 
      <button type="button" onClick={goToResult} disabled={!isAnswered}>
        See result
      </button>
      :<button type="button" onClick={goNext} disabled={!isAnswered}>
        Next
      </button>} */}
    
    </div>
  );
};

export default QuestionView;
