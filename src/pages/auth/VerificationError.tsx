import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout, AuthCard } from '../../components/auth/AuthComponents';
import { SEO } from '../../components/SEO';

export default function VerificationError() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/', { replace: true });
  };

  const handleLogin = () => {
    navigate('/login', { replace: true });
  };

  return (
    <AuthLayout page="login">
      <SEO title="Verification Error | INNOVAC BIOTECHNOLOGIES" noindex={true} />
      <AuthCard maxWidth="600px">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#050505] uppercase">Verification Link Error</h1>
          <div className="w-12 h-1 bg-[#FF4D00] mx-auto my-4" />
          <p className="text-neutral-500 text-sm font-light">
            The verification link is invalid, has expired, or has already been used. 
            Please request a new link or contact our support team.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <button onClick={handleLogin} className="px-6 py-3 bg-[#FF4D00] text-white font-semibold rounded-[10px] hover:bg-[#E64500] transition-colors cursor-pointer">
            Go to Login
          </button>
          <button onClick={handleClose} className="px-6 py-3 bg-neutral-100 text-neutral-800 font-semibold rounded-[10px] hover:bg-neutral-200 transition-colors cursor-pointer">
            Back to Home
          </button>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
