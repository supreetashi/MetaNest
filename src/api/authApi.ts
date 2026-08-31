import { apiFetch, clearAuthStorage, getRefreshToken, setStoredUser, setTokens } from './httpClient';
import type {
  ResendOtpResponse,
  SendOtpResponse,
  UserRole,
  VerifyOtpData,
  VerifyOtpResponse,
} from '../types/auth';

export function sendOTP(mobileNumber: string, role: UserRole): Promise<SendOtpResponse> {
  return apiFetch<SendOtpResponse>('/auth/send-otp/', {
    method: 'POST',
    skipAuth: true,
    body: { mobile_number: mobileNumber, role: role.toUpperCase() },
  });
}

export function resendOTP(mobileNumber: string, role: UserRole): Promise<ResendOtpResponse> {
  return apiFetch<ResendOtpResponse>('/auth/resend-otp/', {
    method: 'POST',
    skipAuth: true,
    body: { mobile_number: mobileNumber, role: role.toUpperCase() },
  });
}

/**
 * Returns the flat, unwrapped shape (access/refresh/user) -- callers don't need
 * to know that the backend nests this inside a `data` field.
 */
export async function verifyOTP(
  mobileNumber: string,
  otp: string,
  role: UserRole,
): Promise<VerifyOtpData> {
  const response = await apiFetch<VerifyOtpResponse>('/auth/verify-otp/', {
    method: 'POST',
    skipAuth: true,
    body: { mobile_number: mobileNumber, otp, role: role.toUpperCase() },
  });

  const { data } = response;

  // Backend returns role as "ADMIN"/"RESIDENT"; normalize to lowercase so the
  // rest of the frontend (routes, UserRole type) only ever deals with one case.
  const normalized: VerifyOtpData = {
    ...data,
    user: { ...data.user, role: data.user.role.toLowerCase() as UserRole },
  };

  setTokens(normalized.access, normalized.refresh);
  setStoredUser(normalized.user);

  return normalized;
}

export async function logout(): Promise<void> {
  const refresh = getRefreshToken();
  try {
    if (refresh) {
      await apiFetch('/auth/logout/', {
        method: 'POST',
        body: { refresh },
      });
    }
  } finally {
    // Always clear local storage, even if the server call fails
    // (e.g. token already expired) -- the user still expects to be logged out.
    clearAuthStorage();
  }
}