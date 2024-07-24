import React, { useState } from 'react';
import axios from 'axios';

const QuestionScreen: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      const result = await axios.post('http://127.0.0.1:8000/sql/query/', { question });
      setResponse(result?.data?.answer?.result);
    } catch (err: any) {
      setError('Failed to fetch response. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ask a Question</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Enter your question"
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>
      {response && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
      {error && (
        <div style={{ marginTop: '20px', color: 'red', fontSize: '18px' }}>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionScreen;
