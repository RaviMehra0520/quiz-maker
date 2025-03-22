import React from 'react';
import { Link } from 'react-router-dom';

const ErrorHandler: React.FC = () => {
  return (
    <div className="error-page-container">
      <h1>Sorry, something went wrong.</h1>
      <p>Please try again later.</p>
      <Link to="/quiz-maker">Home Page</Link>
    </div>
  );
};

export default ErrorHandler;
