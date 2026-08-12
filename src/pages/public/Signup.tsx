import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Phone, Building2, X, Bell } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { useAuth } from '../../contexts/AuthContext';
import { registerUser } from '../../lib/auth';
import { supabase } from '../../lib/supabase';
import { 
  AuthLayout, AuthCard, InputField, PasswordField, 
  AuthButton, FormError, PasswordStrength
} from '../../components/auth/AuthComponents';

export default function PublicSignup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (!authLoading && user) {
      navigate('/account/profile', { replace: true });
    }
  }, [user, authLoading, navigate]);

  // Frontend validations
  const isEmailValid = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const isPasswordStrong = (val: string) => {
    return val.length >= 8 && /[A-Z]/.test(val) && /[a-z]/.test(val) && /[0-9]/.test(val);
  };

  const isFormValid = 
    fullName.trim() !== '' &&
    isEmailValid(email) &&
    isPasswordStrong(password) &&
    password === confirmPassword &&
    agreeTerms;

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const data = await registerUser(email, password, {
        full_name: fullName,
        role: 'PUBLIC_USER',
        phone,
        organization,
        status: 'Active'
      });

      // Insert profile row to match Supabase database schema
      try {
        await supabase.from('profiles').insert({
          id: data.user?.id,
          email,
          full_name: fullName,
          role: 'PUBLIC_USER',
          status: 'Active'
        });
      } catch (insertError) {
        console.warn('Profile table insert failed, falling back to metadata:', insertError);
      }

      setSuccess(true);
      setTimeout(() => {
        navigate('/account/profile', { replace: true });
      }, 2000);
    } catch (err: any) {
      console.error('Signup error:', err);
      setError(err.message || 'Failed to create account. Please check details and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout page="signup">
      <SEO title="Create Account | INNOVAC BIOTECHNOLOGIES" noindex={true} />

      <AuthCard maxWidth="600px">
        <div className="flex justify-end gap-2 mb-4">
      <button className="p-2 text-[#6A6A6A] hover:bg-[#ECECE9]/60 hover:text-[#080808] rounded-full relative transition-colors">
        <Bell size={20} />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF4D00] rounded-full border border-white"></span>
      </button>
      <button onClick={() => navigate('/', { replace: true })} className="p-2 text-[#6A6A6A] hover:bg-[#ECECE9]/60 hover:text-[#080808] rounded-full" aria-label="Close Account">
        <X size={24} />
      </button>
    </div>
    <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-[#050505] uppercase">
            Create Your Account
          </h1>
          <div className="w-12 h-1 bg-[#FF4D00] mx-auto mt-2 mb-4" />
          <p className="text-neutral-500 text-sm font-light">
            Create your account to get started.
          </p>
        </div>

        {error && (
          <div className="p-4 mb-6 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold">
            <FormError message={error} />
          </div>
        )}
        {success && (
          <div className="p-4 mb-6 bg-green-50 border border-green-200 text-green-700 rounded-xl text-xs font-semibold">
            Account created successfully! Redirecting you to account dashboard...
          </div>
        )}

        <form onSubmit={handleSignupSubmit} className="space-y-6">
          
          {/* Two-column grid on desktop, single-column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField 
              label="Full Name"
              type="text"
              required
              icon={User}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Dr. Sarah Jenkins"
            />
            <InputField 
              label="Email Address"
              type="email"
              required
              icon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="s.jenkins@university.edu"
              error={email && !isEmailValid(email) ? "Please enter a valid email address." : undefined}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField 
              label="Phone Number"
              type="tel"
              icon={Phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 234-5678"
            />
            <InputField 
              label="Organization / Institution"
              type="text"
              icon={Building2}
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="Harvard Department of Biology"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <PasswordField 
                label="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              <PasswordStrength val={password} />
            </div>
            <div className="space-y-1">
              <PasswordField 
                label="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                error={confirmPassword && password !== confirmPassword ? "Passwords do not match." : undefined}
              />
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="text-xs text-left">
            <label className="flex items-start gap-2.5 text-neutral-500 font-light cursor-pointer select-none">
              <input 
                type="checkbox" 
                required
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded border-neutral-300 text-[#FF4D00] focus:ring-[#FF4D00] accent-[#FF4D00] shrink-0"
              />
              <span className="leading-normal">
                I agree to the{' '}
                <Link to="/terms" className="text-[#FF4D00] font-semibold hover:underline">
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-[#FF4D00] font-semibold hover:underline">
                  Privacy Policy
                </Link>.
              </span>
            </label>
          </div>

          {/* Create button */}
          <AuthButton 
            loading={loading} 
            loadingText="Creating Account..." 
            disabled={!isFormValid}
          >
            CREATE ACCOUNT
          </AuthButton>
        </form>



        {/* Link to Login */}
        <div className="mt-8 text-center text-sm text-neutral-500 font-light">
          Already have an account?{' '}
          <Link to="/login" className="text-[#FF4D00] font-semibold hover:underline">
            Login
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
