import axios from "axios";

export const sqlQuery = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/sql/query/");
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data);
    }
  };
  