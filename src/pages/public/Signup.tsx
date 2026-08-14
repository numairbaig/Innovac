import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Phone, Building2, ArrowRight, RefreshCw, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { useAuth } from '../../contexts/AuthContext';
import { registerUser, resendVerificationEmail } from '../../lib/auth';
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
  const [resending, setResending] = useState(false);
  const [resendMessage, setResendMessage] = useState('');

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
    setResendMessage('');

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
      // DO NOT silently redirect to login or profile page - display verification banner
    } catch (err: any) {
      console.error('Signup error:', err);
      setError(err.message || 'Failed to create account. Please check details and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) return;
    setResending(true);
    setResendMessage('');
    try {
      await resendVerificationEmail(email);
      setResendMessage('Verification link sent! Please check your inbox.');
    } catch (err: any) {
      setResendMessage(err.message || 'Failed to resend verification email.');
    } finally {
      setResending(false);
    }
  };

  if (success) {
    return (
      <AuthLayout page="signup">
        <SEO title="Account Created | INNOVAC BIOTECHNOLOGIES" noindex={true} />
        <AuthCard maxWidth="600px">
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-50 border border-green-200 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Mail size={32} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[#050505] uppercase mb-2">
              Account Created Successfully!
            </h1>
            <div className="w-12 h-1 bg-[#FF4D00] mx-auto mt-2 mb-6" />

            <div className="p-4 mb-6 bg-green-50 border border-green-200 text-green-800 rounded-xl text-sm font-semibold leading-relaxed text-left flex items-start gap-3">
              <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
              <div>
                Account created successfully! A verification link has been sent to your email address. Please verify your email before logging in.
              </div>
            </div>

            <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
              We sent a verification link to <strong className="font-semibold text-[#050505]">{email}</strong>. Please check your inbox and click the link to confirm your account.
            </p>

            {resendMessage && (
              <div className="p-3 mb-6 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl text-xs font-semibold">
                {resendMessage}
              </div>
            )}

            <div className="space-y-3 pt-2">
              <Link 
                to="/login" 
                className="w-full bg-[#FF4D00] hover:bg-[#FF5A00] text-white h-[46px] rounded-[10px] text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>PROCEED TO LOGIN</span>
                <ArrowRight size={14} />
              </Link>

              <button
                type="button"
                onClick={handleResend}
                disabled={resending}
                className="w-full bg-white border border-[#D8D8D5] hover:border-[#050505] text-[#050505] h-[44px] rounded-[10px] text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {resending ? (
                  <span>Sending Verification Link...</span>
                ) : (
                  <>
                    <RefreshCw size={14} />
                    <span>Resend Verification Link</span>
                  </>
                )}
              </button>
            </div>

            {/* Helpful Email Delivery Tip Box */}
            <div className="mt-6 p-4 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 text-left space-y-1.5 font-light">
              <p className="font-semibold text-amber-950 flex items-center gap-1.5">
                <span>Didn't receive the confirmation email?</span>
              </p>
              <ul className="list-disc pl-4 space-y-1 text-amber-900/90">
                <li>Check your <strong>Spam, Junk, or Promotions</strong> folder.</li>
                <li>Wait 1–2 minutes or click <strong>Resend Verification Link</strong> above.</li>
                <li>Ensure custom SMTP settings in your Supabase Dashboard match your domain mailbox.</li>
              </ul>
            </div>
          </div>
        </AuthCard>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout page="signup">
      <SEO title="Create Account | INNOVAC BIOTECHNOLOGIES" noindex={true} />

      <AuthCard maxWidth="600px">
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
