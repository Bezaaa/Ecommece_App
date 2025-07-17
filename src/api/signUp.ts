// src/services/signUp.ts
import axios from "axios";

export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const signUp = async (data: SignUpData) => {
  const response = await axios.post(`${BASE_URL}/signup/`, data);
  return response.data;
};
