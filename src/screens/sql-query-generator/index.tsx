import React, { useState } from "react";
import DbDetails from "./DefaultDBDetails";
import { sqlQuery } from "../../services/sqlAPI";
import { TextField, Button, CircularProgress } from "@mui/material";

const QuestionScreen: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
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
      const data = await sqlQuery(question);
      setResponse(data?.answer?.result);
    } catch (err: any) {
      setError("Failed to fetch response. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" w-full flex flex-col h-screen p-10 bg-gray-100 flex-grow">
      <h1 className="text-2xl font-bold mb-5">Ask a Question</h1>
      <div className="mb-5 w-1/2">
        <TextField
          label="Enter your question"
          variant="outlined"
          fullWidth
          value={question}
          onChange={handleQuestionChange}
          className="mb-5"
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={loading || !question}
        className="mb-5 w-52"
      >
        {loading ? <CircularProgress size={24} /> : "Ask"}
      </Button>
      {response && (
        <div className="mt-5 text-lg">
          <h2 className="text-xl font-semibold">Response:</h2>
          <p>{response}</p>
        </div>
      )}
      {error && (
        <div className="mt-5 text-lg text-red-500">
          <h2 className="text-xl font-semibold">Error:</h2>
          <p>{error}</p>
        </div>
      )}
      <div className="mt-5">
        <DbDetails />
      </div>
    </div>
  );
};

export default QuestionScreen;
