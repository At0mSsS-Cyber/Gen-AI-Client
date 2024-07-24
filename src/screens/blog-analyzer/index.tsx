import React, { useState } from "react";
import InputForm from "./InputForm";
import QuestionForm from "./QuestionForm";
import AnswerDisplay from "./AnswerDisplay";
import { processUrls, askQuestion } from "../../services/blogAPI";

const App = () => {
  const [urls, setUrls] = useState(["", "", ""]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState([]);

  const handleChange = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const handleProcessUrls = async () => {
    try {
      const message = await processUrls(urls);
      console.log(message);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleAskQuestion = async () => {
    try {
      const data = await askQuestion(question);
      setAnswer(data.answer);
      setSources(data.sources.split("\n"));
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>RockyBot: News Research Tool 📈</h1>
      <InputForm urls={urls} handleChange={handleChange} processUrls={handleProcessUrls} />
      <QuestionForm question={question} setQuestion={setQuestion} askQuestion={handleAskQuestion} />
      <AnswerDisplay answer={answer} sources={sources} />
    </div>
  );
};

export default App;
