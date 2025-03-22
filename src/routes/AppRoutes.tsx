import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import LayoutHandler from '../LayoutHandler';
import NotFound from '../pages/NotFound';
import ErrorHandler from '../pages/ErrorHandler';
import { fetchQuizOptions } from '../services/quizService';
import QuizResultPage from '../features/quiz/QuizResultPage';

// Lazy-loaded components
const Quiz = lazy(() => import('../features/quiz/QuizStartPage'));
const router = createBrowserRouter([
  {
    path: '/quiz-maker',
    element: <LayoutHandler />,
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: <Quiz />,
        loader: fetchQuizOptions,
      },
      {
        path: 'result',
        element: <QuizResultPage />,
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default router;
