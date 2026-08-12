import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { SEO } from '../../components/SEO';

export default function PortalLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      navigate('/portal/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F3]">
      <SEO title="Member Login | INNOVAC BIOTECHNOLOGIES" />
      <div className="max-w-md w-full bg-white p-8 border border-neutral-200">
        <h1 className="text-2xl font-bold mb-6 text-center text-neutral-900">Member Portal Login</h1>
        {error && <div className="bg-red-50 text-red-600 p-3 mb-4 text-sm">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Email / Username</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-none" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-none" 
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#FF4D00] text-white font-semibold py-2 hover:bg-[#E64500] transition-colors disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'LOGIN →'}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-neutral-600">
          Don't have an account?{' '}
          <Link to="/portal/signup" className="text-[#FF4D00] font-medium hover:underline">
            Register / Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}