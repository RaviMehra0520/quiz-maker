import axiosInstance from '../utils/interceptor';
import { QuestionProps, QuizParams } from '../interfaces';
import { randomizeQuizOptions } from '../utils/randomOption';

export const fetchQuizOptions = async () => {
  const response = await axiosInstance.get(`/api_category.php`);
  return response.data;
};

export const fetchQuizByCatory = async (quizParams: QuizParams) => {
  const response = await axiosInstance.get(`/api.php`, { params: quizParams });
  return response.data.results.map((question: QuestionProps) => {
    const options = [...question.incorrect_answers, question.correct_answer];
    return {
      ...question,
      incorrect_answers: randomizeQuizOptions(options),
      selectedOption: '',
    };
  });
};
