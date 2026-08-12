import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, ArrowRight, X, Bell } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { useAuth } from '../../contexts/AuthContext';
import { loginUser } from '../../lib/auth';
import { 
  AuthLayout, AuthCard, InputField, PasswordField, 
  AuthButton, FormError 
} from '../../components/auth/AuthComponents';

export default function PublicLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (!authLoading && user) {
      navigate('/account/profile', { replace: true });
    }
  }, [user, authLoading, navigate]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await loginUser(email, password);
      navigate('/account/profile', { replace: true });
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Unable to sign in. Please check your email and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout page="login">
      <SEO title="Login | INNOVAC BIOTECHNOLOGIES" noindex={true} />
      
      <AuthCard maxWidth="500px">
        <div className="text-center mb-8">
          <div className="flex justify-end gap-2 mb-4">
            <button className="p-2 text-[#6A6A6A] hover:bg-[#ECECE9]/60 hover:text-[#080808] rounded-full relative transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF4D00] rounded-full border border-white"></span>
            </button>
            <button onClick={() => navigate('/', { replace: true })} className="p-2 text-[#6A6A6A] hover:bg-[#ECECE9]/60 hover:text-[#080808] rounded-full" aria-label="Close Account">
              <X size={20} />
            </button>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[#050505] uppercase">
            Login
          </h1>
          <div className="w-12 h-1 bg-[#FF4D00] mx-auto mt-2 mb-4" />
          <p className="text-neutral-500 text-sm font-light">
            Enter your credentials to access your account.
          </p>
        </div>

        {error && (
          <div className="p-4 mb-6 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold flex items-center gap-2">
            <FormError message={error} />
          </div>
        )}

        <form onSubmit={handleLoginSubmit} className="space-y-6">
          {/* Email input */}
          <InputField 
            label="Email Address"
            type="email"
            required
            icon={Mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />

          {/* Password input */}
          <div className="space-y-2">
            <PasswordField 
              label="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {/* Options: Remember me & Forgot Password */}
          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center gap-2 text-neutral-500 font-light cursor-pointer select-none">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-neutral-300 text-[#FF4D00] focus:ring-[#FF4D00] accent-[#FF4D00]"
              />
              <span>Remember Me</span>
            </label>
            <Link to="/forgot-password" className="text-[#FF4D00] font-semibold hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login button */}
          <AuthButton loading={loading} loadingText="Signing In...">
            LOGIN
          </AuthButton>
        </form>



        {/* Link to Signup */}
        <div className="mt-8 text-center text-sm text-neutral-500 font-light">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#FF4D00] font-semibold hover:underline">
            Sign Up
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
