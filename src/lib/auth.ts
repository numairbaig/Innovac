import { supabase } from './supabase';

/**
 * Signs in a user with email and password using Supabase.
 */
export async function loginUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) throw error;
  return data;
}

/**
 * Registers a new user with email, password, and optional profile metadata (e.g. fullName, institution).
 */
export async function registerUser(email: string, password: string, metadata?: Record<string, any>) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata,
      emailRedirectTo: `${import.meta.env.VITE_SITE_URL}/auth/confirmed`,
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
