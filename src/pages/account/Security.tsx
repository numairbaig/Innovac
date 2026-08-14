import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { supabase } from '../../lib/supabase';
import { ShieldAlert, Lock, Smartphone, Key, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { PasswordField } from '../../components/auth/AuthComponents';

export default function AccountSecurity() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [twoFactor, setTwoFactor] = useState(false);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const { error: updateErr } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (updateErr) throw updateErr;

      setSuccess('Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err: any) {
      setError(err.message || 'Failed to update password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <SEO title="Security Settings | INNOVAC BIOTECHNOLOGIES" />

      <div>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF4D00]">ACCOUNT SECURITY</span>
        <h1 className="text-3xl font-bold tracking-tight text-[#080808] mt-0.5">Security Settings</h1>
        <p className="text-neutral-500 text-sm font-light">
          Manage your password, email authentication, and active sessions.
        </p>
      </div>

      {/* Password Change Form */}
      <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-black/8 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#FF4D00] flex items-center justify-center">
              <Lock size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#080808]">Password</h3>
              <p className="text-xs text-neutral-500 font-light">Update your account password</p>
            </div>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold">
            {error}
          </div>
        )}

        {success && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 size={16} />
            <span>{success}</span>
          </div>
        )}

        <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
          <PasswordField
            label="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            required
          />

          <PasswordField
            label="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 bg-[#FF4D00] hover:bg-[#E64500] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer disabled:opacity-50"
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-black/8 shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
            <Smartphone size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#080808]">Two-Factor Authentication (2FA)</h4>
            <p className="text-xs text-neutral-500 font-light mt-0.5">
              Add an extra layer of security to your portal account.
            </p>
          </div>
        </div>

        <button
          onClick={() => setTwoFactor(!twoFactor)}
          className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
            twoFactor ? 'bg-[#20C77A]' : 'bg-neutral-300'
          }`}
        >
          <span
            className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
              twoFactor ? 'left-6.5' : 'left-0.5'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
