import { createContext } from "react";
import { QuizContextType } from "../interfaces";

export const QuizContext = createContext<QuizContextType | undefined>(undefined);