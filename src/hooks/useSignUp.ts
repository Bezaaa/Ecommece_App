// src/hooks/useSignUpMutation.ts
import { signUp, SignUpData } from "@/api/signUp";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: (data: SignUpData) => signUp(data),
    onSuccess: (data) => {
      console.log("User signed up successfully", data);
    },
  });
};

export const useCheckBackendIsWorking = () => {
  return useQuery({
    queryKey: ["checkBackend"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/signup/`);
      console.log("Backend response in query:", response);
      if (!response) {
        throw new Error("Backend is not working");
      }
      console.log("Backend response in json:", response);
      return response;
    },
    retry: false,
  });
};
