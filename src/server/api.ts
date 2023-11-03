import axios from "axios";

export type { AxiosError } from "axios";

export const API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL_BASE}/api`,
});
