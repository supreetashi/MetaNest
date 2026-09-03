const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://127.0.0.1:8000/api/v1';

interface ApiErrorResponse {
  detail?: string;
  message?: string;
  [key: string]: unknown;
}

const PUBLIC_AUTH_PATHS = new Set(['/auth/send-otp/', '/auth/verify-otp/', '/auth/resend-otp/']);

export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const accessToken = localStorage.getItem('metanest_access_token');
  const shouldAttachAccessToken = accessToken && !PUBLIC_AUTH_PATHS.has(path);
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(shouldAttachAccessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      ...options.headers,
    },
  });

  const data = (await response.json().catch(() => null)) as T | ApiErrorResponse | null;
  if (!response.ok) {
    const errorData = data as ApiErrorResponse | null;
    const message = errorData?.detail ?? errorData?.message ?? 'Request failed';
    if (typeof message === 'string') {
      throw new Error(message);
    }

    const fieldErrors = Object.entries(message as Record<string, unknown>)
      .map(([field, errors]) => `${field}: ${Array.isArray(errors) ? errors.join(', ') : String(errors)}`)
      .join(' ');
    throw new Error(fieldErrors || JSON.stringify(message));
  }

  return data as T;
}