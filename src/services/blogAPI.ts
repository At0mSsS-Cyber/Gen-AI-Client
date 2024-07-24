import axios from "axios";

export const processUrls = async (urls: String[]) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/process_urls/", { urls });
    return response.data.message;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const askQuestion = async (question: String) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/ask_question/", { question });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};
