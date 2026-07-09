import api from "../api/axios";
import type {
  LoginRequest,
  RegisterRequest,
} from "../types/auth";

export const login = (data: {
  username: string;
  password: string;
}) => {

  const formData = new URLSearchParams();

  formData.append("username", data.username);
  formData.append("password", data.password);

  return api.post(
    "/auth/login",
    formData,
    {
      headers:{
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};



export const register = async (
  data: RegisterRequest
) => {
  const response = await api.post(
    "/auth/register",
    data
  );

  return response.data;
};