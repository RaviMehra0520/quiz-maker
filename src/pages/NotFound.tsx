import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="error-page-container">
      <h1>Page not found.</h1>
      <Link to="/quiz-maker">Home Page</Link>
    </div>
  );
};

export default NotFound;
