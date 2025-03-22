import { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes/AppRoutes";
import QuizProvider from "./contexts/QuizProvider";

function App() {
  return (
    <QuizProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </QuizProvider>
  );
}

export default App;
