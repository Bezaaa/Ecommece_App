// src/services/signUp.ts
import axios from "axios";

export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signUp = async (data: SignUpData) => {
  const response = await axios.post("/api/auth/signup", data);
  return response.data;
};
