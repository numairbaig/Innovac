import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase, Role } from '../../lib/supabase';
import { SEO } from '../../components/SEO';

export default function PortalSignup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role>('EMPLOYEE');
  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    
    try {
      // Sign up via Supabase Auth
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            role: role,
            department: department,
            position: position,
            status: 'Active'
          }
        }
      });
      
      if (signUpError) throw signUpError;

      // Optional: try to write to public.profiles table if exists
      try {
        await supabase.from('profiles').insert({
          id: data.user?.id,
          email,
          full_name: fullName,
          role,
          department,
          position,
          status: 'Active'
        });
      } catch (insertError) {
        // Suppress profile insert error since AuthContext fallback handles metadata-based roles
        console.warn('Profile table insert failed, falling back to metadata:', insertError);
      }

      setSuccess(true);
      setTimeout(() => {
        navigate('/portal/login');
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F3] py-12 px-4 sm:px-6 lg:px-8">
      <SEO title="Member Registration | INNOVAC BIOTECHNOLOGIES" />
      <div className="max-w-md w-full bg-white p-8 border border-neutral-200 shadow-sm rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-neutral-900">Member Registration</h1>
        
        {error && <div className="bg-red-50 text-red-600 p-3 mb-4 text-sm border border-red-200">{error}</div>}
        {success && (
          <div className="bg-green-50 text-green-700 p-3 mb-4 text-sm border border-green-200">
            Account created successfully! Redirecting to login page...
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
            <input 
              type="text" 
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-none rounded" 
              placeholder="Dr. Sarah Jenkins"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-none rounded" 
              placeholder="s.jenkins@innovacbiotech.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-none rounded" 
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Role / Portal Access</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              className="w-full px-4 py-2 border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-none rounded bg-white"
            >
              <option value="EMPLOYEE">Employee Portal</option>
              <option value="COLLABORATOR">Collaborator Portal</option>
              <option value="ADMIN">Administrator Portal</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Department</label>
              <input 
                type="text" 
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-none rounded" 
                placeholder="R&D, Molecular"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Position</label>
              <input 
                type="text" 
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-none rounded" 
                placeholder="Lead Scientist"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#FF4D00] text-white font-semibold py-2 hover:bg-[#E64500] transition-colors disabled:opacity-50 mt-4 rounded"
          >
            {loading ? 'Creating Account...' : 'SIGN UP →'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-neutral-600">
          Already have an account?{' '}
          <Link to="/portal/login" className="text-[#FF4D00] font-medium hover:underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
