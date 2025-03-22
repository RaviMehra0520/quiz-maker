export interface SelectInputProps {
  name: string;
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export interface ButtonProps {
  id: string;
  label: string;
  disabled?: boolean;
  isActive?: boolean;
  isCorrectAnswer?: boolean;
  quizSubmitted?: boolean;
  onClick: (label?: string) => void;
}

export interface QuizParams {
  category: string;
  difficulty: string;
}

export interface QuestionProps {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  selectedOption: string;
}

export interface QuestionsSetProps {
  questions: QuestionProps[];
}

export interface QuizContextType {
  questions: QuestionProps[] | null;
  quizSubmitted: boolean;
  submitQuiz: () => void;
  update: (quiz: QuestionProps[]) => void;
  clear: () => void;
}

export interface ChooseOptionProps {
  options: string[];
  correctAnswer: string;
  selectedAnswer: string;
  question: QuestionProps;
  quizSubmitted: boolean;
  onChooseOption: (question: QuestionProps, selectedOption: string) => void;
}

export interface SelectDropdownOptions {
  trivia_categories: DropdownOption[];
}

export interface DropdownOption {
  id: number | string;
  name: string;
}
