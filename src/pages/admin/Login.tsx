import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { ArrowRight, ShieldCheck, Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminLogin() {
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
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      if (data.user && !data.user.email_confirmed_at) {
        await supabase.auth.signOut();
        throw new Error('Your email address is not verified. Please check your inbox to confirm your account.');
      }

      navigate('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden py-16 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full bg-accent/5 blur-[140px]" />
      </div>

      <SEO title="Admin Control Center | INNOVAC BIOTECHNOLOGIES" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[480px] w-full bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent shadow-[0_0_20px_rgba(255,77,0,0.15)]">
            <ShieldCheck size={28} />
          </div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-2 block">
            INNOVAC CONTROL PANEL
          </span>
          <h1 className="text-3xl font-medium tracking-tight text-white mb-3">Admin Access.</h1>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Enter administrative credentials to access layout structures, service orders, and client accounts.
          </p>
        </div>

        {error && (
          <div className="p-4 mb-6 bg-red-950/20 border border-red-800/40 text-red-400 rounded-xl text-xs font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider">Admin Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-neutral-500">
                <Mail size={16} />
              </span>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#050505] border border-white/10 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-none rounded-[10px] pl-11 pr-4 py-3 text-sm transition-all text-white placeholder-neutral-600" 
                placeholder="admin@innovacbiotech.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider">Password</label>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-neutral-500">
                <Lock size={16} />
              </span>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#050505] border border-white/10 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-none rounded-[10px] pl-11 pr-4 py-3 text-sm transition-all text-white placeholder-neutral-600" 
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
              {loading ? 'AUTHORIZING...' : 'ACCESS CONTROL CENTER →'}
            </Button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm">
          <Link to="/admin/forgot-password" className="text-neutral-400 hover:text-white transition-colors text-xs uppercase tracking-wider font-semibold">
            Forgot Admin Password?
          </Link>
        </div>
      </motion.div>
    </div>
  );
}