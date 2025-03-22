import React from 'react';
import { QuestionProps } from '../../../interfaces';
import ChooseOption from './ChooseOption';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../../../hooks/useQuiz';
const QuizTest: React.FC = () => {
  const quizContext = useQuiz();
  const navigator = useNavigate();
  const { questions, quizSubmitted, submitQuiz, clear, update } = quizContext;
  const showActionBtn = questions?.every((x) => x.selectedOption);
  const score =
    questions?.reduce(
      (count, q) => count + (q.correct_answer === q.selectedOption ? 1 : 0),
      0
    ) ?? 0;

  // Scroe class
  let scoreClass = '';
  if (score <= 1) {
    scoreClass = 'red';
  } else if (score >= 1 && score <= 3) {
    scoreClass = 'yellow';
  } else {
    scoreClass = 'green';
  }

  const handleBtnEvent = () => {
    if (quizSubmitted) {
      clear();
    } else {
      submitQuiz();
      navigator('/quiz-maker/result');
    }
  };

  const handleChooseOption = (
    question: QuestionProps,
    selectedOption: string
  ) => {
    const upadateQuestion = { ...question, selectedOption };
    if (questions) {
      const updateQuiz = questions.map((question) =>
        question.question === upadateQuestion.question
          ? upadateQuestion
          : question
      );
      update(updateQuiz);
    }
  };

  return (
    <div className="quiz-test-container">
      {questions?.map((question) => {
        return (
          <div key={question.question} className="quiz-paper">
            {question.question}
            <ChooseOption
              correctAnswer={question.correct_answer}
              selectedAnswer={question.selectedOption}
              quizSubmitted={quizSubmitted}
              options={question.incorrect_answers}
              question={question}
              onChooseOption={handleChooseOption}
            />
          </div>
        );
      })}
      <div className="quiz-action-container">
        {quizSubmitted && questions && (
          <span className={scoreClass}>
            You scored {score ?? 0} out of {questions.length}
          </span>
        )}
        {showActionBtn && (
          <Button
            id="quizActionBtn"
            label={quizSubmitted ? 'Create new quiz' : 'Submit'}
            onClick={handleBtnEvent}
          />
        )}
      </div>
    </div>
  );
};

export default QuizTest;
