import axios, { type AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Aqui é a função que vai ser usada para fazer as requisições para a API
export const fetcher = (url: string, options: AxiosRequestConfig = {}) => api.get(url, options).then((res) => res.data);
