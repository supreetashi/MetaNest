export type UserRole = 'admin' | 'resident';

export interface AuthUser {
  id: number;
  mobile_number: string;
  first_name: string;
  last_name: string;
  role: UserRole;
}

export interface SendOtpResponse {
  success: boolean;
  message: string;
  /**
   * Only present when the backend's SMS_PROVIDER is 'console' (local/dev mode) —
   * the OTP is echoed back in the response instead of actually being texted.
   * In a real deployment with a real SMS provider, this will be undefined.
   */
  otp?: string;
}

export interface ResendOtpResponse {
  success: boolean;
  message: string;
}

export interface VerifyOtpData {
  message: string;
  access: string;
  refresh: string;
  user: AuthUser;
}

export interface VerifyOtpResponse {
  success: boolean;
  message: string;
  data: VerifyOtpData;
}