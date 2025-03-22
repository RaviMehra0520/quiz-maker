import { useState, ReactNode, useMemo } from "react";
import { QuestionProps, QuizContextType } from "../interfaces";
import { QuizContext } from "./QuizContext";

interface AuthProviderProps {
    children: ReactNode;
}

const QuizProvider = ({ children }: AuthProviderProps) => {
    const [quiz, setQuiz] = useState<QuestionProps[] | null>(null);
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const update = (quiz: QuestionProps[]) => setQuiz(quiz);
    const submitQuiz = () => setQuizSubmitted(true);
    const clear = () => {
        setQuizSubmitted(false);
        setQuiz(null);
    };
    const value: QuizContextType = useMemo(() => ({ questions: quiz, quizSubmitted, update, clear, submitQuiz }), [quiz, quizSubmitted]);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export default QuizProvider;