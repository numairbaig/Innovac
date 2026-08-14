import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { SEO } from '../../components/SEO';
import { supabase } from '../../lib/supabase';
import { 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Globe, 
  ShieldCheck, 
  Edit3, 
  Save, 
  X, 
  CheckCircle2, 
  Sparkles, 
  Tag, 
  Calendar 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccountProfile() {
  const { profile, user } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(profile?.full_name || '');
  const [phone, setPhone] = useState('+92 300 1234567');
  const [organization, setOrganization] = useState('Quaid-i-Azam University');
  const [country, setCountry] = useState('Pakistan');
  const [bio, setBio] = useState('Biotechnology researcher specializing in computational molecular modeling.');

  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const userName = profile?.full_name || user?.email?.split('@')[0] || 'Gamer';
  const userInitials = userName.charAt(0).toUpperCase();

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveSuccess(false);

    try {
      if (user?.id) {
        await supabase.from('profiles').update({
          full_name: fullName,
        }).eq('id', user.id);
      }

      setSaveSuccess(true);
      setIsEditing(false);
      setTimeout(() => setSaveSuccess(false), 4000);
    } catch (err) {
      console.warn('Profile save failed:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <SEO title="My Profile | INNOVAC BIOTECHNOLOGIES" />

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF4D00]">PROFILE</span>
          <h1 className="text-3xl font-bold tracking-tight text-[#080808] mt-0.5">My Profile</h1>
          <p className="text-neutral-500 text-sm font-light">
            Manage your personal information and account details.
          </p>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-5 py-2.5 bg-[#FF4D00] hover:bg-[#E64500] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <Edit3 size={16} />
          <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
        </button>
      </div>

      {/* Success Notification Banner */}
      {saveSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-semibold flex items-center gap-3 shadow-sm"
        >
          <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
          <span>Profile information updated successfully!</span>
        </motion.div>
      )}

      {/* Hero Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-8 rounded-[24px] border border-black/8 shadow-sm relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF4D00]/5 via-[#20C77A]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left relative z-10">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-orange-100 via-amber-50 to-orange-200 border-2 border-[#FF4D00]/30 flex items-center justify-center text-[#FF4D00] text-4xl font-bold shadow-lg">
              {userInitials}
            </div>
            <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">
              ✓
            </span>
          </div>

          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <h2 className="text-2xl font-bold text-[#080808] tracking-tight">{userName}</h2>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs">
                <ShieldCheck size={14} /> VERIFIED
              </span>
            </div>

            <p className="text-xs font-semibold text-[#FF4D00] uppercase tracking-wider">
              {profile?.role === 'PUBLIC_USER' ? 'Public User / Researcher' : profile?.role || 'Public User'}
            </p>

            <p className="text-xs text-neutral-500 font-light flex items-center justify-center sm:justify-start gap-2 pt-1">
              <Calendar size={14} className="text-neutral-400" />
              <span>Member since May 2026</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Edit Profile Form OR View Mode */}
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.form
            key="edit-form"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSaveProfile}
            className="bg-white p-8 rounded-[24px] border border-black/8 shadow-sm space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <h3 className="text-base font-bold text-[#080808] uppercase tracking-wider">Edit Personal Information</h3>
              <span className="text-xs text-neutral-400 font-light">Update your details below</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-medium text-[#080808] focus:bg-white focus:border-[#FF4D00] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email (Disabled) */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Email Address (Locked)</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="email"
                    disabled
                    value={user?.email || ''}
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-100 border border-neutral-200 rounded-xl text-xs font-medium text-neutral-500 cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Phone Number</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-medium text-[#080808] focus:bg-white focus:border-[#FF4D00] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Organization */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Organization / Institution</label>
                <div className="relative">
                  <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-medium text-[#080808] focus:bg-white focus:border-[#FF4D00] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Country */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Country</label>
                <div className="relative">
                  <Globe size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-medium text-[#080808] focus:bg-white focus:border-[#FF4D00] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Profile Bio</label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-medium text-[#080808] focus:bg-white focus:border-[#FF4D00] focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-100">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-5 py-2.5 border border-neutral-300 hover:border-neutral-400 text-neutral-700 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2.5 bg-[#FF4D00] hover:bg-[#E64500] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Save size={16} />
                <span>{saving ? 'Saving...' : 'Save Changes'}</span>
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="view-details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white p-8 rounded-[24px] border border-black/8 shadow-sm space-y-8"
          >
            <div>
              <h3 className="text-sm font-bold text-[#080808] tracking-wider uppercase mb-6 pb-3 border-b border-neutral-100 flex items-center justify-between">
                <span>Personal Information</span>
                <span className="text-xs font-normal text-neutral-400 font-light">Updated 2 days ago</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Field 1 */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                    <User size={13} className="text-neutral-400" /> Full Name
                  </span>
                  <p className="text-sm font-semibold text-[#080808]">{userName}</p>
                </div>

                {/* Field 2 */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Mail size={13} className="text-neutral-400" /> Email Address
                  </span>
                  <p className="text-sm font-semibold text-[#080808]">{user?.email || 'N/A'}</p>
                </div>

                {/* Field 3 */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Phone size={13} className="text-neutral-400" /> Phone Number
                  </span>
                  <p className="text-sm font-semibold text-[#080808]">{phone}</p>
                </div>

                {/* Field 4 */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Building2 size={13} className="text-neutral-400" /> Organization / Institution
                  </span>
                  <p className="text-sm font-semibold text-[#080808]">{organization}</p>
                </div>

                {/* Field 5 */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Globe size={13} className="text-neutral-400" /> Country
                  </span>
                  <p className="text-sm font-semibold text-[#080808]">{country}</p>
                </div>

                {/* Field 6 */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Tag size={13} className="text-neutral-400" /> Account Status
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
                  </span>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="pt-4 border-t border-neutral-100">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                Profile Bio
              </span>
              <p className="text-xs text-neutral-600 font-light leading-relaxed bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                {bio}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
