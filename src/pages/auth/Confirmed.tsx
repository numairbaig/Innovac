import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout, AuthCard } from '../../components/auth/AuthComponents';
import { SEO } from '../../components/SEO';

export default function Confirmed() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/', { replace: true });
  };

  return (
    <AuthLayout page="signup">
      <SEO title="Email Confirmed | INNOVAC BIOTECHNOLOGIES" noindex={true} />
      <AuthCard maxWidth="600px">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#050505] uppercase">Email Confirmed</h1>
          <div className="w-12 h-1 bg-[#FF4D00] mx-auto my-4" />
          <p className="text-neutral-500 text-sm font-light">Your email has been successfully verified. You can now log in.</p>
        </div>
        <div className="flex justify-center gap-4">
          <button onClick={handleClose} className="px-4 py-2 bg-[#FF4D00] text-white rounded-md hover:bg-[#FF5A00] transition-colors">
            Go to Home
          </button>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
