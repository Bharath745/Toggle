import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGk91PznpZP1MtzKTl0hAPMwiqDzLkYqUdXVJyS0nwTRe_BRoenNymAqk5hw&s" alt="eye" />
        </div>
        <h2 className="name">Name: John Doe</h2>
        <p className="registration">Registration No: 123456</p>
        <button className="button" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="details">
            Additional details or content can go here...
          </div>
        )}
      </div>
    </div>
  );
};

export default App;