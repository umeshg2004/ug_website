import axios from "axios";

function resolveBaseUrl() {
  const envUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  // 1) If an env URL is provided and not the placeholder, use it
  if (envUrl && !envUrl.includes("your-backend-url.com")) {
    // But if we are in the browser on a non-localhost host and the env points to localhost,
    // prefer same-origin to avoid unreachable calls / mixed content.
    if (
      typeof window !== "undefined" &&
      window.location.hostname !== "localhost" &&
      envUrl.includes("localhost")
    ) {
      return `${window.location.origin}/api/v1`;
    }
    return envUrl;
  }

  // 2) Local dev fallback
  if (typeof window !== "undefined" && window.location.hostname === "localhost") {
    return "/api/v1";
  }

  // 3) Production fallback: always hit the proxied path (Next.js rewrite)
  return "/api/v1";
}

export const API_BASE_URL = resolveBaseUrl();

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
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

