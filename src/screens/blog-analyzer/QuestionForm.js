import React from "react";

const QuestionForm = ({ question, setQuestion, askQuestion }) => {
  return (
    <div>
      <h2>Question</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question"
      />
      <button onClick={askQuestion}>Ask</button>
    </div>
  );
};

export default QuestionForm;