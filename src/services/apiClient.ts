const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://127.0.0.1:8000/api/v1';

interface ApiErrorResponse {
  detail?: string;
  message?: string;
  [key: string]: unknown;
}

export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const accessToken = localStorage.getItem('metanest_access_token');
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      ...options.headers,
    },
  });

  const data = (await response.json().catch(() => null)) as T | ApiErrorResponse | null;
  if (!response.ok) {
    const errorData = data as ApiErrorResponse | null;
    const message = errorData?.detail ?? errorData?.message ?? 'Request failed';
    throw new Error(typeof message === 'string' ? message : JSON.stringify(message));
  }

  return data as T;
}
