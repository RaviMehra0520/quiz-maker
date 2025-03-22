import React, { useEffect } from 'react';
import QuizTest from './components/QuizTest';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../../hooks/useQuiz';

const QuizResultPage: React.FC = () => {
  const quizContext = useQuiz();
  const navigate = useNavigate();
  const { questions } = quizContext;

  useEffect(() => {
    if (!questions) {
      navigate('/quiz-maker');
    }
  }, [questions, navigate]);

  return (
    <div className="quiz-container">
      {questions ? (
        <div>
          <h1>Results</h1>
          <QuizTest />
        </div>
      ) : (
        'Loading....'
      )}
    </div>
  );
};

export default QuizResultPage;
