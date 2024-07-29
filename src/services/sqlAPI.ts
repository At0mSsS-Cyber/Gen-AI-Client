import axios from "axios";

export const sqlQuery = async (question: string) => {
  try {
    const response: { data: any } = await axios.post(
      "http://127.0.0.1:8000/sql/query/",
      { question }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const fetchTablesApi = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/sql/api/tables");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export const fetchSampleData = async (tableName: string) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/sql/api/tables/${tableName}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};
