export interface ApiError {
  message: string;
  status: number;
  endpoint: string;
}

export interface ApiResponse<T> {
  success: boolean;
  count: number;
  data: T;
}
