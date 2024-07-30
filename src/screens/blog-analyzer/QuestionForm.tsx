import { Button, TextField } from "@mui/material";
import React, { MouseEventHandler } from "react";

interface QuestionFormProps {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  askQuestion: MouseEventHandler<HTMLButtonElement>;
}
const QuestionForm = ({
  question,
  setQuestion,
  askQuestion,
}: QuestionFormProps) => {
  return (
    <div className="flex flex-col p-5 space-y-4">
      <h2 className="text-gray-700 font-bold">Question</h2>
      <TextField
        type="text"
        variant="outlined"
        value={question}
        className="w-1/3"
        onChange={(e) => setQuestion(e.target.value)}
        label="Ask a question"
      />
      <Button className="w-52" onClick={askQuestion} type="button" variant="contained" color="primary">Ask</Button>
    </div>
  );
};

export default QuestionForm;
