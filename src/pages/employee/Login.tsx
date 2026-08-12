import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { ArrowRight, Lock, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmployeeLogin() {
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
      const { data, error: loginError } = await supabase.auth.signInWithPassword({ email, password });
      if (loginError) throw loginError;

      // Check if user is employee or admin
      const role = data.user?.user_metadata?.role;
      if (role !== 'EMPLOYEE' && role !== 'SUPERVISOR' && role !== 'ADMIN' && role !== 'SUPER_ADMIN') {
        throw new Error('Access denied. This portal is for employees only.');
      }
      
      navigate('/employee/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F3] relative overflow-hidden py-16 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[40%] -left-[20%] w-[80%] aspect-square rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[80%] aspect-square rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <SEO title="Employee Login | INNOVAC BIOTECHNOLOGIES" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[480px] w-full bg-white rounded-[32px] border border-[#D8D8D5] p-8 md:p-12 shadow-sm relative z-10"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              INNOVAC BIOTECHNOLOGIES
            </span>
          </Link>
          <h1 className="text-3xl font-medium tracking-tight text-[#080808] mb-3">Employee Portal.</h1>
          <p className="text-[#6A6A6A] text-sm leading-relaxed">
            Secure internal workspace for Innovac staff, researchers, and project supervisors.
          </p>
        </div>

        {error && (
          <div className="p-4 mb-6 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#080808] uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-neutral-400">
                <Mail size={16} />
              </span>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-[#D8D8D5] focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-none rounded-[10px] pl-11 pr-4 py-3 text-sm transition-all text-[#080808]" 
                placeholder="employee@innovacbiotech.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-[#080808] uppercase tracking-wider">Password</label>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-neutral-400">
                <Lock size={16} />
              </span>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-[#D8D8D5] focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-none rounded-[10px] pl-11 pr-4 py-3 text-sm transition-all text-[#080808]" 
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="pt-2">
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-accent hover:bg-accent-bright text-white border-none py-3 text-sm font-semibold uppercase tracking-wider"
            >
              {loading ? 'AUTHENTICATING...' : 'EMPLOYEE SIGN IN →'}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
