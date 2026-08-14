import { supabase } from './supabase';

/**
 * Returns the reliable site URL for authentication redirects.
 * Automatically resolves to current window origin on live site (e.g. https://innovacbiotech.com).
 */
const getSiteUrl = () => {
  if (typeof window !== 'undefined' && window.location.origin && !window.location.origin.includes('localhost')) {
    return window.location.origin;
  }
  return import.meta.env.VITE_SITE_URL || 'https://innovacbiotech.com';
};

/**
 * Signs in a user with email and password using Supabase.
 * Blocks unverified users from authenticating or retaining a session.
 */
export async function loginUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) throw error;

  // Block login for unverified accounts
  if (data.user && !data.user.email_confirmed_at) {
    await supabase.auth.signOut();
    const unverifiedErr: any = new Error('Your email address is not verified. Please check your inbox to confirm your account.');
    unverifiedErr.isUnverified = true;
    unverifiedErr.unverifiedEmail = email;
    throw unverifiedErr;
  }

  return data;
}

/**
 * Registers a new user with email, password, and optional profile metadata.
 * Triggers fallback resend if identity already exists.
 */
export async function registerUser(email: string, password: string, metadata?: Record<string, any>) {
  const siteUrl = getSiteUrl();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata,
      emailRedirectTo: `${siteUrl}/auth/confirmed`,
    }
  });
  if (error) throw error;

  // If user already exists in auth table (identities array empty), trigger explicit resend confirmation
  if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
    try {
      await resendVerificationEmail(email);
    } catch (resendErr) {
      console.warn('Auto-resend for existing user failed:', resendErr);
    }
  }

  return data;
}

/**
 * Resends the signup email verification link to the given email address.
 */
export async function resendVerificationEmail(email: string) {
  const siteUrl = getSiteUrl();
  const { data, error } = await supabase.auth.resend({
    type: 'signup',
    email,
    options: {
      emailRedirectTo: `${siteUrl}/auth/confirmed`,
    }
  });
  if (error) throw error;
  return data;
}

/**
 * Signs out the currently authenticated user.
 */
export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
