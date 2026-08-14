import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, Lock, Eye, EyeOff, ShieldCheck, Sparkles, 
  LayoutGrid, ArrowRight, Check, AlertCircle, Phone, Building2, User, X
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

// ============================================================================
// 1. BRAND PANEL
// ============================================================================
export interface FeatureItem {
  number: string;
  title: string;
  desc: string;
}

export function AuthBrandPanel({ page }: { page: 'login' | 'signup' | 'forgot-password' }) {
  const isLogin = page === 'login';
  const isSignup = page === 'signup';

  const label = isLogin 
    ? 'WELCOME BACK' 
    : isSignup 
      ? 'CREATE YOUR ACCOUNT' 
      : 'RESET PASSWORD';

  const heading = isLogin 
    ? (
      <>
        Welcome Back!<br />Glad to see <span className="text-[#FF4D00]">you</span> again.
      </>
    ) 
    : isSignup 
      ? (
        <>
          Join INNOVAC<br />BIOTECHNOLOGIES and<br /><span className="text-[#FF4D00]">advance science</span> together.
        </>
      )
      : (
        <>
          Recover access to<br />your <span className="text-[#FF4D00]">account</span>.
        </>
      );

  const description = isLogin
    ? 'Sign in to continue to your account and access your dashboard.'
    : isSignup
      ? 'Create an account to access our services, submit enquiries, track requests, and more.'
      : 'Enter your registered email address and we will help you reset your password.';

  const features: FeatureItem[] = isLogin
    ? [
        { number: '01', title: 'Secure Access', desc: 'Your account and information are protected.' },
        { number: '02', title: 'Personalized Experience', desc: 'Access your saved services, enquiries, and more.' },
        { number: '03', title: 'All in One Place', desc: 'Manage enquiries, applications, and workshop activity.' }
      ]
    : isSignup
      ? [
          { number: '01', title: 'Access All Services', desc: 'Explore our biotechnology and laboratory solutions.' },
          { number: '02', title: 'Track Your Requests', desc: 'Monitor enquiries, applications, and requests in one place.' },
          { number: '03', title: 'Secure & Trusted', desc: 'Your account information is handled securely.' }
        ]
      : [
          { number: '01', title: 'Verify Identity', desc: 'Confirm ownership via secure reset parameters.' },
          { number: '02', title: 'Encrypted Resets', desc: 'Password reset links are unique and temporary.' },
          { number: '03', title: 'Immediate Update', desc: 'Re-enter your account instantly upon password changes.' }
        ];

  // Visual image based on page
  const bgImage = isLogin
    ? 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop'
    : isSignup
      ? 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop'
      : 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop';

  return (
    <div className="flex flex-col justify-between h-full relative z-10">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 -m-12 z-0">
        <div className="absolute inset-0 bg-[#050505]/85 z-10" />
        <img 
          src={bgImage} 
          alt="Scientific panel background" 
          className="w-full h-full object-cover opacity-60 filter saturate-50"
        />
      </div>

      {/* TOP: Brand Logo */}
      <div className="relative z-10">
        <Link to="/" className="flex items-center gap-3 text-white hover:text-white/90 transition-colors">
          <img src="/logo.png" alt="INNOVAC BIOTECHNOLOGIES Logo" className="h-9 w-auto object-contain" />
          <div className="font-semibold text-xs leading-[1.1] tracking-wider uppercase">
            Innovac<br />Biotechnologies
          </div>
        </Link>
      </div>

      {/* MIDDLE: Heading and Trust Features */}
      <div className="relative z-10 my-12 space-y-12">
        <div className="space-y-4">
          <span className="text-[#FF4D00] text-xs font-semibold tracking-[0.2em] uppercase block">
            {label}
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight leading-[1.1] text-white">
            {heading}
          </h2>
          <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-sm">
            {description}
          </p>
        </div>

        {/* Feature blocks */}
        <div className="space-y-6 max-w-md">
          {features.map((feat) => (
            <div key={feat.number} className="flex gap-4 items-start group">
              <span className="text-[#FF4D00] text-xs font-semibold tracking-wider bg-white/5 border border-white/10 rounded px-2 py-0.5 select-none shrink-0 group-hover:bg-[#FF4D00]/10 group-hover:border-[#FF4D00]/30 transition-colors">
                {feat.number}
              </span>
              <div className="space-y-1">
                <h4 className="font-semibold text-sm text-white tracking-tight">{feat.title}</h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM: Footer help links */}
      <div className="relative z-10 text-xs text-neutral-500 font-light mt-auto pt-6 border-t border-white/5">
        {isLogin ? (
          <>
            Need help? Contact our support{' '}
            <a href="mailto:support@innovacbio.com" className="text-[#FF4D00] font-semibold hover:underline">
              support team
            </a>.
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Link to="/login" className="text-[#FF4D00] font-semibold hover:underline">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// 2. AUTH LAYOUT (Splitscreen Container)
// ============================================================================
interface AuthLayoutProps {
  page: 'login' | 'signup' | 'forgot-password';
  children: React.ReactNode;
}

export function AuthCloseButton({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const navigate = useNavigate();

  const handleClose = () => {
    // Exit authentication flow entirely by replacing current path with home '/'
    navigate('/', { replace: true });
  };

  if (variant === 'mobile') {
    return (
      <button 
        onClick={handleClose} 
        className="w-10 h-10 rounded-full border border-white/20 text-white hover:text-[#FF4D00] hover:border-[#FF4D00]/50 bg-white/10 transition-all duration-200 flex items-center justify-center cursor-pointer focus:outline-none"
        aria-label="Close authentication page"
        title="Close"
      >
        <X size={20} />
      </button>
    );
  }

  return (
    <button 
      onClick={handleClose} 
      className="hidden md:flex absolute top-6 right-6 z-50 w-10 h-10 rounded-full border border-neutral-300 bg-white/90 text-neutral-600 hover:text-[#FF4D00] hover:border-[#FF4D00] hover:bg-white transition-all duration-200 flex items-center justify-center cursor-pointer shadow-sm focus:outline-none"
      aria-label="Close authentication page"
      title="Close"
    >
      <X size={20} />
    </button>
  );
}

export function AuthLayout({ page, children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#F5F5F3] overflow-x-hidden font-sans relative">
      
      {/* DESKTOP CLOSE BUTTON (Absolute positioned on the right panel) */}
      <AuthCloseButton variant="desktop" />

      {/* MOBILE COMPACT BRAND PANEL (ONLY ON MOBILE) */}
      <div className="flex md:hidden bg-[#050505] text-white p-6 justify-between items-center w-full z-20 border-b border-white/5">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="INNOVAC BIOTECHNOLOGIES Logo" className="h-6 w-auto object-contain" />
          <div className="font-semibold text-[10px] uppercase leading-none tracking-widest">
            Innovac
          </div>
        </Link>
        
        {/* Compact circular Close button on mobile */}
        <AuthCloseButton variant="mobile" />
      </div>

      {/* LEFT: Branding Panel (40% width on tablet, 45% on desktop) */}
      <div className="hidden md:block md:w-[40%] lg:w-[45%] bg-[#050505] text-white p-12 min-h-screen relative overflow-hidden shrink-0">
        <AuthBrandPanel page={page} />
      </div>

      {/* RIGHT: Form container (Centered card) */}
      <div className="flex-grow flex items-center justify-center p-6 md:p-12 relative z-10 lg:w-[55%]">
        <div className="w-full flex justify-center py-8">
          {children}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 3. AUTH CARD
// ============================================================================
export function AuthCard({ children, maxWidth = '500px' }: { children: React.ReactNode; maxWidth?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ maxWidth }}
      className="w-full bg-white rounded-[24px] border border-[#D8D8D5] p-8 md:p-12 shadow-sm"
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// 4. INPUT FIELD
// ============================================================================
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  error?: string;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, icon: Icon, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2 w-full text-left">
        <label className="block text-xs font-bold text-[#050505] uppercase tracking-wider">
          {label}
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-neutral-400">
            <Icon size={16} />
          </span>
          <input 
            ref={ref}
            className={cn(
              "w-full bg-[#F5F5F3] border border-[#D8D8D5]/60 focus:border-[#FF4D00] focus:bg-white outline-none rounded-[10px] pl-11 pr-4 py-3.5 text-sm transition-all text-[#050505] placeholder-neutral-400 font-light",
              error && "border-red-500 focus:border-red-500 focus:ring-red-100",
              className
            )} 
            {...props}
          />
        </div>
        {error && <FormError message={error} />}
      </div>
    );
  }
);
InputField.displayName = 'InputField';

// ============================================================================
// 5. PASSWORD FIELD
// ============================================================================
interface PasswordFieldProps extends Omit<InputFieldProps, 'icon'> {
  // Hide icon from props, we handle it internally
}

export const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="space-y-2 w-full text-left">
        <label className="block text-xs font-bold text-[#050505] uppercase tracking-wider">
          {label}
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-neutral-400">
            <Lock size={16} />
          </span>
          <input 
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            className={cn(
              "w-full bg-[#F5F5F3] border border-[#D8D8D5]/60 focus:border-[#FF4D00] focus:bg-white outline-none rounded-[10px] pl-11 pr-12 py-3.5 text-sm transition-all text-[#050505] placeholder-neutral-400 font-light",
              error && "border-red-500 focus:border-red-500 focus:ring-red-100",
              className
            )} 
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral-400 hover:text-[#050505] transition-colors focus:outline-none cursor-pointer"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {error && <FormError message={error} />}
      </div>
    );
  }
);
PasswordField.displayName = 'PasswordField';



// ============================================================================
// 7. AUTH BUTTON
// ============================================================================
interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  loadingText: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function AuthButton({ loading, loadingText, children, className, ...props }: AuthButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading || props.disabled}
      className={cn(
        "w-full bg-[#FF4D00] hover:bg-[#FF5A00] disabled:opacity-50 text-white h-[46px] rounded-[10px] text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer shadow-sm focus:outline-none select-none",
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          <span>{children}</span>
          <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-200" />
        </>
      )}
    </button>
  );
}

// ============================================================================
// 8. PASSWORD STRENGTH
// ============================================================================
export function PasswordStrength({ val }: { val: string }) {
  if (!val) return null;

  const checks = {
    length: val.length >= 8,
    upper: /[A-Z]/.test(val),
    lower: /[a-z]/.test(val),
    number: /[0-9]/.test(val)
  };

  const count = Object.values(checks).filter(Boolean).length;
  const scoreMap = [
    { label: 'Very Weak', color: 'bg-red-500' },
    { label: 'Weak', color: 'bg-orange-500' },
    { label: 'Fair', color: 'bg-yellow-500' },
    { label: 'Good', color: 'bg-blue-500' },
    { label: 'Strong', color: 'bg-green-500' }
  ];

  const strength = scoreMap[count];

  return (
    <div className="space-y-2 mt-2 w-full text-left">
      <div className="flex justify-between items-center text-[10px] font-semibold">
        <span className="text-neutral-400">PASSWORD STRENGTH:</span>
        <span className={cn(
          "font-bold",
          count <= 1 ? "text-red-500" : count === 2 ? "text-orange-500" : count === 3 ? "text-blue-500" : "text-green-500"
        )}>
          {strength.label}
        </span>
      </div>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4].map((step) => (
          <div 
            key={step} 
            className={cn(
              "h-1.5 flex-grow rounded-full transition-all duration-300",
              step <= count ? strength.color : "bg-neutral-200"
            )}
          />
        ))}
      </div>
      
      {/* Criteria check lists */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-1">
        <div className="flex items-center gap-1.5 text-[10px]">
          <div className={cn("w-3.5 h-3.5 rounded-full flex items-center justify-center border", checks.length ? "bg-green-50 border-green-200 text-green-600" : "border-neutral-200 text-neutral-400")}>
            <Check size={8} strokeWidth={3} />
          </div>
          <span className={checks.length ? "text-green-600 font-medium" : "text-neutral-400 font-light"}>8+ Characters</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <div className={cn("w-3.5 h-3.5 rounded-full flex items-center justify-center border", checks.upper ? "bg-green-50 border-green-200 text-green-600" : "border-neutral-200 text-neutral-400")}>
            <Check size={8} strokeWidth={3} />
          </div>
          <span className={checks.upper ? "text-green-600 font-medium" : "text-neutral-400 font-light"}>Uppercase Letter</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] mt-0.5">
          <div className={cn("w-3.5 h-3.5 rounded-full flex items-center justify-center border", checks.lower ? "bg-green-50 border-green-200 text-green-600" : "border-neutral-200 text-neutral-400")}>
            <Check size={8} strokeWidth={3} />
          </div>
          <span className={checks.lower ? "text-green-600 font-medium" : "text-neutral-400 font-light"}>Lowercase Letter</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] mt-0.5">
          <div className={cn("w-3.5 h-3.5 rounded-full flex items-center justify-center border", checks.number ? "bg-green-50 border-green-200 text-green-600" : "border-neutral-200 text-neutral-400")}>
            <Check size={8} strokeWidth={3} />
          </div>
          <span className={checks.number ? "text-green-600 font-medium" : "text-neutral-400 font-light"}>Number (0-9)</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 9. FORM ERROR / HELPERS
// ============================================================================
export function FormError({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-red-500 mt-1 font-medium">
      <AlertCircle size={14} className="shrink-0" />
      <span>{message}</span>
    </div>
  );
}


