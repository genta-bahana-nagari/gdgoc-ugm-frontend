import { cacheLife } from "next/cache";
import type { ApiResponse, ApiError } from "@/types/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch<T>(endpoint: string): Promise<ApiResponse<T>> {
  "use cache";

  cacheLife("hours");

  if (!API_URL) {
    throw new Error("API URL is not configured");
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error: ApiError = {
      message: `${response.status} ${response.statusText}`,
      status: response.status,
      endpoint,
    };
    throw error;
  }

  return response.json();
}
