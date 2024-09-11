import React from 'react';
import './QuoteCard.css';  // Import the CSS file for styling

const QuoteCard = () => {
  return (
    <div className="quote-card">
      <div className="quote-icon"><h1>“</h1></div>
      <div className="quote-content">
        <h1>QUOTE</h1>
        <p>
         Great things in bussiness are never done by one person. They are done by a team of people.  
          
        </p>
        <p className="quote-author">- Steve Jobs</p>
      </div>
    </div>
  );
};

export default QuoteCard;
