import axios from "axios";

export const loginApi = async (username: string, password: string) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/login/", {username, password});
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data);
    }
  };