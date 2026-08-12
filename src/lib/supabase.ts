import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials are missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder-project.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
);

export type Role = 'SUPER_ADMIN' | 'ADMIN' | 'SUPERVISOR' | 'EMPLOYEE' | 'COLLABORATOR' | 'PUBLIC_USER';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: Role;
  department?: string;
  position?: string;
  avatar_url?: string;
  status: 'Active' | 'Inactive' | 'Suspended';
}
