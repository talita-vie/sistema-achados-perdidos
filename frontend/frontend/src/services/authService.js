import api from "./axiosInstance";

export const login = async (email, senha) => {
  const response = await api.post('/auth/login', {email, senha});
  return response.data;
};

export const register = async (nome, email, telefone, senha) => {
  const response = await api.post('/auth/register', {nome, email, telefone, senha});
  return response.data;
};