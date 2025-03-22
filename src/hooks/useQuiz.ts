import { QuizContext } from "../contexts/QuizContext";
import { useSafeContext } from "../utils/useSafeContext";

export function useQuiz() {
  return useSafeContext(QuizContext, "QuizContext must be used within a provider");
}
