import axios from "axios";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://your-backend-url.com/api/v1";

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
  timeout: 15000,
});

export function setAuthToken(token: string | null) {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
}

export function getApiErrorMessage(error: unknown, fallback: string) {
  if (axios.isAxiosError(error)) {
    const detail = (error.response?.data as { detail?: string })?.detail;
    if (detail) return detail;

    if (typeof error.response?.data === "string") {
      return error.response.data;
    }

    if (!error.response) {
      return "Unable to reach the server. Please check your connection.";
    }
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallback;
}

