// src/services/signUp.ts
import { SignUpData } from "@/types/SignUp";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const signUp = async (data: SignUpData) => {
  const response = await axios.post(`${BASE_URL}/signup/`, data);
  return response.data;
};
