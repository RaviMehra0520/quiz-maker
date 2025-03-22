import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import SelectInput from '../../components/SelectInput';
import { useLoaderData } from 'react-router-dom';
import { fetchQuizByCatory } from '../../services/quizService';
import { SelectDropdownOptions } from '../../interfaces';
import QuizTest from './components/QuizTest';
import { useQuiz } from '../../hooks/useQuiz';

const QuizPage: React.FC = () => {
  const { trivia_categories: categoryOptions } =
    useLoaderData() as SelectDropdownOptions;
  const quizContext = useQuiz();
  const { questions, update } = quizContext;
  const [categoryInputValue, setCategoryInputValue] = useState('');
  const [difficultyInputValue, setDifficultyInputValue] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (categoryInputValue !== '' && difficultyInputValue !== '') {
      setBtnDisabled(false);
    }
  }, [categoryInputValue, difficultyInputValue]);

  const difficultyOptions = [
    {
      id: 'easy',
      name: 'Easy',
    },
    {
      id: 'medium',
      name: 'Medium',
    },
    {
      id: 'difficult',
      name: 'Difficult',
    },
  ];

  const handleSelectCateory = (value: string) => {
    setCategoryInputValue(value);
  };

  const handleSelectDifficulty = (value: string) => {
    setDifficultyInputValue(value);
  };

  const handleCreateQuiz = async () => {
    const paramObj = {
      amount: 5,
      category: categoryInputValue,
      difficulty: difficultyInputValue,
      type: 'multiple',
    };
    const response = await fetchQuizByCatory(paramObj);
    update(response);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz Maker</h1>
      <div className="filter-quiz-contanier">
        {categoryOptions && (
          <SelectInput
            name="categorySelect"
            placeholder="Select a category"
            options={categoryOptions}
            onChange={handleSelectCateory}
          />
        )}
        {categoryOptions && (
          <SelectInput
            name="difficultySelect"
            placeholder="Select difficulty"
            options={difficultyOptions}
            onChange={handleSelectDifficulty}
          />
        )}
        {categoryOptions && (
          <Button
            id="createBtn"
            disabled={btnDisabled}
            label="Create"
            onClick={handleCreateQuiz}
          />
        )}
      </div>
      {questions && <QuizTest />}
    </div>
  );
};

export default QuizPage;
