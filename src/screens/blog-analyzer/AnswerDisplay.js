import React from "react";

const AnswerDisplay = ({ answer, sources }) => {
  return (
    answer && (
      <div>
        <h2>Answer</h2>
        <p>{answer}</p>
        {sources.length > 0 && (
          <div>
            <h3>Sources:</h3>
            <ul>
              {sources.map((source, index) => (
                <li key={index}>{source}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  );
};

export default AnswerDisplay;